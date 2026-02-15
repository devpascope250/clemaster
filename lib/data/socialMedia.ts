export interface SocialMediaAccount {
  id: string
  platform: 'Facebook' | 'Instagram' | 'LinkedIn' | 'Twitter' | 'YouTube'
  url: string
  icon: string
  status: 'active' | 'inactive'
  createdAt: string
}

export const defaultSocialMediaAccounts: SocialMediaAccount[] = [
  {
    id: '1',
    platform: 'Facebook',
    url: 'https://facebook.com/clemaster',
    icon: 'facebook',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/clemaster',
    icon: 'linkedin',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '3',
    platform: 'Twitter',
    url: 'https://twitter.com/clemaster',
    icon: 'twitter',
    status: 'inactive',
    createdAt: '2024-01-15',
  },
]

export const platformOptions = [
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'LinkedIn', label: 'LinkedIn' },
  { value: 'Twitter', label: 'Twitter' },
  { value: 'YouTube', label: 'YouTube' },
]
