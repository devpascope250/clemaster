"use client"
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { blogs } from '@prisma/client'

export default function BlogPostPage() {
  const { slug } = useParams()
  const [blogPosts, setBlogPosts] = useState<blogs[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/blog-read`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        setBlogPosts(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlog();
  }, []); // Remove slug from dependencies since we're fetching all posts

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Link href="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Find the post after data is loaded
  const post = blogPosts?.find((p) => p.slug === slug);
  // If post doesn't exist after loading, show 404
  if (!post) {
    notFound();
  }

  // Get previous and next posts
  const postIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

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
            </div>
          </div>
        </div>
      </article>

      {/* Featured Image */}
      {post.image && (
        <div className="relative h-96 sm:h-[500px] w-full bg-muted">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            sizes="100vw" 
            className="object-cover" 
            unoptimized 
          />
        </div>
      )}

      {/* Article Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none text-foreground">
            {post.excerpt && (
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            )}

            {/* Article Body */}
            <div className="space-y-6 mb-12">
              <p>{post.content}</p>
              {/* You might want to remove this hardcoded content or make it dynamic */}
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
    </>
  )
}