'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center gap-4 justify-center ">

      {/* Moon icon (Gray) */}
      <IoMoon
        size={22}
        className="text-gray-00 dark:text-gray-00 transition-colors"
      />

      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`
          w-12 h-6 rounded-full flex items-center px-1 transition-all
          ${isDark
            ? 'bg-gradient-to-r from-purple-500 to-purple-700'
            : 'bg-gray-400'}
        `}
      >
        <div
          className={`
            w-5 h-5 bg-white rounded-full shadow-md transform transition-all
            ${isDark ? 'translate-x-6' : 'translate-x-0'}
          `}
        />
      </button>

      {/* Sun icon (Orange / Yellow hover) */}
      <MdOutlineWbSunny
        size={22}
        className="
          text-gray-00 
          hover:text-orange-500 
          dark:text-amber-500
          dark:hover:text-yellow-400 
          transition-colors
        "
      />

    </div>
  );
}
