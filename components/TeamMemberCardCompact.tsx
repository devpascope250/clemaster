'use client'

import Image from 'next/image'
import { Mail, Phone, Linkedin } from 'lucide-react'
import { TeamMember } from '@/lib/data/team'

interface Props {
  member: TeamMember
}

export function TeamMemberCardCompact({ member }: Props) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="flex flex-col items-center text-center bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
      {/* Avatar */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden bg-primary/10 mb-4 flex items-center justify-center">
        {member.image && member.image !== '/images/hero-cleaning.jpg' ? (
          <Image
            src={member.image}
            alt={member.name}
            width={80}
            height={80}
            className="object-cover"
          />
        ) : (
          <span className="text-2xl font-bold text-primary">{initials}</span>
        )}
      </div>

      {/* Name and Position */}
      <h3 className="text-base font-bold text-foreground">{member.name}</h3>
      <p className="text-xs text-muted-foreground mb-4">{member.position}</p>

      {/* Contact Icons */}
      {/* <div className="flex gap-3 justify-center">
        <a
          href={`mailto:${member.email}`}
          title={`Email: ${member.email}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={18} />
        </a>
        <a
          href={`tel:${member.phone}`}
          title={`Phone: ${member.phone}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone size={18} />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={18} />
        </a>
      </div> */}
    </div>
  )
}
