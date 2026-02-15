'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Business',
    author: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && { slug: value.toLowerCase().replace(/\s+/g, '-') }),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Blog post submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ title: '', slug: '', excerpt: '', content: '', category: 'Business', author: '' })
    }, 2000)
  }

  const categories = ['Business', 'Health & Safety', 'Sustainability', 'Technology', 'Industry News']

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/blogs">
          <Button variant="outline" size="icon">
            <ArrowLeft size={18} />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Create Blog Post</h1>
          <p className="text-muted-foreground mt-1">Write and publish a new article</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-card rounded-lg border border-border p-6">
        {submitted ? (
          <div className="rounded-lg bg-green-50 border border-green-200 text-green-800 px-6 py-4 text-center">
            <p className="font-semibold">Blog post created successfully!</p>
            <p className="text-sm">Redirecting to blog list...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Blog post title"
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Slug (auto-generated)</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="auto-generated-slug"
                className="w-full px-4 py-3 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed"
                disabled
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of the post (max 160 characters)"
                rows={3}
                maxLength={160}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">{formData.excerpt.length}/160 characters</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your blog post content here..."
                rows={12}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                Publish Post
              </Button>
              <Link href="/dashboard/blogs">
                <Button variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
