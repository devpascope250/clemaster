'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/SectionHeading'
import { StatCard } from '@/components/StatCard'
import { companyInfo } from '@/lib/data/services'
import { ArrowRight, Award, Leaf, Zap, Users } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Quality Excellence - Rigorous adherence to international standards in every product.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Innovation',
    description: 'Minimizing environmental footprint through eco-friendly production technologies.',
  },
  {
    icon: Users,
    title: 'Customer Centricity',
    description: 'Delivering solutions tailored to African \n lifestyles and needs.',
  },
  {
    icon: Zap,
    title: 'Integrity in Action',
    description: 'Upholding transparency and ethical practices across all operations.',
  },
]

export default function AboutPage() {
  return (
   <>
  {/* Page Header */}
  <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading title="About Value Platform Industrial Rwanda Ltd" description="Building trust through quality, innovation, and excellence." />
    </div>
  </section>

  {/* Company Story */}
  <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">Our Story</h2>
          <p className="text-base text-muted-foreground mb-3">
             Value Platform industrial Rwanda Ltd is Rwanda's pioneering household chemical manufacturer with full-cycle capabilities to produce laundry detergent from raw materials.
          </p>
          <p className="text-base text-muted-foreground mb-3">
            Strategically located in the Rwamagana industrial Zone of Eastern Province, our state-of-the-art facility represents a $12 million USD investment and delivers an annual production capacity of 24,000 tons of premium laundry powder.
          </p>
          <p className="text-base text-muted-foreground">
            As the nation's first vertically integrated detergent producer, we own and operate renowned brands including Clemaster and AHA, setting benchmarks for quality and innovation in Africa's fast-growing cleaning products sector.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/image_750x_67daccb65a67d.jpg"
            alt="Manufacturing Facility"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-card">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="rounded-lg border border-border bg-background p-6">
          <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
          <p className="text-base text-muted-foreground">
            To empower households and businesses across Africa with afford-able, high-performance cleaning solutions while driving sustainable industrialization and local value creation in Rwanda.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-background p-6">
          <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-base text-muted-foreground">
            To become East Africa's most trusted leader in household chemical manu-facturing, recognized for innovation, environmental stewardship, and trans-formative community impact.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Core Values */}
  <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading title="Our Core Values" description="Principles that guide everything we do." />
      <div className="grid md:grid-cols-2 gap-4">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <div key={index} className="rounded-lg border border-border bg-card p-5 hover:shadow-lg transition-shadow">
              <div className="flex gap-3">
                <div className="text-primary flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>


      {/* Manufacturing Standards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">International Certifications & Standards</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our commitment to excellence is validated by leading international quality and safety certifications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {companyInfo.capacities.certifications.map((cert, index) => (
              <div key={index} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6">
                <p className="text-xl font-bold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Ready to Work With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover how Clemaster can support your business with innovative cleaning solutions.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 text-base px-8">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
