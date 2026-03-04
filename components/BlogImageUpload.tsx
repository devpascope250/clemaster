'use client'

import { useState } from 'react'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'

interface BlogImageUploadProps {
  images: string  // Now it's a single image string
  onImagesChange: (image: string) => void
  maxImages?: number
}

export function BlogImageUpload({ images, onImagesChange, maxImages = 1 }: BlogImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState('')

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    setError('')

    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files: FileList) => {
    const file = files[0] // Only take the first file

    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Only image files are allowed')
      return
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Image size should be less than 5MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      onImagesChange(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    onImagesChange('')
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Featured Image {images ? '(1/1)' : '(0/1)'}
        </label>
        <p className="text-xs text-muted-foreground mb-3">
          Upload a featured image for your blog post. PNG, JPG, WebP up to 5MB.
        </p>

        {/* Upload Area */}
        {!images ? (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
              dragActive
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <Upload size={32} className="text-muted-foreground" />
              <div>
                <p className="font-semibold text-foreground">Drag an image here or click to upload</p>
                <p className="text-xs text-muted-foreground">PNG, JPG, WebP up to 5MB</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="px-4 py-2 rounded-lg font-medium bg-primary text-white hover:bg-primary/90 cursor-pointer transition-colors"
              >
                Select Image
              </label>
            </div>
          </div>
        ) : (
          /* Image Preview */
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted border border-border">
              <Image
                src={images}
                alt="Featured image preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                Featured Image
              </div>
            </div>
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-600 rounded-full transition-colors"
              title="Remove image"
            >
              <X size={18} className="text-white" />
            </button>
          </div>
        )}

        {error && (
          <div className="mt-3 rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-2 text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}