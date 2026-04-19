'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/SectionHeading'
import { 
  Factory, 
  Truck, 
  Package, 
  Users, 
  Award, 
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ArrowRight
} from 'lucide-react'

// Gallery data structure
const galleryData = {
  hero: {
    image: '/images/n/companay.jpg',
    title: 'Our Gallery',
    description: 'Explore our world-class facilities, products, and team in action'
  },
  categories: [
    {
      id: 'factory',
      title: 'Inside Factory',
      icon: Factory,
      description: 'State-of-the-art manufacturing facility and production lines',
      images: [
        {
          id: 'f1',
          src: '/images/n/in-factory-1.jpg',
          alt: 'Production line overview',
          caption: 'Warehouse for finished products'
        },
        {
          id: 'f2',
          src: '/images/n/in-factory-2.jpg',
          alt: 'Quality control lab',
          caption: 'Warehouse for raw materials'
        },
        {
          id: 'f3',
          src: '/images/n/in-factory-3.jpg',
          alt: 'Mixing and blending',
          caption: 'Warehouse for raw materials'
        },
        {
          id: 'f4',
          src: '/images/n/in-factory-4.jpg',
          alt: 'Packaging line',
          caption: 'Control room.'
        },
        
        {
          id: 'f6',
          src: '/images/n/in-factory-6.jpg',
          alt: 'Research and development',
          caption: 'Inside Warehouse for raw materials'
        },
        {
          id: 'f7',
          src: '/images/hero-cleaning.jpg',
          alt: 'Cleaning and disinfection',
          caption: 'Factory interior'
        },
        {
          id: 'f8',
          src: '/images/image_750x_67dacc4f4c879.jpg',
          alt: 'Quality control lab',
          caption: 'Finished products'
        },
        {
          id: 'f9',
          src: '/images/image_750x_67dacc6f3da9f.jpg',
          alt: 'Mixing and blending',
          caption: 'Factory interior'
        }
      ]
    },
    // {
    //   id: 'field',
    //   title: 'Field Operations',
    //   icon: Truck,
    //   description: 'Our products and services in action at client locations',
    //   images: [
    //     {
    //       id: 'o1',
    //       src: '/images/field/field-1.jpg',
    //       alt: 'Delivery fleet',
    //       caption: 'Modern delivery fleet ready for distribution'
    //     },
    //     {
    //       id: 'o2',
    //       src: '/images/field/field-2.jpg',
    //       alt: 'Client site installation',
    //       caption: 'Professional installation at client facility'
    //     },
    //     {
    //       id: 'o3',
    //       src: '/images/field/field-3.jpg',
    //       alt: 'On-site training',
    //       caption: 'Comprehensive on-site staff training'
    //     },
    //     {
    //       id: 'o4',
    //       src: '/images/field/field-4.jpg',
    //       alt: 'Industrial cleaning',
    //       caption: 'Heavy-duty industrial cleaning in progress'
    //     },
    //     {
    //       id: 'o5',
    //       src: '/images/field/field-5.jpg',
    //       alt: 'Hospital sanitization',
    //       caption: 'Hospital-grade sanitization services'
    //     },
    //     {
    //       id: 'o6',
    //       src: '/images/field/field-6.jpg',
    //       alt: 'Warehouse distribution',
    //       caption: 'Efficient warehouse and distribution center'
    //     }
    //   ]
    // },
    {
      id: 'products',
      title: 'Products',
      icon: Package,
      description: 'Our comprehensive range of cleaning and hygiene products',
      images: [
        {
          id: 'p1',
          src: '/images/washing powder 500g.jpeg',
          alt: 'clemaster Product',
          caption: 'Clemaster Washing Powder delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p2',
          src: '/images/value_platform_industrial_rwanda_Floor_Cleaner.jpeg',
          alt: 'Clemaster product',
          caption: 'Clemaster Washing Powder delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p3',
          src: '/images/value platform industrial rwanda Ltd 2026-02-18 at 08.48.31.jpeg',
          alt: 'Floor care products',
          caption: 'Clemaster Powder Cleaner 3.5 kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p4',
          src: '/images/value platform industrial rwanda Ltd -02-18 at 19.27.05.jpeg',
          alt: 'Disinfectants',
          caption: 'Clemaster Powder Cleaner 40g delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p5',
          src: '/images/clemaster hand washing Powder 5kg.jpeg',
          alt: 'Cleaning equipment',
          caption: 'Clemaster Powder Cleaner 5kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p6',
          src: '/images/washing powder 10kg.jpeg',
          alt: 'Eco-friendly range',
          caption: 'Clemaster Powder Cleaner 10kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },{
          id: 'p7',
          src: '/images/clemaster washing powder 2026-02-18 at 19.27.02.jpeg',
          alt: 'Floor care products',
          caption: 'Clemaster Powder Cleaner 1kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p8',
          src: '/images/washing powder 15 kg.jpeg',
          alt: 'Floor care products',
          caption: 'Clemaster Powder Cleaner 15kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p9',
          src: '/images/clemaster washing powder 500kg.jpeg',
          alt: 'Floor care products',
          caption: 'Clemaster Powder Cleaner 500g delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.'
        },
        {
          id: 'p10',
          src: '/images/n/in-factory-5.jpg',
          alt: 'Floor care products',
          caption: 'Stock of clemaster washing powder'
        }
      ]
    },
    {
      id: 'team',
      title: 'Our Team',
      icon: Users,
      description: 'The dedicated professionals behind our success',
      images: [
        {
          id: 't1',
          src: '/images/n/team-culture.jpg',
          alt: 'Management team',
          caption: 'Management team'
        }
      ]
    },
    // {
    //   id: 'certifications',
    //   title: 'Certifications & Awards',
    //   icon: Award,
    //   description: 'Industry recognition and quality certifications',
    //   images: [
    //     {
    //       id: 'c1',
    //       src: '/images/certifications/cert-1.jpg',
    //       alt: 'ISO Certification',
    //       caption: 'ISO 9001:2015 Quality Management Certification'
    //     },
    //     {
    //       id: 'c2',
    //       src: '/images/certifications/cert-2.jpg',
    //       alt: 'Industry Award',
    //       caption: 'Best Manufacturing Excellence Award 2024'
    //     },
    //     {
    //       id: 'c3',
    //       src: '/images/certifications/cert-3.jpg',
    //       alt: 'Safety Certification',
    //       caption: 'Occupational Health and Safety Certification'
    //     },
    //     {
    //       id: 'c4',
    //       src: '/images/certifications/cert-4.jpg',
    //       alt: 'Environmental Award',
    //       caption: 'Green Manufacturing Award for Sustainability'
    //     }
    //   ]
    // }
  ]
}

