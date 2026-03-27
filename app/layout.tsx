// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'

// import './globals.css'
// import { Header } from '@/components/layout/Header'
// import { Footer } from '@/components/layout/Footer'
// import { ContactButtons } from '@/components/layout/ContactButtons'
// import Analytics from '@/components/ui/Analytics'
// import { Suspense } from 'react'
// import Script from 'next/script'

// const _geist = Geist({ subsets: ['latin'] })
// const _geistMono = Geist_Mono({ subsets: ['latin'] })
// export const metadata: Metadata = {
//   title: 'Clemaster Industries | Professional Cleaning Solutions',
//   description:
//     'Clemaster Industries, operated by Value Platform Industrial Rwanda Ltd, manufactures professional-grade cleaning and hygienic products for businesses worldwide. Quality, innovation, and sustainability.',
//   icons: {
//     icon: '/favicon.ico',
//     apple: '/apple-touch-icon.png',
//     shortcut: '/apple-touch-icon.png',
//   },
//   openGraph: {
//     title: 'Clemaster Industries | Professional Cleaning Solutions',
//     description:
//       'Clemaster Industries provides professional-grade cleaning and hygienic products for businesses worldwide. Operated by Value Platform Industrial Rwanda Ltd.',
//     url: 'https://clemasterindustries.com',
//     siteName: 'Clemaster Industries',
//     images: [
//       {
//         url: '/images/hero-cleaning.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Clemaster Industries',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Clemaster Industries',
//     description:
//       'Professional cleaning solutions for businesses worldwide by Clemaster Industries.',
//     images: ['/images/hero-cleaning.jpg'],
//   },
//   metadataBase: new URL('https://clemasterindustries.com'),
// };

// export const structuredData = {
//   __html: `
//   <script type="application/ld+json">
//   {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": "Value Platform Industrial Rwanda Ltd",
//     "alternateName": "Clemaster Industries",
//     "url": "https://clemasterindustries.com",
//     "logo": "https://clemasterindustries.com/images/logo.PNG",
//     "sameAs": [
//       "https://www.facebook.com/ClemasterIndustries",
//       "https://www.linkedin.com/company/clemaster-industries"
//     ]
//   }
//   </script>
//   `,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className="font-sans antialiased flex flex-col min-h-screen">
//         <Script
//           id="ga4-script"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'G-T9TP3FX9XB', {
//         page_path: window.location.pathname,
//       });
//     `,
//           }}
//         />
//         <Header />
//         <main className="flex-1">
//           {/* <Suspense fallback={null}> */}
//             <Analytics />
//           {/* </Suspense> */}

//           {children}</main>
//         <Footer />
//         <ContactButtons />
//       </body>
//     </html>
//   )
// }
















// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactButtons } from '@/components/layout/ContactButtons'
import { Suspense } from 'react'
import Script from 'next/script'
import GoogleAnalytics from '@/components/ui/Analytics'

const GA_MEASUREMENT_ID = "G-T9TP3FX9XB";

// Correct way to initialize Next.js fonts
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans', // This creates a CSS variable
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono', // This creates a CSS variable
  display: 'swap',
})

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Load Google Analytics script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        
        {/* Initialize GA4 */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          {children}
        </main>
        <Footer />
        <ContactButtons />
      </body>
    </html>
  )
}