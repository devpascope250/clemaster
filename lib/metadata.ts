import { Metadata } from 'next'

export function generateMetadata(options: {
  title: string
  description: string
  image?: string
  url?: string
}): Metadata {
  const baseUrl = 'https://clemaster.com'
  const url = options.url ? `${baseUrl}${options.url}` : baseUrl
  const image = options.image || 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=630&fit=crop'

  return {
    title: `${options.title} | Clemaster Industries`,
    description: options.description,
    openGraph: {
      title: `${options.title} | Clemaster`,
      description: options.description,
      url,
      siteName: 'Clemaster Industries',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: options.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateBlogMetadata(options: {
  title: string
  description: string
  author: string
  date: string
  image?: string
  slug?: string
}): Metadata {
  const baseUrl = 'https://clemaster.com'
  const url = options.slug ? `${baseUrl}/blog/${options.slug}` : baseUrl
  const image = options.image || 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=630&fit=crop'

  return {
    title: `${options.title} | Clemaster Blog`,
    description: options.description,
    authors: [{ name: options.author }],
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      type: 'article',
      publishedTime: options.date,
      authors: [options.author],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: options.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}
