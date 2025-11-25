'use client'

import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { CiBoxes } from 'react-icons/ci'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { GrTransaction } from 'react-icons/gr'
import { FaUserFriends } from 'react-icons/fa'

const Sidebar = ({ onLinkClick }) => {
    const pathname = usePathname()

    const isActive = (href) => {
        return pathname === href
    }

    const handleLinkClick = () => {
        if (onLinkClick) {
            onLinkClick()
        }
    }

    return (
        <div className="w-64 bg-white h-screen overflow-y-auto p-6">

            {/* Menu Items */}
            <div className="space-y-2">
                {/* Dashboard */}
                <Link href="/Dashboard" onClick={handleLinkClick}>
                    <div className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition ${
                        isActive('/Dashboard')
                            ? 'bg-linear-to-r from-purple-500 to-purple-600 text-white'
                            : 'text-gray-500 hover:bg-gray-50'
                    }`}>
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${
                            isActive('/Dashboard') ? 'bg-white/30' : ''
                        }`}>
                            <BiSolidDashboard/>
                        </div>
                        <span className="text-sm font-medium">Dashboard</span>
                    </div>
                </Link>

                {/* Products */}
                <Link href="/AllProducts" onClick={handleLinkClick}>
                    <div className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition ${
                        isActive('/AllProducts')
                            ? 'bg-linear-to-r from-purple-500 to-purple-600 text-white'
                            : 'text-gray-500 hover:bg-gray-50'
                    }`}>
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${
                            isActive('/AllProducts') ? 'bg-white/30' : ''
                        }`}>
                            <MdProductionQuantityLimits />
                        </div>
                        <span className="text-sm font-medium">Products</span>
                    </div>
                </Link>

                {/* Orders */}
                <Link href="/OrdersList" onClick={handleLinkClick}>
                    <div className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition ${
                        isActive('/OrdersList')
                            ? 'bg-linear-to-r from-purple-500 to-purple-600 text-white'
                            : 'text-gray-500 hover:bg-gray-50'
                    }`}>
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${
                            isActive('/OrdersList') ? 'bg-white/30' : ''
                        }`}>
                            <CiBoxes />
                        </div>
                        <span className="text-sm font-medium">Orders</span>
                    </div>
                </Link>

                {/* Payments */}
                <Link href="/Payments" onClick={handleLinkClick}>
                    <div className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition ${
                        isActive('/Payments')
                            ? 'bg-linear-to-r from-purple-500 to-purple-600 text-white'
                            : 'text-gray-500 hover:bg-gray-50'
                    }`}>
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${
                            isActive('/Payments') ? 'bg-white/30' : ''
                        }`}>
                            <RiSecurePaymentLine />
                        </div>
                        <span className="text-sm font-medium">Payments</span>
                    </div>
                </Link>

                {/* Transactions */}
                <Link href="/TransationsList" onClick={handleLinkClick}>
                    <div className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition ${
                        isActive('/TransationsList')
                            ? 'bg-linear-to-r from-purple-500 to-purple-600 text-white'
                            : 'text-gray-500 hover:bg-gray-50'
                    }`}>
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${
                            isActive('/TransationsList') ? 'bg-white/30' : ''
                        }`}>
                            <GrTransaction />
                        </div>
                        <span className="text-sm font-medium">Transactions</span>
                    </div>
                </Link>

                {/* Clients */}
                <Link href="/Clints" onClick={handleLinkClick}>
                    <div className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition ${
                        isActive('/Clints')
                            ? 'bg-linear-to-r from-purple-500 to-purple-600 text-white'
                            : 'text-gray-500 hover:bg-gray-50'
                    }`}>
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${
                            isActive('/Clints') ? 'bg-white/30' : ''
                        }`}>
                            <FaUserFriends />
                        </div>
                        <span className="text-sm font-medium">Clients</span>
                    </div>
                </Link>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Categories Section */}
            <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                    {/* Laptops */}
                    <div className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
                        <span className="text-sm">Laptops</span>
                        <span className="bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">8</span>
                    </div>

                    {/* Mobile phones */}
                    <div className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
                        <span className="text-sm">Mobile phones</span>
                        <span className="bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">6</span>
                    </div>

                    {/* Desktops */}
                    <div className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
                        <span className="text-sm">Desktops</span>
                    </div>

                    {/* Accessories */}
                    <div className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
                        <span className="text-sm">Accessories</span>
                        <span className="bg-pink-400 text-white text-xs font-semibold px-2 py-1 rounded-full">5</span>
                    </div>

                    {/* Portable storage */}
                    <div className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
                        <span className="text-sm">Portable storage</span>
                        <span className="bg-cyan-400 text-white text-xs font-semibold px-2 py-1 rounded-full">9</span>
                    </div>

                    {/* Networking */}
                    <div className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
                        <span className="text-sm">Networking</span>
                    </div>
                </div>

                {/* Add category */}
                <div className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer mt-4 pt-4 border-t border-gray-200">
                    <div className="w-5 h-5">
                        {/* Plus Icon Placeholder */}
                    </div>
                    <span className="text-sm font-medium">Add category</span>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Top Sellers Section */}
            <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Top Sellers</h3>
                <div className="flex gap-2">
                    {/* Seller Avatars - Placeholder for photos */}
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                        {/* Avatar 1 */}
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                        {/* Avatar 2 */}
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                        {/* Avatar 3 */}
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                        {/* Avatar 4 */}
                    </div>
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white cursor-pointer">
                        {/* More Icon Placeholder */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
