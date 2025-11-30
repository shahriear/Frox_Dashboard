import React from 'react'
import Breadcrumb from '../../Components/Home/Breadcrumb'
import {DateRange} from '../../Components/Home/DateRange'
import StatCard from "../../Components/Home/StatCard";
import SalesPerformance from "../../Components/Home/SalesPerformance";
import BestSellers from "../../Components/Home/BestSellers";
import RecentPurchases from "../../Components/Home/RecentPurchases";
import MarketOverview from "../../Components/Home/MarketOverview";
import VisitsBySource from "../../Components/Home/VisitsBySource";
import TotalRevenue from "../../Components/Home/TotalRevenue";


const page = () => {
  return (
    <>

    <div className="p-6 space-y-6 w-full bg-gray- dark:bg-slate- transition-colors duration-300">
          <Breadcrumb />
    
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-00 dark:text-gray-00">Dashboard</h1>
            <DateRange />
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard title="Total Sells" amount="$126,500" percent="34.7%" />
            <StatCard title="Orders Value" amount="$136,800" percent="22.8%" />
            <StatCard title="Daily Orders" amount="$25,200" percent="17.8%" />
            <StatCard title="Daily Revenue" amount="$12,125" percent="23.9%" />
          </div>
    
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SalesPerformance />
            <BestSellers />
          </div>
    
          <RecentPurchases />
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <MarketOverview />
            <VisitsBySource />
            <TotalRevenue />
          </div>
        </div>
      
    </>
  )
}

export default page
