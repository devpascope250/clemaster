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
    description: 'Unwavering commitment to producing the highest quality cleaning and hygiene products.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Eco-friendly manufacturing practices and biodegradable product formulations.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Dedicated to understanding and exceeding our customers\' unique needs.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuous research and development of advanced cleaning solutions.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="About Clemaster Industries" description="Building trust through quality, innovation, and excellence." />
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in {companyInfo.foundedYear}, Clemaster Industries emerged from a vision to revolutionize the cleaning and hygiene industry
                across Africa and beyond.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started as a small manufacturing operation has grown into a leading producer of professional-grade cleaning solutions trusted
                by hundreds of businesses across multiple continents.
              </p>
              <p className="text-lg text-muted-foreground">
                Our journey is built on three pillars: unwavering commitment to quality, continuous innovation, and genuine partnerships with our
                customers.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To deliver innovative, high-quality cleaning and hygiene products that empower businesses to maintain exceptional standards while
                contributing to a healthier, more sustainable world.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To become the most trusted brand in professional cleaning solutions across Africa, recognized for our unwavering commitment to
                excellence, innovation, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Our Core Values" description="Principles that guide everything we do." />
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="text-primary flex-shrink-0">
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
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

      {/* Key Stats */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="By The Numbers" description="Our growth and reach." />
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard icon={<Users size={32} />} label="Employees" value="150+" />
            <StatCard icon={<Zap size={32} />} label="Daily Production" value="50K+" description="Liters per day" />
            <StatCard icon={<Award size={32} />} label="Countries Served" value="15+" description="Across Africa & Beyond" />
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
