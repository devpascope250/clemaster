// 'use client'

// import { TeamMemberCardCompact } from '@/components/TeamMemberCardCompact'
// import { SectionHeading } from '@/components/SectionHeading'
// import { teamMembers } from '@/lib/data/team'

// export default function TeamPage() {
//   return (
//     <>
//       {/* Page Header */}
//       <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeading
//             title="Meet Our Team"
//             description="The talented professionals behind Clemaster's success."
//           />
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {teamMembers.map((member) => (
//               <TeamMemberCardCompact key={member.id} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>


//     </>
//   )
// }




'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/SectionHeading'
import { Users } from 'lucide-react'

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

      {/* Team Photo Section - Enhanced with Management Description */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/n/team-culture.jpg"
              alt="Clemaster Team"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-3">
                  <Users className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs sm:text-sm text-white font-medium">Our Strength</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Together We Deliver Excellence
                </h3>
                <p className="text-white/80 text-sm sm:text-base max-w-2xl">
                  🌍 Our international management team brings together decades of industry expertise and advanced technical proficiency to deliver the highest quality cleaning solutions worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs sm:text-sm text-primary font-medium">Our Culture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Built on Trust & Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Clemaster, we believe that our people are our greatest asset. We foster a culture of 
                innovation, collaboration, and continuous improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Collaborative work environment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Commitment to quality and safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Continuous learning and development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Customer-focused approach</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/n/team-culture.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}