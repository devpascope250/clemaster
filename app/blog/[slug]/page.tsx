'use client'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { BlogCard } from '@/components/BlogCard'
import { blogPosts } from '@/lib/data/blogs'
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  // Get previous and next posts
  const postIndex = blogPosts.findIndex((p) => p.id === post.id)
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  return (
    <>
      {/* Article Header */}
      <article className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">{post.category}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">{post.title}</h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-semibold text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </article>

      {/* Featured Image */}
      <div className="relative h-96 sm:h-[500px] w-full bg-muted">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      {/* Article Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none text-foreground">
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

            {/* Article Body - Simulated Content */}
            <div className="space-y-6 mb-12">
              <p>{post.content}</p>
              <p>
                This is the main content area of the blog post. In a production environment, this would be dynamically loaded from your CMS or database.
                The content would typically include detailed information, best practices, insights, and recommendations related to the article topic.
              </p>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Takeaways</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional cleaning requires the right products and techniques</li>
                <li>Quality assurance is essential in the cleaning industry</li>
                <li>Sustainability and effectiveness can coexist</li>
                <li>Proper training and protocols ensure optimal results</li>
              </ul>
            </div>
          </div>

          {/* Article Navigation */}
          <div className="border-t border-border pt-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`}>
                  <Button variant="outline" className="w-full justify-start group">
                    <ArrowLeft className="group-hover:translate-x-[-4px] transition-transform" size={18} />
                    <span className="flex-1 text-left">
                      <span className="block text-xs text-muted-foreground">Previous Post</span>
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary truncate">
                        {prevPost.title}
                      </span>
                    </span>
                  </Button>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`}>
                  <Button variant="outline" className="w-full justify-end group">
                    <span className="flex-1 text-right">
                      <span className="block text-xs text-muted-foreground">Next Post</span>
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary truncate">
                        {nextPost.title}
                      </span>
                    </span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
