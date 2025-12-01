'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdMoreVert } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { products as defaultProducts } from './OnlyForView';

const AllProductsGrid = ({ products, onProductClick }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // Use props if provided, otherwise use default products from OnlyForView
  const productList = products || defaultProducts;

  const handleProductClick = productId => {
    if (onProductClick) {
      onProductClick(productId);
    } else {
      router.push(`/ProductDetails/${productId}`);
    }
  };

  const renderStars = rating => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={14}
            className={
              i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }
          />
        ))}
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div
      onClick={() => handleProductClick(product.id)}
      className="bg-whit dark:bg-slate- border border-gray-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-purple-300"
    >
      {/* Product Image Placeholder */}
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gray-00 bg-[var(--products-bg)] rounded-lg flex items-center justify-center mb-3 overflow-hidden transition-colors duration-300">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={160}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-gray-00 dark:text-gray-00 transition-colors duration-300">No Image</span>
          )}
        </div>
        <button className="absolute top-2 right-2 text-gray-00 dark:text-gray-00  hover:text-w transition-colors duration-300">
          <MdMoreVert size={20} />
        </button>
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-00 dark:text-gray-00 mb-2 transition-colors duration-300">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        {renderStars(product.rating)}
        <span className="text-xs text-gray-00 dark:text-gray-00 transition-colors duration-300">({product.reviews})</span>
      </div>

      {/* Price and SKU */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-gray-00 dark:text-gray-00 transition-colors duration-300">{product.price}</span>
        <span className="text-xs text-gray-00 dark:text-gray-00 transition-colors duration-300">{product.sku}</span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-00 dark:text-gray-00 mb-3 line-clamp-3 transition-colors duration-300">
        {product.description}
      </p>

      {/* Status Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full transition-colors duration-300"></span>
        <span className="text-xs font-medium text-gray-00 dark:text-gray-00 transition-colors duration-300">
          {product.status}
        </span>
      </div>

      {/* Stock Info */}
      <div className="text-xs text-gray-600 dark:text-gray-300 border-t pt-3 transition-colors duration-300">{product.stock}</div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {productList.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setCurrentPage(1)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 1
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800'
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 2
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800'
          }`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentPage(3)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 3
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800'
          }`}
        >
          3
        </button>
        <button
          onClick={() => setCurrentPage(4)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 4
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800'
          }`}
        >
          4
        </button>
        <button
          onClick={() => setCurrentPage(5)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 5
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800'
          }`}
        >
          5
        </button>
        <button className="px-4 h-10 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800 flex items-center gap-2 transition-colors duration-300">
          Next →
        </button>
      </div>
    </div>
  );
};

export default AllProductsGrid;
