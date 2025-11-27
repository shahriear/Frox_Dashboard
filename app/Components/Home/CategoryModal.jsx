// 'use client';
// import React, { useEffect, useState } from 'react';

// const CategoryModal = ({ onClose }) => {
//   const [category, setCategory] = useState('');

//   const handleSubmit = () => {
//     if (!category.trim()) return alert('Please enter a category name');
//     console.log('New Category:', category);
//     onClose(); // close modal
//   };
   
//   return (
//     <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-[999] ">
//       <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Add New Category</h2>

//         <input
//           type="text"
//           value={category}
//           onChange={e => setCategory(e.target.value)}
//           placeholder="Write category name"
//           className="w-full border px-3 py-2 rounded-md mb-4"
//         />

//         {/* Buttons */}
//         <div className="flex justify-end gap-3">
//           <button
//             className="px-4 py-2 bg-gray-300 rounded-md"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryModal;

'use client';
import React, { useEffect, useState } from 'react';

const CategoryModal = ({ onClose }) => {
  const [category, setCategory] = useState('');

  // Scroll lock when modal is open
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    return () => {
      // Unlock scroll on unmount/close
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = () => {
    if (!category.trim()) return alert('Please enter a category name');
    console.log('New Category:', category);
    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">
      <div className="bg-white dark:bg-gray-800 w-[90%] max-w-md p-6 rounded-xl shadow-lg transition-colors">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Add New Category</h2>

        <input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Write category name"
          className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md mb-4 bg-white dark:bg-gray-700 dark:text-white transition-colors"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
