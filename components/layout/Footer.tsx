import Link from 'next/link'
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Blog', href: '/blog' },
        { label: 'Team', href: '/team' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'LinkedIn', href: '#', icon: Linkedin },
        { label: 'Twitter', href: '#', icon: Twitter },
        { label: 'Facebook', href: '#', icon: Facebook },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary text-lg font-bold">
                C
              </div>
              <span className="text-xl font-bold">Clemaster</span>
            </div>
            <p className="text-sm text-white/80">
              Leading manufacturer of hygienic and cleaning products for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a href="mailto:info@clemaster.com" className="hover:text-white/80 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+1234567890" className="hover:text-white/80 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      {/* @ts-ignore */}
                      {link.icon && <link.icon size={16} />}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
            <p>&copy; {currentYear} Clemaster Industries. All rights reserved.</p>
            <p>Value Platform Industrial Rwanda Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
