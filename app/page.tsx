'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import { StatCard } from '@/components/StatCard'
import { SectionHeading } from '@/components/SectionHeading'
import { products } from '@/lib/data/products'
import { companyInfo, workingAreas, services } from '@/lib/data/services'
import { ArrowRight, Globe, TrendingUp, Users, Award } from 'lucide-react'

const featuredProducts = products.filter((p) => p.featured)

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Professional Cleaning Solutions for <span className="text-primary">Modern Businesses</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Clemaster Industries delivers premium cleaning and hygienic products engineered for excellence, trusted by businesses across Africa and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto h-12 text-base">
                    Browse Products
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto h-12 text-base">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop"
                alt="Cleaning Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Why Choose Clemaster?"
            description="Industry-leading expertise, quality assurance, and commitment to excellence."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard icon={<TrendingUp size={32} />} label="Daily Production" value={companyInfo.capacities.dailyProduction} />
            <StatCard icon={<Users size={32} />} label="Professional Team" value={companyInfo.capacities.employeeCount} />
            <StatCard icon={<Award size={32} />} label="Certifications" value={companyInfo.capacities.certifications.length} description="International Standards" />
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Business Hours" description="Get in touch with our team during these hours." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Weekdays</h3>
              <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekdays}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Weekends</h3>
              <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekends}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <SectionHeading title="Popular Products" description="Our bestselling cleaning solutions." centered={false} />
            <Link href="/products">
              <Button variant="outline" className="hidden sm:flex">
                View All <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link href="/products" className="block sm:hidden mt-6">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Working Areas */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Where We Operate"
            description="Serving businesses across multiple regions with reliable distribution networks."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {workingAreas.map((area) => (
              <div key={area.id} className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-primary">
                    <Globe size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{area.region}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Capabilities */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Core Capabilities</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Complete solutions designed to meet the highest standards in the cleaning and hygiene industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Ready to Partner With Clemaster?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Clemaster for their professional cleaning and hygiene needs.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 text-base px-8">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
