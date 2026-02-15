'use client'

import { MessageCircle, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function ContactButtons() {
  const [expanded, setExpanded] = useState(false)

  const contacts = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/250788123456',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+250788123456',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@clemaster.com',
      color: 'bg-red-500 hover:bg-red-600',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Menu */}
      {expanded && (
        <div className="flex flex-col gap-2">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contact.color} text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center hover:shadow-xl`}
                title={contact.label}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setExpanded(!expanded)}
        className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:shadow-xl"
        size="icon"
      >
        <div className="text-xl">+</div>
      </Button>
    </div>
  )
}
