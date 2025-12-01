import React from 'react'
import OrderHeader from '../../Components/OrderDetails/OrderHeader';
import CustomerInfo from '../../Components/OrderDetails/CustomerInfo';
import OrderInfo from '../../Components/OrderDetails/OrderInfo';
import DeliverInfo from '../../Components/OrderDetails/DeliverInfo';
import PaymentInfo from '../../Components/OrderDetails/PaymentInfo';
import NotesBox from '../../Components/OrderDetails/NotesBox';
import ProductTable from '../../Components/OrderDetails/ProductTable';
import SummaryCard from '../../Components/OrderDetails/SummaryCard';

const page = () => {
  return (
    <>
      {/* <div className="w-full h-screen bg-amber-600 flex justify-center items-center md:text-5xl text-sm font-bold ">
      <h1>Order Details page</h1>
    </div> */}
      <div className="py-5  pl-5 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-gray-00 dark:text-gray-00">
          Orders Details
        </h2>
        <nav className="text-xs  mt-1">
          Home &gt;{' '}
          <span className="text-indigo-600 text-[13px] font-medium dark:text-indigo-400">
            Order List
          </span>
        </nav>
      </div>
      <div className="p-6  transition-colors duration-300">
        <OrderHeader />

        <div className="grid grid-cols-3 gap-5">
          <CustomerInfo />
          <OrderInfo />
          <DeliverInfo />
        </div>

        <div className="grid grid-cols-2 gap-5 my-6">
          <PaymentInfo />
          <NotesBox />
        </div>

        <ProductTable />
        <SummaryCard />
      </div>
    </>
  );
}

export default page
