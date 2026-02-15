import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-left space-y-2">
          <p className="text-sm font-semibold text-foreground">Helpful Links:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                → Browse Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                → Learn About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                → Read Our Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
