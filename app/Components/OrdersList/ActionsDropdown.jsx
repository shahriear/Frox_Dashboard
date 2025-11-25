'use client';
import React from 'react';

export default function ActionsDropdown({
  order,
  onClose,
  onStatusChange,
  onViewDetails,
}) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border  rounded-md shadow-lg z-50">
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        View Details
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        Mark Completed
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          onViewDetails(order);
          onClose();
        }}
      >
        Mark Pending
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-red-100"
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
