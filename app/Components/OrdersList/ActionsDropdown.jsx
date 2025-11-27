'use client';
import Link from 'next/link';
import React from 'react';

export default function ActionsDropdown({
  order,
  onClose,
  onStatusChange,
  onViewDetails,
}) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-700 border  rounded-md shadow-lg z-50 transition-colors duration-300">
      <Link href={'/OrderDetails'}>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300"
        
      >
        View Details
      </button></Link>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        Mark Completed
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        Mark Pending
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors duration-300"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        Cancel Order
      </button>
    </div>
  );
}
