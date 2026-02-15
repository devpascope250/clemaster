'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface BlogGalleryProps {
  images: string[]
}

export function BlogGallery({ images }: BlogGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  if (!images || images.length === 0) return null

  const displayImages = images.slice(1) // Skip first image (featured)
  if (displayImages.length === 0) return null

  return (
    <>
      {/* Gallery Grid */}
      <div className="my-8">
        <div className={`grid gap-4 ${
          displayImages.length === 1
            ? 'grid-cols-1'
            : displayImages.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="relative h-48 md:h-56 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 2}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white bg-primary/80 rounded-full p-2">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative h-[80vh] w-full rounded-lg overflow-hidden">
              <Image
                src={displayImages[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 2}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              {selectedIndex > 0 && (
                <button
                  onClick={() => setSelectedIndex(selectedIndex - 1)}
                  className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              <div className="text-white text-sm flex items-center">
                {selectedIndex + 2} / {displayImages.length + 1}
              </div>
              {selectedIndex < displayImages.length - 1 && (
                <button
                  onClick={() => setSelectedIndex(selectedIndex + 1)}
                  className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
