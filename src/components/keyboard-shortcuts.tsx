'use client'

import { useEffect, useState } from 'react'

export function KeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false)

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
          if (e.shiftKey) {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        
        case 's':
          if (e.shiftKey) {
            e.preventDefault()
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        
        case 't':
          if (e.shiftKey) {
            e.preventDefault()
            const themeToggle = document.querySelector('[aria-label*="theme"]') as HTMLButtonElement
            themeToggle?.click()
          }
          break
        
        case '?':
          if (e.shiftKey) {
            e.preventDefault()
            setShowHelp(prev => !prev)
          }
          break
        
        case 'h':
          if (e.shiftKey) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          break
      }

      if (e.key === 'Escape') {
        setShowHelp(false)
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

  if (!showHelp) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm"
      onClick={() => setShowHelp(false)}
    >
      <div
        className="bg-background border border-border rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold mb-5 tracking-tight">Keyboard Shortcuts</h3>
        <div className="space-y-3">
          {[
            ['Shift + C', 'Jump to Contact'],
            ['Shift + S', 'Jump to Services'],
            ['Shift + T', 'Toggle Theme'],
            ['Shift + H', 'Back to Top'],
            ['Shift + ?', 'This dialog'],
            ['Esc', 'Close menu / dialog'],
          ].map(([key, desc]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{desc}</span>
              <kbd className="px-2 py-1 rounded bg-muted text-xs font-mono font-medium">{key}</kbd>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowHelp(false)}
          className="mt-6 w-full py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
