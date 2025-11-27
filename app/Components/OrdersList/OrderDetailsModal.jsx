// 'use client';
// import React from 'react';

// export default function OrderDetailsModal({ order, onClose }) {
//   if (!order) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 transition-colors duration-300">
//       <div className="bg-white dark:bg-slate-700 rounded-lg p-6 w-96 relative transition-colors duration-300">
//         <h3 className="text-lg font-semibold mb-4 transition-colors duration-300">Order Details</h3>
//         <p>
//           <strong>Order ID:</strong> #{order.id}
//         </p>
//         <p>
//           <strong>Customer:</strong> {order.customer}
//         </p>
//         <p>
//           <strong>Payment:</strong> {order.payment}
//         </p>
//         <p>
//           <strong>Date:</strong> {order.date}
//         </p>
//         <p>
//           <strong>Status:</strong> {order.status}
//         </p>
//         <p>
//           <strong>Total:</strong> ${order.total}
//         </p>
//         <button
//           className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded transition-colors duration-300"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
