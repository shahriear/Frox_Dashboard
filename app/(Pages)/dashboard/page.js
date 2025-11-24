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
