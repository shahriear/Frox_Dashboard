'use client';
import React, { useState } from 'react';

const CategoryModal = ({ onClose }) => {
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    if (!category.trim()) return alert('Please enter a category name');
    console.log('New Category:', category);
    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-[999]">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>

        <input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Write category name"
          className="w-full border px-3 py-2 rounded-md mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
