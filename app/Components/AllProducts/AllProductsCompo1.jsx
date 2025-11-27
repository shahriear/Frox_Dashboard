'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiChevronDown, FiList, FiGrid } from 'react-icons/fi';
import Image from 'next/image';
import AllProductsGrid from './AllProductsGrid';
import { products } from './OnlyForView';

const AllProductsCompo1 = () => {
  const router = useRouter();
  const [viewMode, setViewMode] = useState('list');

  const renderStars = rating => {
    return (
      <div className="flex gap-1 text-orange-400 transition-colors duration-300">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-sm transition-colors duration-300">
            ★
          </span>
        ))}
      </div>
    );
  };

  // If grid view is selected, render the grid component
  if (viewMode === 'grid') { 
    return (
      <div className="w-full bg-gray-100 dark:bg-slate-700 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 dark:border-slate-600 p-6 transition-colors duration-300">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 transition-colors duration-300">All Products</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300'
              }`}
            >
              <FiList size={20} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300'
              }`}
            >
              <FiGrid size={20} />
            </button>
          </div>
        </div>
        <AllProductsGrid
          products={products}
          onProductClick={productId =>
            router.push(`/ProductDetails/${productId}`)
          }
        />
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 dark:bg-slate-700 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 dark:border-slate-600 p-6 transition-colors duration-300">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 transition-colors duration-300">All Products</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <FiList size={20} />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <FiGrid size={20} />
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-slate-700 rounded-lg shadow-sm overflow-x-auto transition-colors duration-300">
        <table className="w-full min-w-max">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Image
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Name
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    SKU
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Price
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Status
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    QTY
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Rating
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-left transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Sales
                  </span>
                  <FiChevronDown size={16} className="text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                </div>
              </th>
              <th className="px-6 py-4 text-center transition-colors duration-300">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">•••</span>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`border-b border-gray-100 dark:border-slate-600 dark:border-slate-600 hover:bg-gray-300 dark:bg-slate-500 dark:hover:bg-slate-600 transition-colors ${
                  index % 2 === 0 ? 'bg-white dark:bg-slate-700 dark:bg-slate-700' : 'bg-gray-100 dark:bg-slate-700 dark:bg-slate-800'
                }`}
              >
                {/* Image Column */}
                <td className="px-6 py-4">
                  <div className="w-14 h-14 bg-gray-200 dark:bg-slate-600 dark:bg-slate-600 rounded-lg flex items-center justify-center overflow-hidden transition-colors duration-300">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500 dark:text-gray-400 text-xs transition-colors duration-300">No Image</span>
                    )}
                  </div>
                </td>

                {/* Name Column */}
                <td className="px-6 py-4">
                  <div
                    onClick={() => router.push(`/ProductDetails/${product.id}`)}
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
                      {product.description}
                    </p>
                  </div>
                </td>

                {/* SKU Column */}
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{product.sku}</span>
                </td>

                {/* Price Column */}
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    {product.price}
                  </span>
                </td>

                {/* Status Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full transition-colors duration-300"></span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {product.status}
                    </span>
                  </div>
                </td>

                {/* QTY Column */}
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{product.qty}</span>
                </td>

                {/* Rating Column */}
                <td className="px-6 py-4">{renderStars(product.rating)}</td>

                {/* Sales Column */}
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{product.sales}</span>
                </td>

                {/* Actions Column */}
                <td className="px-6 py-4 text-center transition-colors duration-300">
                  <button className="text-gray-400 dark:text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:bg-slate-500 transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:bg-slate-500 transition-colors">
            3
          </button>
          <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:bg-slate-500 transition-colors">
            4
          </button>
          <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:bg-slate-500 transition-colors">
            5
          </button>
        </div>
        <button className="text-purple-500 hover:text-purple-600 font-semibold flex items-center gap-2 transition-colors">
          Next <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default AllProductsCompo1;
