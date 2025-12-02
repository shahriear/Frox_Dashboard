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
    <div className="absolute right-0 mt-2 w-36 sm:w-44 md:w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg z-50 transition-colors duration-300">
      <Link href={'/OrderDetails'}>
        <button className="block w-full text-left px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 border-b border-gray-100 dark:border-slate-700">
          View Details
        </button>
      </Link>
      <button
        className="block w-full text-left px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 border-b border-gray-100 dark:border-slate-700"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        Mark Completed
      </button>
      <button
        className="block w-full text-left px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 border-b border-gray-100 dark:border-slate-700"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        Mark Pending
      </button>
      <button
        className="block w-full text-left px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300"
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