// Lightbox Component
interface LightboxProps {
  images: Array<{ src: string; alt: string; caption: string }>
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-primary transition-colors"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Main image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          sizes="100vw"
        />

        {/* Navigation buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 p-2 text-white hover:text-primary transition-colors bg-black/50 rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 p-2 text-white hover:text-primary transition-colors bg-black/50 rounded-full"
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>

        {/* Caption */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white text-lg bg-black/50 inline-block px-6 py-3 rounded-full backdrop-blur-sm">
            {images[currentIndex].caption}
          </p>
        </div>

        {/* Counter */}
        <div className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<string>('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const openLightbox = (categoryId: string, imageIndex: number) => {
    setCurrentCategory(categoryId)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentCategory('')
    setCurrentImageIndex(0)
  }

  const handleNext = () => {
    const category = galleryData.categories.find(c => c.id === currentCategory)
    if (category) {
      setCurrentImageIndex((prev) => (prev + 1) % category.images.length)
    }
  }

  const handlePrev = () => {
    const category = galleryData.categories.find(c => c.id === currentCategory)
    if (category) {
      setCurrentImageIndex((prev) => (prev - 1 + category.images.length) % category.images.length)
    }
  }

  const scrollToCategory = (categoryId: string) => {
    const element = categoryRefs.current[categoryId]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const currentImages = currentCategory 
    ? galleryData.categories.find(c => c.id === currentCategory)?.images || []
    : []

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={galleryData.hero.image}
            alt={galleryData.hero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Camera className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">Visual Journey</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {galleryData.hero.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              {galleryData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-b border-border sticky top-0 z-30 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {galleryData.categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      {galleryData.categories.map((category) => {
        const Icon = category.icon
        return (
          <section
            key={category.id}
            ref={(el) => { categoryRefs.current[category.id] = el }}
            className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 even:bg-muted/30"
          >
            <div className="container mx-auto max-w-7xl">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{category.title}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{category.title}</h2>
                  <p className="text-base text-muted-foreground max-w-2xl">
                    {category.description}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground mt-4 sm:mt-0">
                  {category.images.length} photos
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer hover:shadow-xl transition-all duration-500"
                    onClick={() => openLightbox(category.id, index)}
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-foreground">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Link (if more than 6 images) */}
              {category.images.length > 6 && (
                <div className="text-center mt-8">
                  <Button variant="outline" className="group">
                    View All {category.title} Images
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to schedule a visit to our facility or request more information about our products and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 h-11 px-8 shadow-lg group">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 h-11 px-8">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImages.length > 0 && (
        <Lightbox
          images={currentImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  )
}