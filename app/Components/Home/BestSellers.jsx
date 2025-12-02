'use client';
import { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';

const sellers = [
  {
    id: 1,
    name: 'John Carter',
    image: '/photos/Avatar.png',
    category: 'Electronics',
    sales: 1200,
    soldCount: 340,
  },
  {
    id: 2,
    name: 'Sophia Karim',
    image: '/photos/Avatar.png',
    category: 'Fashion',
    sales: 980,
    soldCount: 290,
  },
  {
    id: 3,
    name: 'Mark Thompson',
    image: '/photos/Avatar.png',
    category: 'Groceries',
    sales: 760,
    soldCount: 210,
  },
];

export default function BestSellers() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-[var(--card-bg)]  shadow rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 h-full min-h-[300px] sm:min-h-[350px] transition-colors duration-300">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 relative gap-2">
        <h2 className="font-semibold text-base sm:text-lg ">
          Best Sellers
        </h2>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="self-start sm:self-auto p-1.5 sm:p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors ml-auto"
        >
          <MoreVertical size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Dropdown Menu */}
        {openMenu && (
          <div className="absolute right-0 sm:right-0 top-10 sm:top-12 w-40 sm:w-48 bg-gray-100 dark:bg-gray-700 border border-yellow-600 shadow-lg rounded-xl z-20 transition-colors">
            <ul className="text-xs sm:text-sm dark:text-gray-200">
              <li className="px-3 sm:px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors">
                Sales report
              </li>
              <li className="px-3 sm:px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors">
                Export report
              </li>
              <li className="px-3 sm:px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors">
                Profit manage
              </li>
              <li className="px-3 sm:px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors">
                Revenue report
              </li>
              <li className="px-3 sm:px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg text-red-600 dark:text-red-400 font-bold cursor-pointer transition-colors">
                Remove widget
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sellers List */}
      <div className="space-y-2 sm:space-y-3">
        {sellers.map(seller => (
          <div
            key={seller.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[var(--row-bg)] dark:bg-gray-600 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-colors gap-2"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Image
                src={seller.image}
                alt={seller.name}
                width={40}
                height={40}
                className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="font-medium text-xs sm:text-sm dark:text-white truncate">
                  {seller.name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  {seller.category}
                </p>
              </div>
            </div>

            <div className="text-right sm:text-left">
              <span className="text-green-600 dark:text-green-400 font-semibold text-sm sm:text-base">
                ${seller.sales.toLocaleString()}
              </span>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {seller.soldCount} Sales
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
