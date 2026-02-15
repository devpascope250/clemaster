export interface Product {
  id: string
  name: string
  description: string
  category: string
  sizes: string[]
  image: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Floor Cleaner',
    description: 'Professional-grade floor cleaning solution with streak-free formula. Perfect for all floor types.',
    category: 'Floor Care',
    sizes: ['500ml', '1L', '5L', '25L'],
    image: '/images/hero-cleaning.jpg',
    featured: true,
  },
  {
    id: '2',
    name: 'Disinfectant Surface Spray',
    description: 'Hospital-grade disinfectant effective against 99.9% of bacteria and viruses. Safe for all surfaces.',
    category: 'Disinfectants',
    sizes: ['250ml', '750ml', '2L', '10L'],
    image: '/images/hero-cleaning.jpg',
    featured: true,
  },
  {
    id: '3',
    name: 'Eco-Friendly Kitchen Degreaser',
    description: 'Biodegradable degreaser made from natural ingredients. Powerful against grease buildup.',
    category: 'Kitchen Care',
    sizes: ['500ml', '1L', '2L'],
    image: '/images/hero-cleaning.jpg',
    featured: true,
  },
  {
    id: '4',
    name: 'Professional Window Cleaner',
    description: 'Crystal-clear results without streaks. Leaves a protective coating on glass surfaces.',
    category: 'Glass Care',
    sizes: ['500ml', '1L', '5L'],
    image: '/images/hero-cleaning.jpg',
    featured: false,
  },
  {
    id: '5',
    name: 'Industrial Hand Sanitizer',
    description: 'Fast-drying sanitizer with moisturizing agents. USDA and FDA approved.',
    category: 'Hand Care',
    sizes: ['100ml', '500ml', '1L', '5L'],
    image: '/images/hero-cleaning.jpg',
    featured: false,
  },
  {
    id: '6',
    name: 'Bathroom Tile Cleaner',
    description: 'Removes soap scum and hard water stains instantly. Pleasant citrus scent.',
    category: 'Bathroom Care',
    sizes: ['500ml', '1L', '2L'],
    image: '/images/hero-cleaning.jpg',
    featured: false,
  },
]
