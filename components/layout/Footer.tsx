'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { Mail, MapPin, Music, Phone } from 'lucide-react'
import { defaultSocialMediaAccounts } from '@/lib/data/socialMedia'
import Image from 'next/image'

const companyInfo = {
  name: 'Clemaster Industries',
  legalName: 'Value Platform Industrial Rwanda Ltd',
  domain: 'clemasterindustries.com',
  email: 'info@clemasterindustries.com',
  phone: '+250793761333',
  address: 'Rwamagana, Rwanda',
  motto: 'Excellence in Cleaning, Innovation in Hygiene',
}

const socialMediaIcons: Record<string, React.ComponentType<{ size: number }>> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  tiktok: FaTiktok,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Quick Links',
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
  ]

  const activeSocialMedia = defaultSocialMediaAccounts.filter((acc) => acc.status === 'active')

  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-20 h-16 text-white">
                <Image
                  src="/images/logo.PNG"
                  alt="Clemaster Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* <span className="text-xl font-bold">Clemaster</span> */}
            </div>
            <p className="text-sm text-white/80 italic">{companyInfo.motto}</p>
            <p className="text-sm text-white/80">
              Leading manufacturer of hygienic and cleaning products for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a href={`mailto:${companyInfo.email}`} className="text-white/80 hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a href={`tel:${companyInfo.phone}`} className="text-white/80 hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{companyInfo.address}</span>
              </div>
            </div>

            {/* Social Media Icons */}
            {activeSocialMedia.length > 0 && (
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-xs font-semibold text-white/60 mb-3">Follow Us</h4>
                <div className="flex gap-3 flex-wrap">
                  {activeSocialMedia.map((account) => {
                    const IconComponent = socialMediaIcons[account.icon]
                    return (
                      <a
                        key={account.id}
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={account.platform}
                        className="hover:text-white/80 transition-colors"
                      >
                        {IconComponent ? <IconComponent size={20} /> : <Phone size={20} />}
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
            <p>&copy; {currentYear} {companyInfo.legalName}. All rights reserved.</p>
            <p>
              <span className="font-semibold">{companyInfo.domain}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
