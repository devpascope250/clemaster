import { ReactNode } from 'react'

interface StatCardProps {
  icon: ReactNode
  label: string
  value: string | number
  description?: string
}

export function StatCard({ icon, label, value, description }: StatCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        </div>
        <div className="text-primary text-3xl opacity-20">{icon}</div>
      </div>
    </div>
  )
}
