'use client';
import { useState, useRef, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

export default function ReviewRow({ review, onApprove, onReply, onDelete }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  //  Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <tr className="border-b border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800 transition">
      {/* Checkbox */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
      </td>

      {/* Name + Email */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
        <div className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white whitespace-nowrap">
          {review.name}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 whitespace-nowrap">
          {review.email}
        </p>
      </td>

      {/* Comment */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 max-w-xs sm:max-w-sm md:max-w-md">
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 truncate hover:text-clip">
          {review.comment}
        </div>
      </td>

      {/* Rating using FaStar icons */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 hidden sm:table-cell">
        <div className="flex items-center gap-0.5 sm:gap-1 text-yellow-500 transition-colors duration-300">
          {Array.from({ length: review.rating }).map((_, i) => (
            <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
          ))}
        </div>
      </td>

      {/* Date */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 hidden md:table-cell whitespace-nowrap">
        {review.date}
      </td>

      {/* Actions */}
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 relative">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-1 sm:p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-800 transition"
        >
          <FiMoreHorizontal className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300" />
        </button>

        {openMenu && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 bg-white dark:bg-slate-800 shadow-lg rounded-lg w-28 sm:w-32 border border-gray-200 dark:border-slate-700 animate-fadeIn z-20 transition-colors duration-300"
          >
            <button
              className="block w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 border-b border-gray-100 dark:border-slate-700"
              onClick={() => {
                onApprove?.(review);
                setOpenMenu(false);
              }}
            >
              Approve
            </button>

            <button
              className="block w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 border-b border-gray-100 dark:border-slate-700"
              onClick={() => {
                onReply?.(review);
                setOpenMenu(false);
              }}
            >
              Reply
            </button>

            <button
              className="block w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300"
              onClick={() => {
                onDelete?.(review);
                setOpenMenu(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
