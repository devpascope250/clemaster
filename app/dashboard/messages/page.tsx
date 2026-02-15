'use client'

import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Mail, Trash2, Check } from 'lucide-react'

const mockMessages = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Product Inquiry',
    message: 'I am interested in your floor cleaning products...',
    date: '2024-02-14',
    read: false,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Partnership Opportunity',
    message: 'We would like to discuss a partnership with Clemaster...',
    date: '2024-02-13',
    read: true,
  },
  {
    id: '3',
    name: 'Robert Williams',
    email: 'robert@example.com',
    subject: 'Technical Support',
    message: 'We are experiencing issues with your product...',
    date: '2024-02-12',
    read: true,
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    subject: 'Bulk Order Request',
    message: 'We would like to place a bulk order of your products...',
    date: '2024-02-11',
    read: false,
  },
]

function MessagesContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Contact Messages</h1>
        <p className="text-muted-foreground mt-1">View and manage messages from your contact form</p>
      </div>

      {/* Messages Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-foreground">From</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground hidden sm:table-cell">Subject</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground hidden md:table-cell">Date</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockMessages.map((msg) => (
                <tr
                  key={msg.id}
                  className={`border-t border-border hover:bg-muted/50 transition-colors ${
                    !msg.read ? 'bg-primary/5' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className={`font-medium ${!msg.read ? 'font-bold text-foreground' : 'text-foreground'}`}>
                        {msg.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{msg.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <p className={!msg.read ? 'font-semibold text-foreground' : 'text-muted-foreground'}>
                      {msg.subject}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    {new Date(msg.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      msg.read
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {msg.read ? 'Read' : 'Unread'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-primary" title="Mark as read">
                        <Check size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors text-muted-foreground hover:text-red-600" title="Delete">
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

      {/* Summary */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Messages</p>
          <p className="text-2xl font-bold text-foreground">{mockMessages.length}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Unread</p>
          <p className="text-2xl font-bold text-foreground">{mockMessages.filter((m) => !m.read).length}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Read</p>
          <p className="text-2xl font-bold text-foreground">{mockMessages.filter((m) => m.read).length}</p>
        </div>
      </div>
    </div>
  )
}

export default function MessagesPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <MessagesContent />
    </ProtectedRoute>
  )
}
