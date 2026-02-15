'use client'

import { useState } from 'react'
import { Upload, X, GripVertical } from 'lucide-react'
import Image from 'next/image'

interface BlogImageUploadProps {
  images: string[]
  onImagesChange: (images: string[]) => void
  maxImages?: number
}

export function BlogImageUpload({ images, onImagesChange, maxImages = 4 }: BlogImageUploadProps) {
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
    const fileArray = Array.from(files)

    // Check max images
    if (images.length + fileArray.length > maxImages) {
      setError(`Maximum ${maxImages} images allowed. You can only add ${maxImages - images.length} more.`)
      return
    }

    // Convert files to data URLs
    fileArray.forEach((file) => {
      if (!file.type.startsWith('image/')) {
        setError('Only image files are allowed')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        onImagesChange([...images, dataUrl])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    onImagesChange(images.filter((_, i) => i !== index))
  }

  const moveImage = (fromIndex: number, direction: 'up' | 'down') => {
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1
    if (toIndex < 0 || toIndex >= images.length) return

    const newImages = [...images]
    ;[newImages[fromIndex], newImages[toIndex]] = [newImages[toIndex], newImages[fromIndex]]
    onImagesChange(newImages)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Images ({images.length}/{maxImages})
        </label>
        <p className="text-xs text-muted-foreground mb-3">
          Minimum 1 image required. First image will be used as featured image. Drag to reorder.
        </p>

        {/* Upload Area */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          } ${images.length >= maxImages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex flex-col items-center gap-3">
            <Upload size={32} className="text-muted-foreground" />
            <div>
              <p className="font-semibold text-foreground">Drag images here or click to upload</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, WebP up to 5MB each</p>
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
              disabled={images.length >= maxImages}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                images.length >= maxImages
                  ? 'bg-muted text-muted-foreground cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
              }`}
            >
              {images.length >= maxImages ? 'Max images reached' : 'Select Files'}
            </label>
          </div>
        </div>

        {error && (
          <div className="mt-3 rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-2 text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <div className="space-y-3">
          <div className="text-sm font-semibold text-foreground">Image Preview</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted border border-border">
                  <Image
                    src={image}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  {index === 0 && (
                    <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  {index > 0 && (
                    <button
                      onClick={() => moveImage(index, 'up')}
                      className="p-2 bg-white/20 hover:bg-white/40 rounded transition-colors"
                      title="Move up"
                    >
                      <GripVertical size={18} className="text-white" />
                    </button>
                  )}
                  {index < images.length - 1 && (
                    <button
                      onClick={() => moveImage(index, 'down')}
                      className="p-2 bg-white/20 hover:bg-white/40 rounded transition-colors"
                      title="Move down"
                    >
                      <GripVertical size={18} className="text-white" />
                    </button>
                  )}
                  <button
                    onClick={() => removeImage(index)}
                    className="p-2 bg-red-500/80 hover:bg-red-600 rounded transition-colors"
                    title="Remove"
                  >
                    <X size={18} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
