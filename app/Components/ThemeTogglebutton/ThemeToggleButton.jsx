// ThemeToggleButton.jsx
'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggleButton() {
  const { theme, setTheme, mounted } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(theme === 'dark')
  }, [theme])

  // Prevent hydration mismatch
  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="w-full inline-flex items-center justify-center gap-2 px-3 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900
                 bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 shadow-sm hover:shadow-md text-gray-900 dark:text-white font-medium"
    >
      {/* icon: sun for light, moon for dark */}
      {isDark ? (
        // Sun icon (when currently dark, show sun icon)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-17.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) : (
        // Moon icon (when currently light, show moon icon)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
      <span className="text-sm font-medium">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}
