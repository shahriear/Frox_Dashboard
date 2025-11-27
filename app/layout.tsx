'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from './Components/Navber/Navber';
import Sidebar from './Components/Sidebar/Sidebar';
import { ThemeProvider } from './Components/ThemeProvider/ThemeProvider';
import { useState, useEffect } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
        <div className="flex flex-col h-screen">
          
          {/* Navbar fixed at top */}
          <div className="flex-shrink-0">
            <Navber 
              onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
              sidebarOpen={sidebarOpen} 
            />
          </div>

          {/* Main area */}
          <div className="flex flex-1 h-[calc(100%-64px)] sm:h-[calc(100%-80px)] lg:h-[calc(100%-96px)]">
            
            {/* Sidebar fixed on the left */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-0'} flex-shrink-0 transition-all duration-300 overflow-hidden`}>
              {sidebarOpen && <Sidebar onLinkClick={isMobile ? () => setSidebarOpen(false) : undefined} />}
            </div>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-slate-900">
              {children}
              
            </div>
            
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
