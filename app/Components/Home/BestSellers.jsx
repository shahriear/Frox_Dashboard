"use client";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

const sellers = [
  {
    id: 1,
    name: "John Carter",
    image: "/images/img1.png",
    category: "Electronics",
    sales: 1200,
    soldCount: 340,
  },
  {
    id: 2,
    name: "Sophia Karim",
    image: "/images/img2.png",
    category: "Fashion",
    sales: 980,
    soldCount: 290,
  },
  {
    id: 3,
    name: "Mark Thompson",
    image: "/images/img1.png",
    category: "Groceries",
    sales: 760,
    soldCount: 210,
  },
];

export default function BestSellers() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-white shadow rounded-xl p-4 h-full">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4 relative">
        <h2 className="font-semibold text-lg">Best Sellers</h2>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-2 hover:bg-gray-200 rounded-full"
        >
          <MoreVertical size={20} />
        </button>

        {/* Dropdown Menu */}
        {openMenu && (
          <div className="absolute right-0 top-10 w-48 bg-gray-100 border border-yellow-600 shadow rounded-2xl z-20">
            <ul className="text-sm">
              <li className="px-4 py-2 hover:bg-gray-300 rounded-2xl cursor-pointer">
                Sales report
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 rounded-2xl cursor-pointer">
                Export report
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 rounded-2xl cursor-pointer">
                Profit manage
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 rounded-2xl cursor-pointer">
                Revenue report
              </li>
              <li className="px-4 py-2 hover:bg-red-100 rounded-2xl text-red-600 font-bold cursor-pointer">
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
            className="flex items-center justify-between bg-gray-100 p-3 rounded-xl"
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
                <p className="font-medium text-sm">{seller.name}</p>
                <p className="text-xs text-gray-500">
                  Category: {seller.category}
                </p>
                
              </div>
            </div>

            <div>
              <span className="text-green-600 font-semibold">
                ${seller.sales.toLocaleString()}
              </span>
              <p className="text-xs font-medium text-gray-500">{seller.soldCount} Sales </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
