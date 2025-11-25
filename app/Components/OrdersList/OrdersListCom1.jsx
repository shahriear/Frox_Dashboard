'use client';

import React, { useMemo, useState } from 'react';
import ActionsDropdown from './ActionsDropdown';
import OrderDetailsModal from './OrderDetailsModal';

// OrdersList.jsx - Single-file React component (Tailwind CSS required)
// Usage: place this file in app/OrdersList/page.jsx (Next.js App Router) or inside components and import into a page.

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
    <div className="p-6 bg-gray-100 ">
      <div className=" mx-auto bg-white rounded-lg shadow-sm border  border-gray-300 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Orders List</h2>
            <nav className="text-xs text-gray-400 mt-1">
              Home &gt; <span className="text-indigo-600">Order List</span>
            </nav>
          </div>
          <div className="text-sm text-gray-400">
            Feb 15, 2022 - Feb 21, 2022
          </div>
        </div>

        {/* Filters row */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white text-sm"
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
            className="px-4 py-2 border  rounded-lg text-sm"
          />

          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white text-sm"
          >
            <option value="All">Status</option>
            <option value="Delivered">Delivered</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>

          <div className="ml-auto">
            <button className="px-3 py-2 border rounded-lg text-sm">
              Filters
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg overflow-hidden ">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-semibold text-gray-700">Recent Orders</h3>
          </div>

          <div className="w-full overflow-x-auto ">
            <table className="w-full text-sm table-auto">
              <thead className="bg-gray-50 text-gray-500 text-xs">
                <tr>
                  <th className="p-4 w-12 text-left">
                    <input type="checkbox" />
                  </th>
                  <th className="p-4 text-left">Order ID</th>
                  <th className="p-4 text-left">Customer name</th>
                  <th className="p-4 text-left">Payment Method</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-right">Total</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {visible.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 font-medium">#{order.id}</td>
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={order.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="truncate">{order.customer}</span>
                    </td>
                    <td className="p-3">{order.payment}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
                          STATUS_STYLES[order.status]
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full mr-2 bg-current/0"
                          aria-hidden
                        ></span>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">${order.total}</td>
                    {/* <td className="p-3 text-right">
                      <div className="relative inline-block text-left">
                        <button className="px-2 py-1 border rounded-md text-gray-500">
                          ⋯
                          
                        </button>
                        
                      </div>
                    </td> */}
                    <td className="p-3 text-right relative">
                      <button
                        className="px-2 py-1 border rounded-md text-gray-500"
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
                    <td colSpan={8} className="p-6 text-center text-gray-500">
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer / Pagination */}
          <div className="px-6 py-4  bg-white flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {(page - 1) * pageSize + 1} -{' '}
              {Math.min(page * pageSize, filtered.length)} of {filtered.length}{' '}
              orders
            </div>
            <div className="flex items-center gap-2">
              <nav className="inline-flex -space-x-px">
                <button
                  onClick={() => goPage(page - 1)}
                  className="px-3 py-2 border rounded-l text-sm"
                  disabled={page === 1}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goPage(i + 1)}
                    className={`px-3 py-2 border text-sm ${
                      page === i + 1 ? 'bg-indigo-600 text-white' : 'bg-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => goPage(page + 1)}
                  className="px-3 py-2 border rounded-r text-sm"
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
