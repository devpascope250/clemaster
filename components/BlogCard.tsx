import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { BlogPost } from '@/lib/data/blogs'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col h-full rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-semibold text-primary uppercase">{post.category}</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground line-clamp-2">{post.title}</h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground flex-1 line-clamp-2">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">{post.author}</p>
            <p>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
          </div>
          <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary/80 transition-colors">
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  )
}
