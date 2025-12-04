import React from 'react';
import Breadcrumb from '../../Components/Home/Breadcrumb';
import { DateRange } from '../../Components/Home/DateRange';
import StatCard from '../../Components/Home/StatCard';
import SalesPerformance from '../../Components/Home/SalesPerformance';
import BestSellers from '../../Components/Home/BestSellers';
import RecentPurchases from '../../Components/Home/RecentPurchases';
import MarketOverview from '../../Components/Home/MarketOverview';
import VisitsBySource from '../../Components/Home/VisitsBySource';
import TotalRevenue from '../../Components/Home/TotalRevenue';

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen  bg-gray-200 dark:bg-slate-800 transition-colors duration-300">
        {/* Main Container with responsive padding */}
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8">
          {/* Content Wrapper - Max width for larger screens */}
          <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Header Section - Responsive layout */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold ">
                Dashboard
              </h1>
              <DateRange />
            </div>

            {/* Stats Cards Grid - Fully responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              <StatCard title="Total Sells" amount="$126,500" percent="34.7%" />
              <StatCard
                title="Orders Value"
                amount="$136,800"
                percent="22.8%"
              />
              <StatCard title="Daily Orders" amount="$25,200" percent="17.8%" />
              <StatCard
                title="Daily Revenue"
                amount="$12,125"
                percent="23.9%"
              />
            </div>

            {/* Charts Section - Responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              <div className="lg:col-span-2">
                <SalesPerformance />
              </div>
              <div className="lg:col-span-1">
                <BestSellers />
              </div>
            </div>

            {/* Recent Purchases - Full width */}
            <RecentPurchases />

            {/* Bottom Charts Section - Responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              <MarketOverview />
              <VisitsBySource />
              <TotalRevenue />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
