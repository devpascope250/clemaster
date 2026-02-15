'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getCurrentUser, logout } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { LogOut, User, ChevronDown } from 'lucide-react'

export function DashboardHeader() {
  const router = useRouter()
  const user = typeof window !== 'undefined' ? getCurrentUser() : null
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  return (
    <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-xl font-bold text-foreground">Dashboard</h1>

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-foreground">{user?.name || 'User'}</p>
            <p className="text-xs text-muted-foreground capitalize">{user?.role || 'user'}</p>
          </div>
          <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg">
            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors rounded-t-lg">
              <User size={16} />
              Profile Settings
            </button>
            <Link
              href="/"
              onClick={() => setIsDropdownOpen(false)}
              className="w-full block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-t border-border"
            >
              Back to Website
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-border rounded-b-lg"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
