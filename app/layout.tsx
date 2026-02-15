import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactButtons } from '@/components/layout/ContactButtons'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clemaster Industries | Professional Cleaning Solutions',
  description:
    'Leading manufacturer of professional-grade cleaning and hygienic products serving businesses worldwide. Quality, innovation, and sustainability.',
  generator: 'v0.app',
  openGraph: {
    title: 'Clemaster Industries | Professional Cleaning Solutions',
    description: 'Leading manufacturer of professional-grade cleaning and hygienic products.',
    url: 'https://clemaster.com',
    siteName: 'Clemaster Industries',
    images: [
      {
        url: '/images/hero-cleaning.jpg',
        width: 1200,
        height: 630,
        alt: 'Clemaster Industries',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clemaster Industries',
    description: 'Professional cleaning solutions for businesses worldwide.',
    images: ['/images/hero-cleaning.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactButtons />
      </body>
    </html>
  )
}
