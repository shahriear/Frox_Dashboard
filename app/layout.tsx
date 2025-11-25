'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from './Components/Navber/Navber'
import Sidebar from './Components/Sidebar/Sidebar'
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 640);

    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Navber onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />

          <div className="flex">

            <div className={sidebarOpen ? 'sidebar-enter' : 'sidebar-exit'}>

              {sidebarOpen && <Sidebar onLinkClick={isMobile ? () => setSidebarOpen(false) : undefined}/>}

            </div>

            {children}
            
          </div>

        </div>
      </body>
    </html>
  );
}
