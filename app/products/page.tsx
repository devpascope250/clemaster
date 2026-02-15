'use client'

import { Metadata } from 'next'
import { useState, useMemo } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { SectionHeading } from '@/components/SectionHeading'
import { products } from '@/lib/data/products'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Cleaning Products | Clemaster Industries',
  description: 'Browse our complete catalog of professional-grade cleaning and hygiene products. Premium solutions for businesses worldwide.',
  openGraph: {
    title: 'Professional Cleaning Products | Clemaster',
    description: 'Browse professional-grade cleaning and hygiene products.',
    url: 'https://clemaster.com/products',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(products.map((p) => p.category))]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <>
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Our Product Catalog" description="Browse our complete range of professional cleaning and hygiene solutions." />
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
