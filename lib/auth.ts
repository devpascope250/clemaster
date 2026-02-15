export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor' | 'user'
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null

  const userStr = localStorage.getItem('user')
  if (!userStr) return null

  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export function setUser(user: User) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function logout() {
  localStorage.removeItem('user')
}

export function isAdmin(user: User | null): boolean {
  return user?.role === 'admin'
}

export function isEditor(user: User | null): boolean {
  return user?.role === 'editor' || user?.role === 'admin'
}
