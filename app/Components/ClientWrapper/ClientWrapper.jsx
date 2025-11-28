// 'use client';

// import { useState, useEffect } from 'react';
// import Navber from '../Navber/Navber';
// import Sidebar from '../Sidebar/Sidebar';

// export default function ClientWrapper({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth < 640);

//     const handleResize = () => setIsMobile(window.innerWidth < 640);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Navbar */}
//       <div className="flex-shrink-0">
//         <Navber
//           onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//           sidebarOpen={sidebarOpen}
//         />
//       </div>

//       {/* Main Layout */}
//       <div className="flex flex-1 h-[calc(100%-64px)] sm:h-[calc(100%-80px)] lg:h-[calc(100%-96px)]">
//         {/* Sidebar */}
//         <div
//           className={`${
//             sidebarOpen ? 'w-64' : 'w-0'
//           } flex-shrink-0 transition-width duration-300 overflow-hidden`}
//         >
//           {sidebarOpen && (
//             <Sidebar
//               onLinkClick={isMobile ? () => setSidebarOpen(false) : undefined}
//             />
//           )}
//         </div>

//         {/* Content */}
//         <div className="flex-1 overflow-y-auto ">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }
// // bg-gray-50 dark:bg-gray-900