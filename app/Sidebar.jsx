import Image from 'next/image';
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col p-4">
      <div className="flex items-center gap-2 mb-6">
        {/* <div className="w-10 h-10 bg-purple-600 rounded-xl" /> */}
        <div className="w-10 h-10 relative">
          <Image
            src="/images/favicon.png"
            alt="Frox Logo"
            fill
            style={{ objectFit: 'contain' }}
            sizes="40px"
          />
        </div>

        <h1 className="text-xl font-semibold">Frox</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 text-gray-700">
          <li className="p-3 rounded-lg bg-purple-100 text-purple-600 font-medium cursor-pointer">
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

      <div className="mt-auto p-3 border rounded-xl bg-gray-50 text-center text-sm font-medium cursor-pointer">
        Upgrade to PRO
      </div>
    </aside>
  );
}

export default Sidebar