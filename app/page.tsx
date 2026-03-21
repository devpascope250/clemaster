// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { ProductCard } from '@/components/ProductCard'
// import { StatCard } from '@/components/StatCard'
// import { SectionHeading } from '@/components/SectionHeading'
// import { products } from '@/lib/data/products'
// import { companyInfo, workingAreas, services } from '@/lib/data/services'
// import { ArrowRight, Globe, TrendingUp, Users, Award } from 'lucide-react'

// const featuredProducts = products.filter((p) => p.featured)

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
//                 Professional Cleaning Solutions for <span className="text-primary">Modern Businesses</span>
//               </h1>
//               <p className="text-lg text-muted-foreground max-w-xl">
//                 Clemaster Industries delivers premium cleaning and hygienic products engineered for excellence, trusted by businesses across Africa and beyond.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Link href="/products">
//                   <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto h-12 text-base">
//                     Browse Products
//                     <ArrowRight className="ml-2" size={20} />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto h-12 text-base">
//                     Get in Touch
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
//               <Image
//                 src="/images/hero-cleaning.jpg"
//                 alt="Cleaning Products"
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeading
//             title="Why Choose Clemaster?"
//             description="Industry-leading expertise, quality assurance, and commitment to excellence."
//           />
//           <div className="grid md:grid-cols-3 gap-8">
//             <StatCard icon={<TrendingUp size={32} />} label="Daily Production" value={companyInfo.capacities.dailyProduction} />
//             <StatCard icon={<Users size={32} />} label="Professional Team" value={companyInfo.capacities.employeeCount} />
//             <StatCard icon={<Award size={32} />} label="Certifications" value={companyInfo.capacities.certifications.length} description="International Standards" />
//           </div>
//         </div>
//       </section>

