'use client';

import DashboardPage from '@/app/Components/Home/DashboardPage';

import { useState } from 'react';

// import DashboardPage from './DashboardPage';
// import AllProducts from './AllProducts';
// import OrdersPage from './OrdersPage';
// import PaymentsPage from './PaymentsPage';
// import TransactionsPage from './TransactionsPage';
// import ClientsPage from './ClientsPage';

export default function dashboard() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex">
      {/* LEFT SIDEBAR */}

      {/* <div className="w-64 bg-white shadow-lg h-screen p-4 space-y-2">
        <button
          onClick={() => setActivePage('dashboard')}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
        >
          Dashboard
        </button>

        <button
          onClick={() => setActivePage('products')}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
        >
          Products
        </button>

        <button
          onClick={() => setActivePage('orders')}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
        >
          Orders
        </button>

        <button
          onClick={() => setActivePage('payments')}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
        >
          Payments
        </button>

        <button
          onClick={() => setActivePage('transactions')}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
        >
          Transactions
        </button>

        <button
          onClick={() => setActivePage('clients')}
          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
        >
          Clients
        </button>
      </div> */}

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-1 p-6">
        {activePage === 'dashboard' && <DashboardPage />}
        {activePage === 'products' && <ProductPage />}
        {activePage === 'orders' && <OrdersPage />}
        {activePage === 'payments' && <PaymentsPage />}
        {activePage === 'transactions' && <TransactionsPage />}
        {activePage === 'clients' && <ClientsPage />}
      </div>
    </div>
  );
}
