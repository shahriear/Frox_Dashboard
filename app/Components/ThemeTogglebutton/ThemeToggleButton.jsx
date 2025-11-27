'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMoonOutline } from 'react-icons/io5'
import { MdWbSunny } from 'react-icons/md'

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 w-full"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <MdWbSunny className="text-lg" />
          <span className="text-sm font-medium">Light Mode</span>
        </>
      ) : (
        <>
          <IoMoonOutline className="text-lg" />
          <span className="text-sm font-medium">Dark Mode</span>
        </>
      )}
    </button>
  )
}