//       {/* Working Hours */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeading title="Business Hours" description="Get in touch with our team during these hours." />
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="rounded-lg border border-border bg-card p-8">
//               <h3 className="text-xl font-bold text-foreground mb-3">Weekdays</h3>
//               <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekdays}</p>
//             </div>
//             <div className="rounded-lg border border-border bg-card p-8">
//               <h3 className="text-xl font-bold text-foreground mb-3">Weekends</h3>
//               <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekends}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex items-center justify-between mb-12">
//             <SectionHeading title="Popular Products" description="Our bestselling cleaning solutions." centered={false} />
//             <Link href="/products">
//               <Button variant="outline" className="hidden sm:flex">
//                 View All <ArrowRight className="ml-2" size={18} />
//               </Button>
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {featuredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//           <Link href="/products" className="block sm:hidden mt-6">
//             <Button className="w-full bg-primary hover:bg-primary/90 text-white">
//               View All Products
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Working Areas */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeading
//             title="Where We Operate"
//             description="Serving businesses across multiple regions with reliable distribution networks."
//           />
//           <div className="grid md:grid-cols-2 gap-8">
//             {workingAreas.map((area) => (
//               <div key={area.id} className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
//                 <div className="flex items-start gap-4">
//                   <div className="text-3xl text-primary">
//                     <Globe size={32} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-foreground mb-2">{area.region}</h3>
//                     <p className="text-muted-foreground">{area.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services/Capabilities */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Core Capabilities</h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               Complete solutions designed to meet the highest standards in the cleaning and hygiene industry.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors"
//               >
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-white/80">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Ready to Partner With Clemaster?</h2>
//           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Join hundreds of businesses that trust Clemaster for their professional cleaning and hygiene needs.
//           </p>
//           <Link href="/contact">
//             <Button className="bg-primary hover:bg-primary/90 text-white h-12 text-base px-8">
//               Get Started Today
//               <ArrowRight className="ml-2" size={20} />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }



// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { ProductCard } from '@/components/ProductCard'
// import { StatCard } from '@/components/StatCard'
// import { SectionHeading } from '@/components/SectionHeading'
// import { products } from '@/lib/data/products'
// import { companyInfo, workingAreas, services } from '@/lib/data/services'
// import { ArrowRight, Globe, TrendingUp, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'

// const featuredProducts = products.filter((p) => p.featured)

// // Hero slides data - replace with your actual images
// const heroSlides = [
//   {
//     id: 1,
//     image: '/images/hero-cleaning.jpg',
//     alt: 'Professional cleaning products display',
//   },
//   {
//     id: 2,
//     image: '/images/image_750x_67dacc6f3da9f.jpg',
//     alt: 'Clemaster manufacturing facility',
//   },
//   {
//     id: 3,
//     image: '/images/image_750x_67dacc4f4c879.jpg',
//     alt: 'Professional cleaning team',
//   }
// ]

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//     setIsAutoPlaying(false)
//     // Resume auto-play after 10 seconds of inactivity
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   return (
//     <>
//       {/* Hero Section with Sliding Background */}
//       <section className="relative min-h-[90vh] flex items-center overflow-hidden">
//         {/* Sliding Images Container */}
//         <div className="absolute inset-0 w-full h-full">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                 index === currentSlide ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <Image
//                 src={slide.image}
//                 alt={slide.alt}
//                 fill
//                 priority={index === 0}
//                 sizes="100vw"
//                 className="object-cover"
//               />
//               {/* Dark overlay for better text contrast */}
//               <div className="absolute inset-0 bg-black/50" />
//             </div>
//           ))}
//         </div>

//         {/* Slide Navigation Dots */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? 'bg-white w-8'
//                   : 'bg-white/50 hover:bg-white/80'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}

//         {/* Hero Content */}
//         <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
//           <div className="max-w-3xl">
//             <div className="space-y-6">
//               <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-balance leading-tight">
//                 Professional Cleaning Solutions for{' '}
//                 <span className="text-primary-foreground drop-shadow-lg">Modern Businesses</span>
//               </h1>
//               <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
//                 Clemaster Industries delivers premium cleaning and hygienic products engineered for excellence, 
//                 trusted by businesses across Africa and beyond.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Link href="/products">
//                   <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto h-12 text-base shadow-lg">
//                     Browse Products
//                     <ArrowRight className="ml-2" size={20} />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button 
//                     variant="outline" 
//                     className="border-white text-white bg-white/20 w-full sm:w-auto h-12 text-base"
//                   >
//                     Get in Touch
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeading
//             title="Why Choose Clemaster?"
//             description="Industry-leading expertise, quality assurance, and commitment to excellence."
//           />
//           <div className="grid md:grid-cols-3 gap-8">
//             <StatCard icon={<TrendingUp size={32} />} label="Daily Production" value={companyInfo.capacities.dailyProduction} />
//             <StatCard icon={<Users size={32} />} label="Professional Team" value={companyInfo.capacities.employeeCount} />
//             <StatCard icon={<Award size={32} />} label="Certifications" value={companyInfo.capacities.certifications.length} description="International Standards" />
//           </div>
//         </div>
//       </section>

//       {/* Working Hours */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeading title="Business Hours" description="Get in touch with our team during these hours." />
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="rounded-lg border border-border bg-card p-8">
//               <h3 className="text-xl font-bold text-foreground mb-3">Weekdays</h3>
//               <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekdays}</p>
//             </div>
//             <div className="rounded-lg border border-border bg-card p-8">
//               <h3 className="text-xl font-bold text-foreground mb-3">Weekends</h3>
//               <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekends}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex items-center justify-between mb-12">
//             <SectionHeading title="Popular Products" description="Our bestselling cleaning solutions." centered={false} />
//             <Link href="/products">
//               <Button variant="outline" className="hidden sm:flex">
//                 View All <ArrowRight className="ml-2" size={18} />
//               </Button>
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {featuredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//           <Link href="/products" className="block sm:hidden mt-6">
//             <Button className="w-full bg-primary hover:bg-primary/90 text-white">
//               View All Products
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Working Areas */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeading
//             title="Where We Operate"
//             description="Serving businesses across multiple regions with reliable distribution networks."
//           />
//           <div className="grid md:grid-cols-2 gap-8">
//             {workingAreas.map((area) => (
//               <div key={area.id} className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
//                 <div className="flex items-start gap-4">
//                   <div className="text-3xl text-primary">
//                     <Globe size={32} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-foreground mb-2">{area.region}</h3>
//                     <p className="text-muted-foreground">{area.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services/Capabilities */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Core Capabilities</h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               Complete solutions designed to meet the highest standards in the cleaning and hygiene industry.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors"
//               >
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-white/80">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Ready to Partner With Clemaster?</h2>
//           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Join hundreds of businesses that trust Clemaster for their professional cleaning and hygiene needs.
//           </p>
//           <Link href="/contact">
//             <Button className="bg-primary hover:bg-primary/90 text-white h-12 text-base px-8">
//               Get Started Today
//               <ArrowRight className="ml-2" size={20} />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }
















// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { ProductCard } from '@/components/ProductCard'
// import { StatCard } from '@/components/StatCard'
// import { SectionHeading } from '@/components/SectionHeading'
// import { products } from '@/lib/data/products'
// import { companyInfo, workingAreas, services } from '@/lib/data/services'
// import { ArrowRight, Globe, TrendingUp, Users, Award, ChevronLeft, ChevronRight, Sparkles, Clock, MapPin, CheckCircle2 } from 'lucide-react'

// const featuredProducts = products.filter((p) => p.featured)

// // Hero slides data - replace with your actual images
// const heroSlides = [
//   {
//     id: 1,
//     image: '/images/hero-cleaning.jpg',
//     alt: 'Professional cleaning products display',
//   },
//   {
//     id: 2,
//     image: '/images/image_750x_67dacc6f3da9f.jpg',
//     alt: 'Clemaster manufacturing facility',
//   },
//   {
//     id: 3,
//     image: '/images/image_750x_67dacc4f4c879.jpg',
//     alt: 'Professional cleaning team',
//   }
// ]

// // Animation on scroll hook
// const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options = { threshold: 0.1 }) => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true)
//         observer.unobserve(entry.target)
//       }
//     }, options)

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current)
//       }
//     }
//   }, [ref, options])

//   return isVisible
// }

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   // Refs for animations
//   const statsRef = useRef<HTMLElement>(null)
//   const hoursRef = useRef<HTMLElement>(null)
//   const productsRef = useRef<HTMLElement>(null)
//   const areasRef = useRef<HTMLElement>(null)
//   const servicesRef = useRef<HTMLElement>(null)

//   const statsVisible = useIntersectionObserver(statsRef)
//   const hoursVisible = useIntersectionObserver(hoursRef)
//   const productsVisible = useIntersectionObserver(productsRef)
//   const areasVisible = useIntersectionObserver(areasRef)
//   const servicesVisible = useIntersectionObserver(servicesRef)

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   return (
//     <>
//       {/* Hero Section with Modern Sliding Background */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">
//         {/* Animated Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

//         {/* Sliding Images Container with Ken Burns Effect */}
//         <div className="absolute inset-0 w-full h-full">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                 index === currentSlide ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src={slide.image}
//                   alt={slide.alt}
//                   fill
//                   priority={index === 0}
//                   sizes="100vw"
//                   className="object-cover scale-105 animate-ken-burns"
//                   style={{ animationPlayState: index === currentSlide ? 'running' : 'paused' }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modern Glassmorphism Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentSlide
//                   ? 'w-8 h-2 bg-white'
//                   : 'w-2 h-2 bg-white/40 hover:bg-white/60'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
//           <div className="max-w-3xl">
//             {/* Animated Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
//               <Sparkles className="w-4 h-4 text-yellow-400" />
//               <span className="text-sm text-white/90 tracking-wide">Industry Leader Since 2010</span>
//             </div>

//             <div className="space-y-6 animate-fade-in-up animation-delay-200">
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-balance leading-[1.1] tracking-tight">
//                 Professional Cleaning
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-white/80">
//                   Solutions
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
//                 Clemaster Industries delivers premium cleaning and hygienic products engineered for excellence, 
//                 trusted by businesses across Africa and beyond.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Link href="/products">
//                   <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white w-full sm:w-auto h-12 text-base shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 group">
//                     Browse Products
//                     <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button 
//                     variant="outline" 
//                     className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 w-full sm:w-auto h-12 text-base transition-all duration-300"
//                   >
//                     Get in Touch
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
//             <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-scroll-down" />
//           </div>
//         </div>
//       </section>

//       {/* Company Overview - Modern Stats Section */}
//       <section ref={statsRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
//         <div className="container mx-auto max-w-7xl">
//           <div className={`text-center mb-16 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
//               <TrendingUp className="w-4 h-4 text-primary" />
//               <span className="text-sm text-primary font-medium">Why Choose Us</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Industry-Leading Excellence</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Backed by years of expertise and a commitment to quality that sets us apart.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className={`transition-all duration-700 delay-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <StatCard icon={<TrendingUp size={32} />} label="Daily Production" value={companyInfo.capacities.dailyProduction} />
//             </div>
//             <div className={`transition-all duration-700 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <StatCard icon={<Users size={32} />} label="Professional Team" value={companyInfo.capacities.employeeCount} />
//             </div>
//             <div className={`transition-all duration-700 delay-300 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <StatCard icon={<Award size={32} />} label="Certifications" value={companyInfo.capacities.certifications.length} description="International Standards" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Working Hours - Modern Cards */}
//       <section ref={hoursRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-7xl">
//           <div className={`text-center mb-16 transition-all duration-700 ${hoursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
//               <Clock className="w-4 h-4 text-primary" />
//               <span className="text-sm text-primary font-medium">Business Hours</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">We're Here When You Need Us</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Get in touch with our team during these hours for prompt assistance.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${hoursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
//                   <Clock className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-foreground mb-2">Weekdays</h3>
//                 <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekdays}</p>
//               </div>
//             </div>
//             <div className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${hoursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
//                   <Clock className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-foreground mb-2">Weekends</h3>
//                 <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekends}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products - Modern Layout */}
//       <section ref={productsRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="container mx-auto max-w-7xl">
//           <div className={`flex flex-col sm:flex-row items-center justify-between mb-12 transition-all duration-700 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div>
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
//                 <Sparkles className="w-4 h-4 text-primary" />
//                 <span className="text-sm text-primary font-medium">Best Sellers</span>
//               </div>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Popular Products</h2>
//               <p className="text-muted-foreground mt-2">Our most trusted cleaning solutions</p>
//             </div>
//             <Link href="/products">
//               <Button variant="outline" className="group mt-4 sm:mt-0">
//                 View All Products
//                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
//               </Button>
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {featuredProducts.map((product, index) => (
//               <div key={product.id} className={`transition-all duration-700 delay-${index * 100} ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Working Areas - Modern Grid */}
//       <section ref={areasRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background">
//         <div className="container mx-auto max-w-7xl">
//           <div className={`text-center mb-16 transition-all duration-700 ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
//               <Globe className="w-4 h-4 text-primary" />
//               <span className="text-sm text-primary font-medium">Global Reach</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Where We Operate</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Serving businesses across multiple regions with reliable distribution networks.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {workingAreas.map((area, index) => (
//               <div 
//                 key={area.id} 
//                 className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="relative flex items-start gap-4">
//                   <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
//                     <Globe size={28} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{area.region}</h3>
//                     <p className="text-muted-foreground leading-relaxed">{area.description}</p>
//                     <div className="mt-4 flex items-center gap-2 text-sm text-primary">
//                       <CheckCircle2 size={14} />
//                       <span>Trusted Partner</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services/Capabilities - Modern Cards */}
//       <section ref={servicesRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-primary">
//         <div className="container mx-auto max-w-7xl">
//           <div className={`text-center mb-16 transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
//               <Sparkles className="w-4 h-4 text-white" />
//               <span className="text-sm text-white font-medium">Core Capabilities</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">What We Do Best</h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               Complete solutions designed to meet the highest standards in the cleaning and hygiene industry.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="relative">
//                   <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
//                   <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
//                   <p className="text-white/70 leading-relaxed">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modern CTA Banner */}
//       <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="container mx-auto max-w-5xl">
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 text-center">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
//             <div className="relative z-10">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
//                 Ready to Partner With Clemaster?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//                 Join hundreds of businesses that trust Clemaster for their professional cleaning and hygiene needs.
//               </p>
//               <Link href="/contact">
//                 <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white h-12 text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 group">
//                   Get Started Today
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes ken-burns {
//           0% { transform: scale(1); }
//           100% { transform: scale(1.05); }
//         }
//         .animate-ken-burns {
//           animation: ken-burns 20s ease-in-out forwards;
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//         .animation-delay-200 {
//           animation-delay: 0.2s;
//           opacity: 0;
//           animation-fill-mode: forwards;
//         }
//         @keyframes scroll-down {
//           0% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(10px); }
//         }
//         .animate-scroll-down {
//           animation: scroll-down 1.5s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   )
// }




















'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import { StatCard } from '@/components/StatCard'
import { SectionHeading } from '@/components/SectionHeading'
import { products } from '@/lib/data/products'
import { companyInfo, workingAreas, services } from '@/lib/data/services'
import { ArrowRight, Globe, TrendingUp, Users, Award, ChevronLeft, ChevronRight, Sparkles, Clock, MapPin, CheckCircle2 } from 'lucide-react'

const featuredProducts = products.filter((p) => p.featured)

// Hero slides data - replace with your actual images
const heroSlides = [
  {
    id: 1,
    image: '/images/hero-cleaning.jpg',
    alt: 'Professional cleaning products display',
  },
  {
    id: 2,
    image: '/images/image_750x_67dacc6f3da9f.jpg',
    alt: 'Clemaster manufacturing facility',
  },
  {
    id: 3,
    image: '/images/image_750x_67dacc4f4c879.jpg',
    alt: 'Professional cleaning team',
  }
]

// Animation on scroll hook with proper typing
const useIntersectionObserver = (ref: React.RefObject<HTMLElement | null>, options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, options])

  return isVisible
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Refs for animations - properly typed
  const statsRef = useRef<HTMLElement | null>(null)
  const hoursRef = useRef<HTMLElement | null>(null)
  const productsRef = useRef<HTMLElement | null>(null)
  const areasRef = useRef<HTMLElement | null>(null)
  const servicesRef = useRef<HTMLElement | null>(null)

  const statsVisible = useIntersectionObserver(statsRef)
  const hoursVisible = useIntersectionObserver(hoursRef)
  const productsVisible = useIntersectionObserver(productsRef)
  const areasVisible = useIntersectionObserver(areasRef)
  const servicesVisible = useIntersectionObserver(servicesRef)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <>
      {/* Hero Section with Modern Sliding Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

        {/* Sliding Images Container with Ken Burns Effect */}
        <div className="absolute inset-0 w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover scale-105 animate-ken-burns"
                  style={{ animationPlayState: index === currentSlide ? 'running' : 'paused' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modern Glassmorphism Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button> */}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/90 tracking-wide">Industry Leader Since 2021</span>
            </div>

            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-balance leading-[1.1] tracking-tight">
                Professional Cleaning
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-white/80">
                  Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                Clemaster Industries delivers premium cleaning and hygienic products engineered for excellence,
                trusted by businesses across Africa and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/products">
                  <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white w-full sm:w-auto h-12 text-base shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 group">
                    Browse Products
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 w-full sm:w-auto h-12 text-base transition-all duration-300"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Company Overview - Modern Stats Section */}
      <section ref={statsRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Industry-Leading Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Backed by years of expertise and a commitment to quality that sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`transition-all duration-700 delay-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <StatCard icon={<TrendingUp size={32} />} label="Daily Production" value={companyInfo.capacities.dailyProduction} />
            </div>
            <div className={`transition-all duration-700 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <StatCard icon={<Users size={32} />} label="Professional Team" value={companyInfo.capacities.employeeCount} />
            </div>
            <div className={`transition-all duration-700 delay-300 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <StatCard icon={<Award size={32} />} label="Certifications" value={companyInfo.capacities.certifications.length} description="International Standards" />
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours - Modern Cards */}
      <section ref={hoursRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-700 ${hoursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Business Hours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">We're Here When You Need Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team during these hours for prompt assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${hoursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Weekdays</h3>
                <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekdays}</p>
              </div>
            </div>
            <div className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${hoursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Weekends</h3>
                <p className="text-lg text-muted-foreground">{companyInfo.workingHours.weekends}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Modern Layout */}
      <section ref={productsRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className={`flex flex-col sm:flex-row items-center justify-between mb-12 transition-all duration-700 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Best Sellers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Popular Products</h2>
              <p className="text-muted-foreground mt-2">Our most trusted cleaning solutions</p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="group mt-4 sm:mt-0">
                View All Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`transition-all duration-700 delay-${Math.min(index * 100, 500)} ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Areas - Modern Grid */}
      <section ref={areasRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-700 ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Global Reach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Where We Operate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving businesses across multiple regions with reliable distribution networks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {workingAreas.map((area, index) => (
              <div
                key={area.id}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Globe size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{area.region}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <CheckCircle2 size={14} />
                      <span>Trusted Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Capabilities - Modern Cards */}
      <section ref={servicesRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-primary">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">What We Do Best</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Complete solutions designed to meet the highest standards in the cleaning and hygiene industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Banner */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to Partner With Clemaster?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that trust Clemaster for their professional cleaning and hygiene needs.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white h-12 text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 group">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out forwards;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        @keyframes scroll-down {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}