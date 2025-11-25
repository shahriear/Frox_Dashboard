import React from 'react';
import ProductDetails from '../../../Components/AllProducts/ProductDetails';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { id } = await params;
  return (
    <>
      <ProductDetails productId={id} />
    </>
  );
};

export default ProductDetailPage;
