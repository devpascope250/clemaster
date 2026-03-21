export interface SocialMediaAccount {
  id: string
  platform: 'Facebook' | 'Instagram' | 'LinkedIn' | 'Twitter' | 'TikTok'
  url: string
  icon: string
  status: 'active' | 'inactive'
  createdAt: string
}

export const defaultSocialMediaAccounts: SocialMediaAccount[] = [
  {
    id: '1',
    platform: 'Facebook',
    url: 'https://www.facebook.com/clemasterindustries',
    icon: 'facebook',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/company/clemaster-industries',
    icon: 'linkedin',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '3',
    platform: 'Twitter',
    url: 'https://x.com/ClemasterInd',
    icon: 'twitter',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '4',
    platform: 'Instagram',
    url: 'https://www.instagram.com/clemasterindustries/',
    icon: 'instagram',
    status: 'active',
    createdAt: '2024-01-15',
  }, {
    id: "5",
    platform: "TikTok",
    url: "https://www.tiktok.com/@clemasterindustries",
    icon: "tiktok",
    status: "active",
    createdAt: "2024-01-15",
  }
]

export const platformOptions = [
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'LinkedIn', label: 'LinkedIn' },
  { value: 'Twitter', label: 'Twitter' },
  { value: 'TikTok', label: 'TikTok' },
]
