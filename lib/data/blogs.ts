export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'benefits-of-professional-cleaning',
    title: 'Top 5 Benefits of Professional Cleaning Products',
    excerpt: 'Discover why professional-grade cleaning products make a difference in your business.',
    content: `Professional cleaning products are designed with specific formulations to tackle tough stains and bacteria. Unlike household cleaners, they are tested for efficacy and safety in commercial environments...`,
    author: 'John Doe',
    date: '2024-02-10',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'eco-friendly-cleaning-solutions',
    title: 'Sustainable Cleaning: The Future of Hygiene',
    excerpt: 'Learn how eco-friendly cleaning products can reduce environmental impact without compromising quality.',
    content: `Sustainability is becoming increasingly important in the cleaning industry. Eco-friendly products use biodegradable ingredients that are safe for the environment while maintaining powerful cleaning capabilities...`,
    author: 'Jane Smith',
    date: '2024-02-05',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5f400f7d1?w=600&h=400&fit=crop',
    readTime: 6,
  },
  {
    id: '3',
    slug: 'disinfection-best-practices',
    title: 'Hospital-Grade Disinfection: Best Practices',
    excerpt: 'Essential guidelines for proper disinfection procedures in medical and commercial settings.',
    content: `Proper disinfection requires more than just applying a cleaning solution. It involves understanding contact time, dilution ratios, and proper application techniques to ensure maximum effectiveness...`,
    author: 'Dr. Michael Chen',
    date: '2024-01-30',
    category: 'Health & Safety',
    image: 'https://images.unsplash.com/photo-1579154204601-01d430248e3d?w=600&h=400&fit=crop',
    readTime: 7,
  },
  {
    id: '4',
    slug: 'cost-saving-cleaning-strategies',
    title: 'Reducing Cleaning Costs Without Compromising Quality',
    excerpt: 'Smart strategies to optimize your cleaning budget while maintaining high standards.',
    content: `Businesses can significantly reduce cleaning expenses by implementing efficient cleaning schedules, training staff properly, and choosing the right products for specific tasks...`,
    author: 'Robert Williams',
    date: '2024-01-20',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=600&h=400&fit=crop',
    readTime: 5,
  },
  {
    id: '5',
    slug: 'workplace-hygiene-standards',
    title: 'Maintaining High Workplace Hygiene Standards',
    excerpt: 'A comprehensive guide to workplace cleanliness and employee health standards.',
    content: `Clean workplaces improve employee productivity and reduce sick days. Establishing clear hygiene protocols and using appropriate cleaning products is essential for any modern business...`,
    author: 'Lisa Anderson',
    date: '2024-01-10',
    category: 'Health & Safety',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    readTime: 6,
  },
  {
    id: '6',
    slug: 'chemical-safety-in-cleaning',
    title: 'Chemical Safety: What You Need to Know',
    excerpt: 'Important information about handling cleaning chemicals safely and responsibly.',
    content: `Chemical safety is paramount in cleaning operations. Understanding product labels, proper storage, and correct handling procedures prevents accidents and protects both employees and customers...`,
    author: 'Dr. Sarah Green',
    date: '2024-01-01',
    category: 'Health & Safety',
    image: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=600&h=400&fit=crop',
    readTime: 8,
  },
]
