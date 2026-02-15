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

      {/* Team Culture */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Our Culture</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            At Clemaster, we believe that exceptional products come from exceptional people. Our diverse team brings together expertise, passion,
            and innovation. We foster a collaborative environment where every team member is valued and empowered to contribute to our mission of
            delivering world-class cleaning and hygiene solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
              <p className="text-muted-foreground">Talented professionals on our team</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">15</h3>
              <p className="text-muted-foreground">Years of combined expertise</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
              <p className="text-muted-foreground">Departments and specializations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
