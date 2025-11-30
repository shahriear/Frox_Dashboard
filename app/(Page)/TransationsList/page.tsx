import React from 'react'
import PageHeader from "../../Components/TransationsList/PageHeader";
import FilterBar from "../../Components/TransationsList/FilterBar";
import TransactionTable from "../../Components/TransationsList/TransactionTable";
import Pagination from "../../Components/TransationsList/Pagination";

const pendingData = [
  {
    orderId: "#25413",
    paid: "2458",
    method: "Credit Card",
    img: "/photos/creditCard.png",
    date: "17 Oct, 2022",
    status: "Pending",
  },
  {
    orderId: "#25413",
    paid: "2458",
    method: "AmericanExpress",
    img: "/photos/AmericanExpress.png",
    date: "17 Oct, 2022",
    status: "Pending",
  },
];

const completedData = [
  {
    orderId: "#25413",
    paid: "2458",
    method: "Credit Card",
    img: "/photos/creditCard.png",
    date: "17 Oct, 2022",
    status: "Completed",
  },
];

const page = () => {
  return (
    <>

    {/* <div className="w-full h-screen bg-amber-600 flex justify-center items-center md:text-5xl text-sm font-bold ">
      <h1>Traqnsation List page</h1>
    </div> */}
    <div className="p-6 bg-gray-0 dark:bg-slate-00 transition-colors duration-300 ">

      <PageHeader />
      <FilterBar />

      <TransactionTable title="Pending transactions" data={pendingData} />
      <Pagination />

      <TransactionTable title="Completed transactions" data={completedData} />
      <Pagination />

    </div>
      
    </>
  )
}

export default page

// import PageHeader from "@/components/Transactions/PageHeader";
// import FilterBar from "@/components/Transactions/FilterBar";
// import TransactionTable from "@/components/Transactions/TransactionTable";
// import Pagination from "@/components/Transactions/Pagination";



// import PageHeader from "../../Components/TransationsList/PageHeader";
// import FilterBar from "../../Components/TransationsList/FilterBar";
// import TransactionTable from "../../Components/TransationsList/TransactionTable";
// import Pagination from "../../Components/TransationsList/Pagination";

// const pendingData = [
//   {
//     orderId: "#25413",
//     paid: "2458",
//     method: "Credit Card",
//     img: "/images/cc.png",
//     date: "17 Oct, 2022",
//     status: "Pending",
//   },
//   {
//     orderId: "#25413",
//     paid: "2458",
//     method: "Paypal",
//     img: "/images/paypal.png",
//     date: "17 Oct, 2022",
//     status: "Pending",
//   },
// ];

// const completedData = [
//   {
//     orderId: "#25413",
//     paid: "2458",
//     method: "Credit Card",
//     img: "/images/cc.png",
//     date: "17 Oct, 2022",
//     status: "Completed",
//   },
// ];

// export default function TransactionsPage() {
//   return (
    // <div className="p-6">

    //   <PageHeader />
    //   <FilterBar />

    //   <TransactionTable title="Pending transactions" data={pendingData} />
    //   <Pagination />

    //   <TransactionTable title="Completed transactions" data={completedData} />
    //   <Pagination />

    // </div>
//   );
// }
