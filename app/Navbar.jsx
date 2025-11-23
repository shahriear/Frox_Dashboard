'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-xl">
      <div className="flex items-center gap-4 ">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          {/* <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15 17h5l-1.405-1.405M19 13V7a7 7 0 10-14 0v6l-1.405 1.405M19 13H5" />
          </svg> */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        <Image
          src="/images/48px.png"
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white shadow-lg flex flex-col p-4 transition-all duration-700 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between mb-6 ">
        {!collapsed && (
          
          <div className="w-10 h-10 relative ">
            <Image
              src="/images/favicon.png"
              alt="Frox Logo"
              fill
              style={{ objectFit: 'contain' }}
              sizes="40px"
            />
            <h1 className="text-xl font-semibold md:absolute md:left-15 md:text-2xl md:text-gray-500 ">Frox</h1>
          </div>
        )}
        <button
          className="transition-all duration-300"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      {!collapsed && (
        <nav className="flex-1 ">
          <ul className="space-y-2 text-gray-700 ">
            <li className="p-3 rounded-lg bg-purple-100 text-purple-600 font-medium cursor-pointer ">
              Dashboard
            </li>
            <li className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              Products
            </li>
            <li className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              Orders
            </li>
            <li className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              Payments
            </li>
            <li className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              Transactions
            </li>
            <li className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              Clients
            </li>
          </ul>
        </nav>
      )}

      {!collapsed && (
        <div className="mt-auto p-3 border rounded-xl bg-gray-50 text-center text-sm font-medium cursor-pointer ">
          Upgrade to PRO
        </div>
      )}
    </aside>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
