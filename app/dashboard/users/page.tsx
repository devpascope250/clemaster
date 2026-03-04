'use client'

import { Button } from '@/components/ui/button'
import { Trash2, Edit2, Shield, Plus, X } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { User } from '@prisma/client'
import React from 'react'


function UsersContent() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingUser, setIsLoadingUser] = React.useState(true);
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Use mock data if API fails
      setUsers([]);
    } finally {
      setIsLoadingUser(false)
    }
  };
  React.useEffect(() => {

    fetchUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: 'user',
      phone: '',
      status: 'active',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      role: Yup.string().oneOf(['editor'], 'Invalid role').required('Role is required'),
      phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      status: Yup.string().oneOf(['active', 'inactive'], 'Invalid status').required('Status is required'),
      password: editingUser
        ? Yup.string()
        : Yup.string().required('Password is required for new users'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        if (editingUser) {
          // Update existing user
          const response = await fetch(`/api/users/${editingUser.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            fetchUsers();
          }
        } else {
          // Create new user
          const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...values,
              joinDate: new Date().toISOString().split('T')[0],
            }),
          });

          if (response.ok) {
            fetchUsers();
          }
        }

        closeModal();
      } catch (error) {
        console.error('Error saving user:', error);
      } finally {
        setIsLoading(false);
      }
    }
  });

  const handleEdit = (user: User) => {
    setEditingUser(user);
    formik.setValues({
      name: user.name || '',
      email: user.email,
      role: user.role,
      phone: user.phone || '',
      status: user.status || 'active',
      password: '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`/api/users/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setUsers(users.filter(user => user.id !== id));
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    formik.resetForm();
  };

  const openCreateModal = () => {
    setEditingUser(null);
    formik.resetForm();
    setIsModalOpen(true);
  };

  if (isLoadingUser) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground mt-1">Manage platform users and their roles</p>
        </div>
        <Button onClick={openCreateModal} className="flex items-center gap-2">
          <Plus size={16} />
          Add User
        </Button>
      </div>


      {/* Users Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-foreground">User</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground hidden sm:table-cell">Role</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground hidden md:table-cell">Join Date</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-foreground">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${user.role === 'admin'
                      ? 'bg-purple-100 text-purple-800'
                      : user.role === 'editor'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                      }`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                      }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-primary"
                        title="Edit user"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors text-muted-foreground hover:text-red-600"
                        title="Delete user"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create/Edit User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-background rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {editingUser ? 'Edit User' : 'Create New User'}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body - Form */}
            <form onSubmit={formik.handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${formik.touched.name && formik.errors.name
                      ? 'border-red-500'
                      : 'border-border'
                      }`}
                    placeholder="Enter full name"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${formik.touched.email && formik.errors.email
                      ? 'border-red-500'
                      : 'border-border'
                      }`}
                    placeholder="Enter email address"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${formik.touched.phone && formik.errors.phone
                      ? 'border-red-500'
                      : 'border-border'
                      }`}
                    placeholder="Enter 10-digit phone number"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Role Field */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.role}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${formik.touched.role && formik.errors.role
                      ? 'border-red-500'
                      : 'border-border'
                      }`}
                  >
                    <option value="editor">Editor</option>
                  </select>
                  {formik.touched.role && formik.errors.role && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.role}</p>
                  )}
                </div>

                {/* Status Field */}
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-foreground mb-1">
                    Status *
                  </label>
                  <select
                    id="status"
                    name="status"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.status}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${formik.touched.status && formik.errors.status
                      ? 'border-red-500'
                      : 'border-border'
                      }`}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {formik.touched.status && formik.errors.status && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.status}</p>
                  )}
                </div>

                {/* password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                    Password {editingUser ? '(Leave blank to keep current password)' : '*'}
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password || ''}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${formik.touched.password && formik.errors.password
                      ? 'border-red-500'
                      : 'border-border'
                      }`}
                    placeholder="Enter password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeModal}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !formik.isValid || !formik.dirty}
                >
                  {isLoading ? 'Saving...' : editingUser ? 'Update User' : 'Create User'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Users</p>
          <p className="text-2xl font-bold text-foreground">{users.length}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Active Users</p>
          <p className="text-2xl font-bold text-foreground">{users.filter((u) => u.status === 'active').length}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Admins</p>
          <p className="text-2xl font-bold text-foreground">{users.filter((u) => u.role === 'admin').length}</p>
        </div>
      </div>
    </div>
  )
}

export default function UsersPage() {
  return <UsersContent />
}