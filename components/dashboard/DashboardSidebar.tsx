'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, Users, MessageSquare, FileText, Plus, Share2 } from 'lucide-react'
import React, { useMemo } from 'react'
import { useAuth } from '@/hooks/useAuth'
export function DashboardSidebar() {
  const pathname = usePathname()
  const { user, checkAuth, isLoading } = useAuth()
React.useEffect(() => {
    checkAuth()
  }, [])
  const menuItems = useMemo(() => {
    const baseItems = [
      {
        label: 'Overview',
        href: '/dashboard',
        icon: BarChart3,
      },
    ]

    // Admin-only items
    if (user?.role === "admin") {
      baseItems.push({
        label: 'Users',
        href: '/dashboard/users',
        icon: Users,
      })
      baseItems.push({
        label: 'Messages',
        href: '/dashboard/messages',
        icon: MessageSquare,
      })
      baseItems.push({
        label: 'Social Media',
        href: '/dashboard/social-media',
        icon: Share2,
      })
    }

    // Editor and Admin items
    if (user?.role === "editor" || user?.role === "admin") {
      baseItems.push({
        label: 'Blog Posts',
        href: '/dashboard/blogs',
        icon: FileText,
      })
    }

    return baseItems
  }, [user])

  if (isLoading) {
    return (
      <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </aside>
    )
  }
  return (
    <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-lg font-bold">
            C
          </div>
          <span>Clemaster</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          )
        })}

        {/* Create Blog Link */}
        {user?.role === "editor" && (
          <Link
            href="/dashboard/blogs/create"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
              pathname === '/dashboard/blogs/create'
                ? 'bg-primary text-white'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            <Plus size={20} />
            Create Post
          </Link>
        )}
      </nav>
    </aside>
  )
}
