import Image from 'next/image'
import { Mail, Phone, Linkedin } from 'lucide-react'
import { TeamMember } from '@/lib/data/team'
import { Button } from '@/components/ui/button'

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full h-56 bg-muted overflow-hidden">
        <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" className="object-cover" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
          <p className="text-sm font-semibold text-primary">{member.position}</p>
        </div>

        <p className="text-sm text-muted-foreground flex-1">{member.bio}</p>

        {/* Contact Info */}
        <div className="space-y-2">
          <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail size={16} />
            <span className="truncate">{member.email}</span>
          </a>
          <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone size={16} />
            <span>{member.phone}</span>
          </a>
        </div>

        {/* LinkedIn Button */}
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-border hover:bg-muted">
          <Linkedin size={16} />
          LinkedIn Profile
        </Button>
      </div>
    </div>
  )
}
