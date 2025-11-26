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
    <tr className="border-b border-gray-300 hover:bg-gray-50 transition">
      {/* Checkbox */}
      <td className="py-4">
        <input type="checkbox" className="cursor-pointer" />
      </td>

      {/* Name + Email */}
      <td className="font-semibold">
        {review.name}
        <p className="text-sm text-gray-500">{review.email}</p>
      </td>

      {/* Comment */}
      <td className="max-w-xs text-gray-600">{review.comment}</td>

      {/* Rating using FaStar icons */}
      <td className="flex items-center gap-1 text-yellow-500">
        {Array.from({ length: review.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </td>

      {/* Date */}
      <td className="text-gray-500">{review.date}</td>

      {/* Actions */}
      <td className="relative">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <FiMoreHorizontal className="text-xl text-gray-600" />
        </button>

        {openMenu && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-32 border animate-fadeIn z-20"
          >
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                onApprove?.(review);
                setOpenMenu(false);
              }}
            >
              Approve
            </button>

            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                onReply?.(review);
                setOpenMenu(false);
              }}
            >
              Reply
            </button>

            <button
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
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
