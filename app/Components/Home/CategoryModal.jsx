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
    <div className="fixed inset-0 bg-black/70 dark:bg-black/80 flex items-center justify-center z-[999] transition-colors duration-300">
      <div className="bg-white dark:bg-slate-800 w-[90%] max-w-md p-6 rounded-xl shadow-lg dark:shadow-2xl transition-colors duration-300">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-100 transition-colors duration-300">Add New Category</h2>

        <input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Write category name"
          className="w-full border px-3 py-2 rounded-md mb-4 bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-slate-700 text-gray-800 dark:text-gray-100 rounded-md transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-slate-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
