'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, Eye, EyeOff, ExternalLink } from 'lucide-react'
import { SocialMediaAccount, defaultSocialMediaAccounts, platformOptions } from '@/lib/data/socialMedia'
import { getCurrentUser, isAdmin } from '@/lib/auth'
import Link from 'next/link'

interface FormData {
  platform: 'Facebook' | 'Instagram' | 'LinkedIn' | 'Twitter' | 'YouTube'
  url: string
  status: 'active' | 'inactive'
}

export default function SocialMediaPage() {
  const [accounts, setAccounts] = useState<SocialMediaAccount[]>(defaultSocialMediaAccounts)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    platform: 'Facebook',
    url: '',
    status: 'active',
  })

  const user = typeof window !== 'undefined' ? getCurrentUser() : null
  const canEdit = isAdmin(user)

  const handleAddClick = () => {
    setEditingId(null)
    setFormData({ platform: 'Facebook', url: '', status: 'active' })
    setShowForm(true)
  }

  const handleEditClick = (account: SocialMediaAccount) => {
    setEditingId(account.id)
    setFormData({
      platform: account.platform,
      url: account.url,
      status: account.status,
    })
    setShowForm(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.url) return

    if (editingId) {
      setAccounts(
        accounts.map((acc) =>
          acc.id === editingId
            ? {
                ...acc,
                platform: formData.platform,
                url: formData.url,
                status: formData.status,
              }
            : acc
        )
      )
    } else {
      setAccounts([
        ...accounts,
        {
          id: Date.now().toString(),
          platform: formData.platform,
          url: formData.url,
          icon: formData.platform.toLowerCase(),
          status: formData.status,
          createdAt: new Date().toISOString().split('T')[0],
        },
      ])
    }

    setShowForm(false)
    setFormData({ platform: 'Facebook', url: '', status: 'active' })
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this social media account?')) {
      setAccounts(accounts.filter((acc) => acc.id !== id))
    }
  }

  const toggleStatus = (id: string) => {
    setAccounts(
      accounts.map((acc) =>
        acc.id === id
          ? { ...acc, status: acc.status === 'active' ? 'inactive' : 'active' }
          : acc
      )
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Social Media Management</h1>
          <p className="text-muted-foreground mt-1">Manage your social media platforms and links</p>
        </div>
        {canEdit && (
          <Button onClick={handleAddClick} className="bg-primary hover:bg-primary/90 text-white gap-2">
            <Plus size={18} />
            Add Platform
          </Button>
        )}
      </div>

      {/* Add/Edit Form */}
      {canEdit && showForm && (
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">
            {editingId ? 'Edit Social Media' : 'Add New Social Media Platform'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Platform</label>
                <select
                  value={formData.platform}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      platform: e.target.value as FormData['platform'],
                    })
                  }
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {platformOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as 'active' | 'inactive',
                    })
                  }
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">URL</label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://..."
                required
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                {editingId ? 'Update' : 'Add'} Platform
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Social Media Table */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        {accounts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Platform</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">URL</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Created</th>
                  {canEdit && <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {accounts.map((account) => (
                  <tr key={account.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{account.platform}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <a
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {account.url}
                        <ExternalLink size={14} />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                          account.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {account.status === 'active' ? (
                          <Eye size={14} />
                        ) : (
                          <EyeOff size={14} />
                        )}
                        {account.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{account.createdAt}</td>
                    {canEdit && (
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleStatus(account.id)}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                            title={`Toggle status`}
                          >
                            {account.status === 'active' ? (
                              <EyeOff size={18} className="text-muted-foreground" />
                            ) : (
                              <Eye size={18} className="text-muted-foreground" />
                            )}
                          </button>
                          <button
                            onClick={() => handleEditClick(account)}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={18} className="text-muted-foreground" />
                          </button>
                          <button
                            onClick={() => handleDelete(account.id)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={18} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            <p>No social media accounts configured yet.</p>
            {canEdit && (
              <Button onClick={handleAddClick} variant="outline" className="mt-4">
                Add First Platform
              </Button>
            )}
          </div>
        )}
      </div>

      {/* View-only message for non-admins */}
      {!canEdit && (
        <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-blue-800">
          <p className="text-sm">You have view-only access to social media management. Contact an admin to make changes.</p>
        </div>
      )}
    </div>
  )
}
