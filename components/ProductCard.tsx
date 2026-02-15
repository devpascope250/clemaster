import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Product } from '@/lib/data/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">{product.category}</p>
          <h3 className="text-lg font-bold text-foreground mt-1">{product.name}</h3>
        </div>

        <p className="text-sm text-muted-foreground flex-1">{product.description}</p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <span key={size} className="text-xs bg-muted text-foreground px-2 py-1 rounded">
              {size}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-auto">
          Request Quote
        </Button>
      </div>
    </div>
  )
}
