'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/SectionHeading'
import { companyInfo } from '@/lib/data/services'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a production app, send to API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: companyInfo.contact.email,
      href: `mailto:${companyInfo.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: companyInfo.contact.phone,
      href: `tel:${companyInfo.contact.phone}`,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: `${companyInfo.contact.address}, ${companyInfo.contact.country}`,
      href: '#',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 8:00 AM - 5:00 PM',
      href: '#',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Get In Touch" description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible." />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex gap-4 rounded-lg border border-border bg-card p-4 hover:shadow-lg transition-shadow group"
                    >
                      <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-muted-foreground">{info.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-800">We've received your message. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+250 788 123 456"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Visit Us</h2>
          <div className="w-full h-96 rounded-lg border border-border bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Map placeholder: {companyInfo.contact.address}
                <br />
                {companyInfo.contact.country}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
