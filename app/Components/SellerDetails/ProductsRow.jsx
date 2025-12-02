'use client';
import { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function ProductsRow({ item }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <tr className="border-b border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300">
      {/* Image */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
        <img
          src={item.image}
          className="w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8 rounded-md object-contain flex-shrink-0"
        />
      </td>

      {/* Product Name */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 hidden sm:table-cell">
        <div className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white whitespace-nowrap truncate">
          {item.name}
        </div>
      </td>

      {/* Color */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 hidden md:table-cell">
        <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          {item.color}
        </div>
      </td>

      {/* Sales */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-900 dark:text-white">
          <span>{item.sales}</span>
          <span className="text-green-500 font-bold">↑</span>
        </div>
      </td>

      {/* Available */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 hidden sm:table-cell">
        <div className="flex flex-col w-16 sm:w-20 md:w-24">
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {item.available}
          </span>

          <div className="w-full bg-gray-200 dark:bg-slate-600 h-1.5 sm:h-2 rounded mt-1 transition-colors duration-300">
            <div
              className="h-full bg-orange-400 rounded transition-colors duration-300"
              style={{
                width: `${(item.available / (item.total || 500)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </td>

      {/* Price + 3 dot */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 relative">
        <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3">
          <span className="font-bold text-xs sm:text-sm md:text-base text-gray-900 dark:text-white whitespace-nowrap">
            ${item.price}
          </span>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="p-1 sm:p-1.5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded transition-colors duration-300 flex-shrink-0"
          >
            <FiMoreHorizontal className="text-base sm:text-lg text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Dropdown menu */}
        {openMenu && (
          <div className="absolute right-0 top-8 mt-1 bg-white dark:bg-slate-800 shadow-lg rounded-lg w-28 sm:w-32 border border-gray-200 dark:border-slate-700 z-20 transition-colors duration-300">
            <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 border-b border-gray-100 dark:border-slate-700">
              Edit
            </button>
            <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 border-b border-gray-100 dark:border-slate-700">
              View
            </button>
            <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300">
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
