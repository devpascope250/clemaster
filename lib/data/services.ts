export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface WorkingArea {
  id: string
  region: string
  description: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Product Manufacturing',
    description: 'State-of-the-art manufacturing facility producing ISO-certified cleaning and hygienic products.',
    icon: '🏭',
  },
  {
    id: '2',
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control ensuring every product meets international standards.',
    icon: '✓',
  },
  {
    id: '3',
    title: 'Export & Distribution',
    description: 'Reliable worldwide export services reaching businesses across multiple continents.',
    icon: '🌍',
  },
  {
    id: '4',
    title: 'Custom Solutions',
    description: 'Tailored cleaning and hygiene solutions designed for your specific business needs.',
    icon: '⚙️',
  },
  {
    id: '5',
    title: 'Technical Support',
    description: 'Expert guidance on product selection, usage, and optimization for your operations.',
    icon: '📞',
  },
  {
    id: '6',
    title: 'Sustainability Focus',
    description: 'Commitment to eco-friendly manufacturing and sustainable business practices.',
    icon: '🌱',
  },
]

export const workingAreas: WorkingArea[] = [
  {
    id: '1',
    region: 'East Africa',
    description: 'Primary service region covering Rwanda, Uganda, Kenya, and Tanzania with robust distribution networks.',
  },
  {
    id: '2',
    region: 'Central Africa',
    description: 'Expanding presence in DRC, Congo, and surrounding countries with growing partnerships.',
  },
  // {
  //   id: '3',
  //   region: 'Southern Africa',
  //   description: 'Strategic partnerships in South Africa, Botswana, and Zimbabwe for regional supply.',
  // },
  // {
  //   id: '4',
  //   region: 'International Markets',
  //   description: 'Export capabilities to Europe, Asia, and other continents for global clients.',
  // },
]

export interface CompanyInfo {
  name: string
  fullName: string
  tagline: string
  description: string
  foundedYear: number
  workingHours: {
    weekdays: string
    weekends: string
  }
  contact: {
    email: string
    phone: string
    address: string
    country: string
  }
  capacities: {
    dailyProduction: string
    employeeCount: string
    certifications: string[]
  }
}

export const companyInfo: CompanyInfo = {
  name: 'Clemaster',
  fullName: 'Clemaster Industries - Value Platform Industrial Rwanda Ltd',
  tagline: 'Excellence in Cleaning & Hygiene Solutions',
  description:
    'Clemaster Industries is a leading manufacturer of professional-grade cleaning and hygienic products serving businesses worldwide.',
  foundedYear: 2021,
  workingHours: {
    weekdays: 'Monday - Friday: 8:00 AM - 5:00 PM',
    weekends: 'Saturday: 8:00 AM - 5:00 PM | Sunday: Closed',
  },
  contact: {
    email: 'info@clemasterindustries.com',
    phone: '+250793761333',
    address: 'Industrial Park Zone, Rwamagana',
    country: 'Rwanda',
  },
  capacities: {
    dailyProduction: '50,000+ packages per day',
    employeeCount: '150+ trained professionals',
    certifications: ['RS EAS 271-1:2021', 'RSB Approved',],
  },
}
