// 'use client';

// import { useTheme } from 'next-themes';
// import { useState, useEffect } from 'react';
// import { Sun, Moon } from 'lucide-react';

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <button
//       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
//     >
//       {theme === 'light' ? (
//         <Moon size={20} className="text-gray-800" />
//       ) : (
//         <Sun size={20} className="text-yellow-400" />
//       )}
//     </button>
//   );
// }
