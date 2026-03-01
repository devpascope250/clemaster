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
    name: 'Clemaster Washing Powder 500g',
    description: 'Clemaster Washing Powder delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['500G'],
    image: '/images/washing powder 500g.jpeg',
    featured: true,
  },
  {
    id: '2',
    name: 'Clemaster Washing Powder 5kg',
    description: 'Clemaster Washing Powder delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['5KG'],
    image: '/images/value_platform_industrial_rwanda_Floor_Cleaner.jpeg',
    featured: true,
  },
  {
    id: '3',
    name: 'Clemaster Floor Cleaner 3.5kg',
    description: 'Clemaster Floor Cleaner 3.5 kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['3.5 KG'],
    image: '/images/value platform industrial rwanda Ltd 2026-02-18 at 08.48.31.jpeg',
    featured: true,
  },
  {
    id: '4',
    name: 'Clemaster Floor Cleaner 40g',
    description: 'Clemaster Floor Cleaner 40g delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['40 G'],
    image: '/images/value platform industrial rwanda Ltd -02-18 at 19.27.05.jpeg',
    featured: true,
  },
  {
    id: '5',
    name: 'Clemaster Floor Cleaner 5kg',
    description: 'Clemaster Floor Cleaner 5kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['5KG'],
    image: '/images/clemaster hand washing Powder 5kg.jpeg',
    featured: false,
  },
  {
    id: '6',
    name: 'Clemaster Floor Cleaner 10kg',
    description: 'Clemaster Floor Cleaner 10kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['10KG'],
    image: '/images/washing powder 10kg.jpeg',
    featured: false,
  },
  {
    id: '7',
    name: 'Clemaster Floor Cleaner 1kg',
    description: 'Clemaster Floor Cleaner 1kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['1KG'],
    image: '/images/clemaster washing powder 2026-02-18 at 19.27.02.jpeg',
    featured: false,
  },
  {
    id: '8',
    name: 'Clemaster Floor Cleaner 15kg',
    description: 'Clemaster Floor Cleaner 15kg delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['15KG'],
    image: '/images/washing powder 15 kg.jpeg',
    featured: false,
  },
  {
    id: '9',
    name: 'Clemaster Floor Cleaner 500g',
    description: 'Clemaster Floor Cleaner 500g delivers powerful stain removal and fresh fragrance for cleaner, brighter clothes.',
    category: 'Floor Care',
    sizes: ['500g'],
    image: '/images/clemaster washing powder 500kg.jpeg',
    featured: false,
  }

]
