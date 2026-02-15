interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({ subtitle, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {subtitle && <p className="text-sm font-semibold text-primary uppercase tracking-wide">{subtitle}</p>}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 text-balance">{title}</h2>
      {description && <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
