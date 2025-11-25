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
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-purple-300"
    >
      {/* Product Image Placeholder */}
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={160}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
          <MdMoreVert size={20} />
        </button>
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        {renderStars(product.rating)}
        <span className="text-xs text-gray-500">({product.reviews})</span>
      </div>

      {/* Price and SKU */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-gray-900">{product.price}</span>
        <span className="text-xs text-gray-500">{product.sku}</span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 mb-3 line-clamp-3">
        {product.description}
      </p>

      {/* Status Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="text-xs font-medium text-gray-700">
          {product.status}
        </span>
      </div>

      {/* Stock Info */}
      <div className="text-xs text-gray-600 border-t pt-3">{product.stock}</div>
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
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 2
              ? 'bg-purple-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentPage(3)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 3
              ? 'bg-purple-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          3
        </button>
        <button
          onClick={() => setCurrentPage(4)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 4
              ? 'bg-purple-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          4
        </button>
        <button
          onClick={() => setCurrentPage(5)}
          className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
            currentPage === 5
              ? 'bg-purple-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          5
        </button>
        <button className="px-4 h-10 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
          Next →
        </button>
      </div>
    </div>
  );
};

export default AllProductsGrid;
