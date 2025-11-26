// import React from 'react'

// const page = () => {
//   return (
//     <>

//     <div className="w-full h-screen bg-amber-600 flex justify-center items-center md:text-5xl text-sm font-bold ">
//       <h1>Oders List page</h1>
//     </div>
      
//     </>
//   )
// }

// export default page

import SellerInfo from '../../Components/SellerDetails/SellerInfo';
import ReviewsStats from '../../Components/SellerDetails/ReviewsStats';
import RevenueCardList from '../../Components/SellerDetails/RevenueCardList';
import RevenueChart from '../../Components/SellerDetails/RevenueChart';
import ProductsTable from '../../Components/SellerDetails/ProductsTable';
import Pagination from '../../Components/SellerDetails/Pagination';

export default function SellerDetailsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Seller Details</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <SellerInfo />
          <ReviewsStats />
        </div>

        <div className="w-full lg:w-2/3">
          <RevenueCardList />
          <RevenueChart />
          <ProductsTable />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
