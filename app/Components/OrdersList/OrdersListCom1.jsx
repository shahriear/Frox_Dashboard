'use client';

import React, { useMemo, useState } from 'react';
import ActionsDropdown from './ActionsDropdown';
import OrderDetailsModal from './OrderDetailsModal';

const SAMPLE_ORDERS = Array.from({ length: 15 }).map((_, i) => ({
  id: 25413 + i,
  customer: ['Jerome Bell', 'Cody Fisher', 'Wade Warren', 'Savannah Nguyen'][
    i % 4
  ],
  avatar: `https://i.pravatar.cc/40?img=${i + 10}`,
  payment: ['American Express', 'PayPal', 'Visa', 'MasterCard', 'Cash'][i % 5],

  // FIXED: No locale format (same for SSR + CSR)
  date: `${(i % 28) + 1}-${(i % 12) + 1}-2022`,

  status: ['Delivered', 'Pending', 'Canceled'][i % 3],

  // FIXED: No random values (consistent for SSR + CSR)
  total: (800 + i * 10).toFixed(2),
}));

const STATUS_STYLES = {
  Delivered: 'bg-green-100 text-green-700',
  Pending: 'bg-amber-100 text-amber-700',
  Canceled: 'bg-red-100 text-red-700',
};

export default function OrdersListCom1() {
  const [filterCategory, setFilterCategory] = useState('All Category');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchDate, setSearchDate] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 6;
  //  Add these two states
  const [openDropdown, setOpenDropdown] = useState(null); // কোন order dropdown open
  const [modalOrder, setModalOrder] = useState(null); // View Details modal order

  const filtered = useMemo(() => {
    let data = SAMPLE_ORDERS.slice();
    if (statusFilter !== 'All')
      data = data.filter(d => d.status === statusFilter);
    if (searchDate)
      data = data.filter(d =>
        d.date.includes(new Date(searchDate).toLocaleDateString())
      );
    return data;
  }, [statusFilter, searchDate]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  function goPage(p) {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  //  Status update function
  function updateStatus(id, newStatus) {
    setOrders(prev =>
      prev.map(o => (o.id === id ? { ...o, status: newStatus } : o))
    );
    setOpenDropdown(null);
  }

  return (
    <div className="w-full min-h-screen bg-gray-300 dark:bg-slate-900 transition-colors duration-300 p-3 sm:p-4 md:p-6">
      <div className="mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-300 dark:border-slate-600 p-3 sm:p-4 md:p-6 transition-colors duration-300">
        {/* Header Section - Responsive */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Orders List
            </h2>
            <nav className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">
              Home &gt;{' '}
              <span className="text-blue-500 dark:text-blue-400 transition-colors duration-300 font-medium">
                Order List
              </span>
            </nav>
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 whitespace-nowrap">
            Feb 15, 2022 - Feb 21, 2022
          </div>
        </div>

        {/* Filters row - Responsive stacking */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 overflow-x-auto">
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white transition-colors duration-300 min-w-max"
          >
            <option>All Category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home</option>
          </select>

          <input
            type="date"
            value={searchDate}
            onChange={e => setSearchDate(e.target.value)}
            className="px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white transition-colors duration-300 min-w-max"
          />

          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white transition-colors duration-300 min-w-max"
          >
            <option value="All">Status</option>
            <option value="Delivered">Delivered</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>

          <button className="px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300 min-w-max">
            Filters
          </button>
        </div>

        {/* Table Container - Responsive with scroll */}
        <div className="border border-gray-300 dark:border-slate-600 rounded-lg transition-colors duration-300 overflow-visible">
          <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white dark:bg-slate-700 transition-colors duration-300 border-b border-gray-300 dark:border-slate-600">
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white transition-colors duration-300">
              Recent Orders
            </h3>
          </div>

          {/* Horizontal scroll on mobile */}
          <div className="w-full overflow-x-auto table-container">
            <table
              className="w-full text-xs sm:text-sm transition-colors duration-300 min-w-max"
              style={{ borderCollapse: 'separate', borderSpacing: 0 }}
            >
              <thead className="bg-gray-50 dark:bg-slate-600 text-gray-900 dark:text-white transition-colors duration-300">
                <tr>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left transition-colors duration-300">
                    <input type="checkbox" className="w-4 h-4" />
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-semibold transition-colors duration-300">
                    Order ID
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-semibold transition-colors duration-300 hidden sm:table-cell">
                    Customer
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-semibold transition-colors duration-300 hidden md:table-cell">
                    Payment
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-semibold transition-colors duration-300">
                    Date
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-semibold transition-colors duration-300">
                    Status
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-right font-semibold transition-colors duration-300">
                    Total
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-right font-semibold transition-colors duration-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-slate-600">
                {visible.map(order => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 dark:hover:bg-slate-700 dark:bg-slate-800 transition-colors duration-300"
                  >
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-medium text-gray-900 dark:text-white">
                      #{order.id}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 hidden sm:table-cell">
                      <div className="flex items-center gap-2 min-w-0">
                        <img
                          src={order.avatar}
                          alt="avatar"
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
                        />
                        <span className="truncate text-gray-900 dark:text-white text-xs sm:text-sm">
                          {order.customer}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 hidden md:table-cell text-gray-900 dark:text-white text-xs sm:text-sm">
                      {order.payment}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-gray-900 dark:text-white text-xs sm:text-sm">
                      {order.date}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
                      <span
                        className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                          STATUS_STYLES[order.status]
                        }`}
                      >
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1.5 sm:mr-2 bg-current/0 transition-colors duration-300"
                          aria-hidden
                        ></span>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-right text-gray-900 dark:text-white font-medium text-xs sm:text-sm transition-colors duration-300">
                      ${order.total}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-right relative transition-colors duration-300 td-actions">
                      <button
                        className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 text-xs sm:text-sm"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === order.id ? null : order.id
                          )
                        }
                      >
                        ⋯
                      </button>

                      {openDropdown === order.id && (
                        <ActionsDropdown
                          order={order}
                          onClose={() => setOpenDropdown(null)}
                          onStatusChange={updateStatus}
                          onViewDetails={o => setModalOrder(o)}
                        />
                      )}
                    </td>
                  </tr>
                ))}

                {visible.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-3 sm:px-4 md:px-6 py-6 text-center text-gray-500 dark:text-gray-400 transition-colors duration-300"
                    >
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer / Pagination - Responsive */}
          <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white dark:bg-slate-700 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-t border-gray-300 dark:border-slate-600 transition-colors duration-300">
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 whitespace-nowrap">
              Showing {(page - 1) * pageSize + 1} -{' '}
              {Math.min(page * pageSize, filtered.length)} of {filtered.length}{' '}
              orders
            </div>
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
              <nav className="inline-flex gap-1 sm:gap-2">
                <button
                  onClick={() => goPage(page - 1)}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded text-xs sm:text-sm transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={page === 1}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goPage(i + 1)}
                    className={`px-2.5 sm:px-3 py-1.5 sm:py-2 border text-xs sm:text-sm rounded transition-colors duration-300 ${
                      page === i + 1
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white dark:bg-slate-600 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-500'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => goPage(page + 1)}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded text-xs sm:text-sm transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <OrderDetailsModal
        order={modalOrder}
        onClose={() => setModalOrder(null)}
      /> */}
    </div>
  );
}
