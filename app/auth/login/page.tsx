'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useFormik} from 'formik'
import * as Yup from 'yup'
export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',  
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async(values) => {
      try{
        setError('')
        setLoading(true)
        await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(values),
        }).then(res => {
          if (!res.ok) {
            throw new Error('Login failed')
          }
          return res.json()
        }).then(data => {
          console.log('Login response:', data)
          localStorage.setItem('user', JSON.stringify(data.user))
          router.push('/dashboard')
        }).catch(error => {
          setError(error.message || 'Login failed')
        }).finally(() => {
          setLoading(false)
        })
      } catch (error) {
        const err = error as Error
        setError(err.message || 'An error occurred during login')
        setLoading(false)
      }
    },
  })


  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          {/* <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl text-primary mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-lg font-bold">
              C
            </div>
            <span>Clemaster</span>
          </Link> */}
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="you@example.com"
                className={`w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
              />
             
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="••••••••"
                className={`w-full pl-12 pr-10 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          {/* <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-primary/80 font-medium">
              Forgot password?
            </a>
          </div> */}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        {/* Demo Credentials */}
        {/* <div className="mt-6 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Demo Credentials:</p>
          <p>Email: admin@clemaster.com</p>
          <p>Password: any password</p>
        </div> */}

        {/* Sign Up Link */}
        <p className="text-center text-muted-foreground mt-6">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-primary hover:text-primary/80 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
