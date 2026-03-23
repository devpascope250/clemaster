import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactButtons } from '@/components/layout/ContactButtons'
import Analytics from '@/components/ui/Analytics'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Clemaster Industries | Professional Cleaning Solutions',
  description:
    'Clemaster Industries, operated by Value Platform Industrial Rwanda Ltd, manufactures professional-grade cleaning and hygienic products for businesses worldwide. Quality, innovation, and sustainability.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Clemaster Industries | Professional Cleaning Solutions',
    description:
      'Clemaster Industries provides professional-grade cleaning and hygienic products for businesses worldwide. Operated by Value Platform Industrial Rwanda Ltd.',
    url: 'https://clemasterindustries.com',
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
    description:
      'Professional cleaning solutions for businesses worldwide by Clemaster Industries.',
    images: ['/images/hero-cleaning.jpg'],
  },
  metadataBase: new URL('https://clemasterindustries.com'),
};

export const structuredData = {
  __html: `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Value Platform Industrial Rwanda Ltd",
    "alternateName": "Clemaster Industries",
    "url": "https://clemasterindustries.com",
    "logo": "https://clemasterindustries.com/images/logo.PNG",
    "sameAs": [
      "https://www.facebook.com/ClemasterIndustries",
      "https://www.linkedin.com/company/clemaster-industries"
    ]
  }
  </script>
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Analytics />
          {children}</main>
        <Footer />
        <ContactButtons />
      </body>
    </html>
  )
}
