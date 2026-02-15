import { Metadata } from 'next'
import { ProductCard } from '@/components/ProductCard'
import { SectionHeading } from '@/components/SectionHeading'
import { products } from '@/lib/data/products'
import { ProductsClient } from '@/components/ProductsClient'

export const metadata: Metadata = {
  title: 'Professional Cleaning Products | Clemaster Industries',
  description: 'Browse our complete catalog of professional-grade cleaning and hygiene products. Premium solutions for businesses worldwide.',
  openGraph: {
    title: 'Professional Cleaning Products | Clemaster',
    description: 'Browse professional-grade cleaning and hygiene products.',
    url: 'https://clemaster.com/products',
    images: [
      {
        url: '/images/hero-cleaning.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function ProductsPage() {

  return (
    <>
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Our Product Catalog" description="Browse our complete range of professional cleaning and hygiene solutions." />
        </div>
      </section>

      {/* Client-side filtering component */}
      <ProductsClient products={products} />
    </>
  )
}
