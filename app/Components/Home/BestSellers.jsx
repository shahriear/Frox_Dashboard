"use client";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

const sellers = [
  {
    id: 1,
    name: "John Carter",
    image: "/photos/Avatar.png",
    category: "Electronics",
    sales: 1200,
    soldCount: 340,
  },
  {
    id: 2,
    name: "Sophia Karim",
    image: "/photos/Avatar.png",
    category: "Fashion",
    sales: 980,
    soldCount: 290,
  },
  {
    id: 3,
    name: "Mark Thompson",
    image: "/photos/Avatar.png",
    category: "Groceries",
    sales: 760,
    soldCount: 210,
  },
];

export default function BestSellers() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 shadow dark:shadow-lg rounded-xl p-4 h-full transition-colors duration-300">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4 relative">
        <h2 className="font-semibold text-lg dark:text-gray-100 transition-colors duration-300">Best Sellers</h2>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full transition-colors duration-300"
        >
          <MoreVertical size={20} />
        </button>

        {/* Dropdown Menu */}
        {openMenu && (
          <div className="absolute right-0 top-10 w-48 bg-gray-100 dark:bg-slate-700 border border-yellow-600 shadow dark:shadow-lg rounded-2xl z-20 transition-colors duration-300">
            <ul className="text-sm dark:text-gray-200">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-slate-600 rounded-2xl cursor-pointer transition-colors duration-300">
                Sales report
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-slate-600 rounded-2xl cursor-pointer transition-colors duration-300">
                Export report
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-slate-600 rounded-2xl cursor-pointer transition-colors duration-300">
                Profit manage
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-slate-600 rounded-2xl cursor-pointer transition-colors duration-300">
                Revenue report
              </li>
              <li className="px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-2xl text-red-600 dark:text-red-400 font-bold cursor-pointer transition-colors duration-300">
                Remove widget
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sellers List */}
      <div className="space-y-4">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-slate-700 p-3 rounded-xl transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <Image
                src={seller.image}
                alt={seller.name}
                width={45}
                height={45}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-sm dark:text-gray-100 transition-colors duration-300">{seller.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Category: {seller.category}
                </p>
                
              </div>
            </div>

            <div>
              <span className="text-green-600 font-semibold">
                ${seller.sales.toLocaleString()}
              </span>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 transition-colors duration-300">{seller.soldCount} Sales </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
