'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/SectionHeading'
import { companyInfo } from '@/lib/data/services'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'sonner';
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          setTimeout(() => {
            formik.resetForm();
          }, 3000);
          setSubmitted(true);
        } else {
          console.error('Failed to submit contact form');
        }
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
      }
    }
  })


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
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.errors.fullName ? 'border-red-500' : ''}`}
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
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.errors.email ? 'border-red-500' : ''}`}
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
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.errors.phone ? 'border-red-500' : ''}`}
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
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.errors.subject ? 'border-red-500' : ''}`}
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
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none ${formik.errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base"
                    disabled={formik.isSubmitting}
                  >
                    {
                      formik.isSubmitting ? 'Sending...' : 'Send Message'
                    }
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
          <div className="w-full h-96 rounded-lg border border-border bg-muted overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255202.26987698404!2d30.05892870061029!3d-1.938299136397246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db455b99d13143%3A0x3217581f1823376b!2sValue%20Platform%20Industrial%20Rwanda%20Ltd!5e0!3m2!1sen!2srw!4v1772496702197!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-muted-foreground mt-4">
            {companyInfo.contact.address}, {companyInfo.contact.country}
          </p>
        </div>
      </section>
    </>
  )
}
