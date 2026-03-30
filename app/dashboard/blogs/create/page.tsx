'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { BlogImageUpload } from '@/components/BlogImageUpload'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
export default function CreateBlogPage() {
  const router = useRouter();
  const [images, setImages] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

const formik = useFormik({
  initialValues: {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
  },
  validationSchema: Yup.object({
    title: Yup.string().required('Title is required'),
    excerpt: Yup.string().required('Excerpt is required'),
    content: Yup.string().required('Content is required'),
    author: Yup.string().required('Author is required'),
  }),
  onSubmit: async(values) => {
    if (!images) {  // Changed from images.length === 0
      setError('A featured image is required')
      return
    }
    let newSlug = values.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    values.slug = newSlug
    try{
      await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ ...values, image: images }), // Changed from images to image
      })
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        formik.resetForm()
        setImages('')  // Reset to empty string
        setError('')
      }, 2000)
      router.push('/dashboard/blogs')
    } catch (error) {
      console.error('Error creating blog post:', error);
      setError('Failed to create blog post. Please try again.');
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }
})


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
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3">
                {error}
              </div>
            )}
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="Blog post title"
                className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Slug (auto-generated)</label>
              <input
                type="text"
                name="slug"
                disabled
                value={
                  formik.values.slug || formik.values.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') 
                }
                onChange={formik.handleChange}
                placeholder="auto-generated-slug"
                className={`w-full px-4 py-3 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed ${formik.touched.slug && formik.errors.slug ? 'border-red-500' : ''}`}
              />
            </div>

            {/* Category */}
            
            {/* Author */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                placeholder="Your name"
                className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${formik.touched.author && formik.errors.author ? 'border-red-500' : ''}`}
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Excerpt</label>
              <textarea
                name="excerpt"
                value={formik.values.excerpt}
                onChange={formik.handleChange}
                placeholder="Brief summary of the post (max 160 characters)"
                rows={3}
                maxLength={160}
                className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none ${formik.touched.excerpt && formik.errors.excerpt ? 'border-red-500' : ''}`}
              />
              <p className="text-xs text-muted-foreground mt-1">{formik.values.excerpt.length}/160 characters</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Content</label>
              <textarea
                name="content"
                value={formik.values.content}
                onChange={formik.handleChange}
                placeholder="Write your blog post content here..."
                rows={12}
                className={`w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none ${formik.touched.content && formik.errors.content ? 'border-red-500' : ''}`}
              />
            </div>

            {/* Images */}
            <BlogImageUpload images={images} onImagesChange={setImages} maxImages={1} />

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
