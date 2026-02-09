'use client'

import { useEffect } from 'react'

export function KeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if not in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      // Shortcuts
      switch (e.key.toLowerCase()) {
        case 'c':
          // Press 'C' to scroll to contact
          if (e.shiftKey) {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        
        case 's':
          // Press 'S' to scroll to services
          if (e.shiftKey) {
            e.preventDefault()
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        
        case 't':
          // Press 'T' to toggle theme
          if (e.shiftKey) {
            e.preventDefault()
            const themeToggle = document.querySelector('[aria-label*="theme"]') as HTMLButtonElement
            themeToggle?.click()
          }
          break
        
        case '?':
          // Press '?' to show shortcuts help
          if (e.shiftKey) {
            e.preventDefault()
            alert(`Keyboard Shortcuts:
            
Shift + C - Jump to Contact
Shift + S - Jump to Services
Shift + T - Toggle Theme
Shift + H - Back to Top
              
Esc - Close mobile menu`)
          }
          break
        
        case 'h':
          // Press 'H' to go to top
          if (e.shiftKey) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          break
      }

      // ESC to close mobile menu
      if (e.key === 'Escape') {
        const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]') as HTMLButtonElement
        if (mobileMenuButton) {
          const isOpen = document.querySelector('.fixed.inset-0.bg-background')
          if (isOpen) {
            mobileMenuButton.click()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  return null
}
