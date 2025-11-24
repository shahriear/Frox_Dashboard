'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryModal from './Components/Home/CategoryModal';

const Sidebar = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  // const [categories, setCategories] = useState([
  //   { name: 'Laptops', count: 8 },
  //   { name: 'Mobile phones', count: 6 },
  //   { name: 'Desktops', count: 4 },
  //   { name: 'Accessories', count: 3 },
  //   { name: 'Portable storage', count: 9 },
  //   { name: 'Networking', count: 2 },
  // ]);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Laptops', count: 8 },
    { id: 2, name: 'Mobile phones', count: 6 },
    { id: 3, name: 'Desktops', count: 4 },
    { id: 4, name: 'Accessories', count: 3 },
    { id: 5, name: 'Portable storage', count: 9 },
    { id: 6, name: 'Networking', count: 2 },
  ]);


  const navItems = [
    'Dashboard',
    'Products',
    'Orders',
    'Payments',
    'Transactions',
    'Clients',
  ];

  const topSellers = [
    '/images/48px.png',
    '/images/48px.png',
    '/images/48px.png',
    '/images/48px.png',
    '/images/48px.png',
  ];

  // Add new category
  // const handleAddCategory = () => {
  //   const newCategory = prompt('Enter category name:');
  //   if (newCategory) {
  //     setCategories([...categories, { name: newCategory, count: 0 }]);
  //   }
  // };
  const handleAddCategory = () => {
    const newCategoryName = prompt('Enter category name:');
    if (newCategoryName) {
      const newCategory = {
        id: Date.now(), // unique
        name: newCategoryName,
        count: 0,
      };
      setCategories([...categories, newCategory]);
    }
  };

  

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white shadow-lg flex flex-col p-4 transition-all duration-700 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between mb-4">
        {!collapsed && (
          <div className="flex text-gray-500 items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/favicon.png"
                alt="Frox Logo"
                fill
                style={{ objectFit: 'contain' }}
                sizes="40px"
              />
            </div>
            <h1 className="text-xl font-semibold">Frox</h1>
          </div>
        )}
        <button
          className="transition-all duration-300"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Navigation */}
      {!collapsed && (
        <nav className="flex flex-col mb-7">
          <ul className="space-y-0 text-gray-700">
            {navItems.map(item => (
              <li
                key={item}
                onClick={() => setActiveItem(item)}
                className={`p-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeItem === item
                    ? 'bg-purple-100 text-purple-600 font-medium'
                    : 'hover:bg-gray-100'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Categories */}
      <div className=" overflow-y-auto h-auto">
        {!collapsed && (
          <div className="flex- overflow-y-auto h-auto">
            <h2 className="text-[15px] font-bold mb-2">Categories</h2>
            <ul className="space-y-0.5">
              {categories.map(cat => (
                <li
                  key={cat.id}
                  className="flex justify-between p-1 text-gray-700 rounded hover:bg-gray-100 cursor-pointer transition-colors duration-300"
                >
                  <span>{cat.name}</span>
                  <span className="bg-purple-400 text-white px-2 rounded text-xs">
                    {cat.count}
                  </span>
                </li>
              ))}
            </ul>
            <div className="p-4">
        <button
          onClick={() => setOpenCategoryModal(true)}
          className="w-full bg-blue-600 text-white py-2 rounded-md"
        >
          Add Category
        </button>
      </div>
          </div>
          
        )}
      </div>
      {/* <button
        onClick={handleAddCategory}
        className="mt-2 text-blue-500 text-sm"
      >
        + Add category
      </button> */}
      

      {/* Top Sellers */}
      {!collapsed && (
        <div className="p-10 shadow-md ">
          <h2 className="text-[18px] font-bold mb-2">Top Sellers</h2>
          <div className="flex -space-x-2">
            {topSellers.map((img, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
              >
                <Image
                  src={img}
                  alt={`Top seller ${index}`}
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div>
        </div>
      )}


      
      {/* Modal */}
      {openCategoryModal && (
        <CategoryModal onClose={() => setOpenCategoryModal(false)} />
      )}

      {/* Upgrade to PRO */}
      {!collapsed && (
        <div className="mt-auto p-3 border rounded-xl bg-gray-50 text-center text-sm font-medium cursor-pointer">
          Upgrade to PRO
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
