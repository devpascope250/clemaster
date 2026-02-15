'use client'

import { getCurrentUser, isAdmin } from '@/lib/auth'
import { StatCard } from '@/components/StatCard'
import { BarChart3, FileText, MessageSquare, Users } from 'lucide-react'

export default function DashboardPage() {
  const user = typeof window !== 'undefined' ? getCurrentUser() : null

  const stats = [
    {
      icon: <FileText size={32} />,
      label: 'Total Blog Posts',
      value: 24,
      description: 'Published articles',
    },
    {
      icon: <MessageSquare size={32} />,
      label: 'Messages Received',
      value: 147,
      description: 'This month',
    },
  ]

  const adminStats = [
    {
      icon: <Users size={32} />,
      label: 'Total Users',
      value: 42,
      description: 'Active users',
    },
    {
      icon: <BarChart3 size={32} />,
      label: 'Page Views',
      value: '12.5K',
      description: 'This month',
    },
  ]

  const allStats = isAdmin(user) ? [...stats, ...adminStats] : stats

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.name}!</h1>
        <p className="text-muted-foreground mt-2 capitalize">You are logged in as {user?.role}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {allStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/dashboard/blogs"
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
          >
            <div>
              <p className="font-semibold text-foreground group-hover:text-primary">View Blog Posts</p>
              <p className="text-sm text-muted-foreground">Manage your articles</p>
            </div>
          </a>
          <a
            href="/dashboard/messages"
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
          >
            <div>
              <p className="font-semibold text-foreground group-hover:text-primary">View Messages</p>
              <p className="text-sm text-muted-foreground">Check contact form submissions</p>
            </div>
          </a>
          {isAdmin(user) && (
            <>
              <a
                href="/dashboard/users"
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Manage Users</p>
                  <p className="text-sm text-muted-foreground">View and manage users</p>
                </div>
              </a>
              <a
                href="/dashboard/blogs/create"
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Create Blog Post</p>
                  <p className="text-sm text-muted-foreground">Write a new article</p>
                </div>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
