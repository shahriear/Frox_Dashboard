// export default function ProductsRow({ item }) {
//   return (
//     <tr className="border-b hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800 transition-colors duration-300">
//       <td className="py-4">
//         <img src={item.image} className="w-14 rounded" />
//       </td>

//       <td className="font-semibold">{item.name}</td>
//       <td>{item.color}</td>

//       <td>
//         {item.sales} <span className="text-green-500 transition-colors duration-300">↑</span>
//       </td>

//       <td>{item.available}</td>

//       <td className="font-bold text-lg transition-colors duration-300">${item.price}</td>
//     </tr>
//   );
// }

'use client';
import { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function ProductsRow({ item }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800 transition-colors duration-300">
      {/* Image */}
      <td className="py-4">
        <img src={item.image} className="w-14 rounded-md" />
      </td>

      {/* Product Name */}
      <td className="font-semibold">{item.name}</td>

      {/* Color */}
      <td>{item.color}</td>

      {/* Sales */}
      <td>
        {item.sales}
        <span className="text-green-500 ml-1 transition-colors duration-300">↑</span>
      </td>

      {/* Available (same screenshot style) */}
      <td>
        <div className="flex flex-col w-24">
          <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{item.available}</span>

          <div className="w-full bg-gray-200 dark:bg-slate-600 h-2 rounded mt-1 transition-colors duration-300">
            <div
              className="h-full bg-orange-400 rounded transition-colors duration-300"
              style={{ width: `${(item.available / item.total) * 100}%` }}
            ></div>
          </div>
        </div>
      </td>

      {/* Price + 3 dot */}
      <td className="relative">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg transition-colors duration-300">${item.price}</span>

          <button onClick={() => setOpenMenu(!openMenu)} className="p-1">
            <FiMoreHorizontal className="text-xl text-gray-600 dark:text-gray-300 hover:text-black transition-colors duration-300" />
          </button>
        </div>

        {/* Dropdown menu */}
        {openMenu && (
          <div className="absolute right-0 mt-2 bg-white dark:bg-slate-700 shadow-xl rounded-md w-32 border z-10  transition-colors duration-300">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300">
              Edit
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300">
              View
            </button>
            <button className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-50 transition-colors duration-300">
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
