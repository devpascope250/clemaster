'use client'

import { TeamMemberCardCompact } from '@/components/TeamMemberCardCompact'
import { SectionHeading } from '@/components/SectionHeading'
import { teamMembers } from '@/lib/data/team'

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Meet Our Team"
            description="The talented professionals behind Clemaster's success."
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCardCompact key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>


    </>
  )
}
