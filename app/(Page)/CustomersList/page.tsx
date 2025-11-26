import CustomersList from '@/app/Components/CustomersList/CustomersList'
import FilterBar from '@/app/Components/TransationsList/FilterBar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='pl-5 '>
            <h2 className="text-2xl font-bold pt-4">Orders List</h2>
            <nav className="text-xs text-gray-400 mt-1">
              Home &gt; <span className="text-indigo-600">Order List</span>
            </nav>
          </div>

    {/* <div className="w-full h-screen bg-amber-600 flex justify-center items-center md:text-5xl text-sm font-bold ">
      <h1>Customers List page</h1>
      </div> */}
      <FilterBar/>
    <CustomersList/>
      
    </>
  )
}

export default page
