'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser, User } from '@/lib/auth'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'editor' | 'user'
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)

    if (!currentUser) {
      router.push('/auth/login')
      return
    }

    // Check role if required
    if (requiredRole) {
      const hasAccess =
        requiredRole === 'user' ||
        (requiredRole === 'editor' && (currentUser.role === 'editor' || currentUser.role === 'admin')) ||
        (requiredRole === 'admin' && currentUser.role === 'admin')

      if (!hasAccess) {
        router.push('/dashboard')
        return
      }
    }

    setIsLoading(false)
  }, [router, requiredRole])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
