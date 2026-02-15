export interface TeamMember {
  id: string
  name: string
  position: string
  email: string
  phone: string
  linkedin: string
  image: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'James Mwangi',
    position: 'Chief Executive Officer',
    email: 'james@clemaster.com',
    phone: '+250788123456',
    linkedin: 'https://linkedin.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    bio: 'Industry veteran with 15+ years of experience in manufacturing and business development.',
  },
  {
    id: '2',
    name: 'Grace Njeri',
    position: 'Head of Operations',
    email: 'grace@clemaster.com',
    phone: '+250788123457',
    linkedin: 'https://linkedin.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    bio: 'Passionate about process optimization and maintaining high production standards.',
  },
  {
    id: '3',
    name: 'Peter Kamau',
    position: 'Product Development Manager',
    email: 'peter@clemaster.com',
    phone: '+250788123458',
    linkedin: 'https://linkedin.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    bio: 'Chemist and innovator focused on creating sustainable and effective cleaning solutions.',
  },
  {
    id: '4',
    name: 'Amara Okafor',
    position: 'Head of Sales & Marketing',
    email: 'amara@clemaster.com',
    phone: '+250788123459',
    linkedin: 'https://linkedin.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    bio: 'Strategic thinker with expertise in market expansion and brand positioning.',
  },
  {
    id: '5',
    name: 'David Kipchoge',
    position: 'Quality Assurance Lead',
    email: 'david@clemaster.com',
    phone: '+250788123460',
    linkedin: 'https://linkedin.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    bio: 'Dedicated to ensuring every product meets international quality and safety standards.',
  },
]
