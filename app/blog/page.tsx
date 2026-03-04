'use client'

import React, { useState, useMemo } from 'react'
import { BlogCard } from '@/components/BlogCard'
import { SectionHeading } from '@/components/SectionHeading'
import { Search } from 'lucide-react'
import { blogs } from '@prisma/client'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [blogPosts, setBlogPosts] = useState<blogs[]>([]) // You would fetch this from your API in a real app
  const [isLoading, setIsLoading] = useState(true)
  const postsPerPage = 6

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post?.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesSearch 
    })
  }, [searchTerm, blogPosts])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blog-read');
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Use mock data if API fails
      setBlogPosts([]);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    fetchBlogs()
  }, [])


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


  return (
    <>
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Clemaster Blog"
            description="Insights, tips, and best practices for cleaning and hygiene in your business."
          />
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          {/* Results Count */}
          <p className="text-sm text-muted-foreground mt-4">
            Showing {paginatedPosts.length} of {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        currentPage === i + 1
                          ? 'bg-primary text-white border-primary'
                          : 'border-border hover:bg-muted'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No blog posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
