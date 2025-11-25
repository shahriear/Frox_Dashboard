'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../public/photos/Logo.png"
import ProfileImage from "../../../public/photos/Avatar.png"
import { TbExternalLink } from 'react-icons/tb'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { BiSolidMessageDots } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const Navber = ({ onToggleSidebar, sidebarOpen }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
            {/* Desktop & Tablet Navigation */}
            <div className="hidden sm:flex w-full h-16 sm:h-20 lg:h-24 items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 sm:gap-8 md:gap-40 lg:gap-64 justify-center lg:justify-center">
        
                    <div className="flex">
                        {/* Logo */}
                    <div className="Logo w-20 h-5 sm:w-24 sm:h-6 lg:w-[148px] lg:h-[39.29px] shrink-0">
                        <Image src={Logo} alt='Logo' className='w-full h-full'/>
                    </div>

                    {/* button or trigger the side button */}
                    <button 
                        onClick={onToggleSidebar}
                        className={`bg-white md:px-2 md:text-2xl rounded-full shadow-[0px_0px_1px_2px_rgba(0,_0,_0,_0.1)] hover:bg-gray-50 transition-transform duration-300 ${
                            sidebarOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                    >
                        <IoIosArrowForward />
                    </button>
                    </div>
        
                    {/* Search Bar - Hidden on small tablets, visible on larger */}
                    <div className="hidden md:block w-32 sm:w-40 lg:w-[360px] h-8 sm:h-10 lg:h-12 shrink-0">
                        <input 
                            className='w-full h-full shadow-2xs bg-[#F5F5FA] pl-4 sm:pl-8 lg:pl-10 rounded-2xl text-xs sm:text-sm lg:text-base' 
                            placeholder='Search' 
                            type="search" 
                        />
                    </div>
        
                    {/* Browse Section - Hidden on small screens */}
                    <div className="hidden lg:flex items-center gap-2 lg:gap-5 shrink-0">
                        <TbExternalLink className="text-sm lg:text-base"/>
                        <p className="text-xs lg:text-base">Browse</p>
                        <IoIosArrowDown className="text-xs lg:text-base"/>
                    </div>
        
                    {/* Messages & Notifications */}
                    <div className="message-notification flex items-center gap-3 sm:gap-5 lg:gap-10 text-base sm:text-lg lg:text-2xl shrink-0">
                        <div className="message cursor-pointer hover:text-blue-500 transition">
                            <BiSolidMessageDots />
                        </div>
                        <div className="message cursor-pointer hover:text-blue-500 transition">
                            <IoNotifications />
                        </div>
                    </div>
        
                    {/* Profile Image */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0 rounded-full overflow-hidden">
                        <Image src={ProfileImage} alt='Profile' className='w-full h-full object-cover'/>
                    </div>
        
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden w-full h-16 flex items-center justify-between px-4 bg-white shadow-sm">

                <div className="flex items-center">
                    {/* Logo */}
                <div className="Logo w-16 h-4 shrink-0">
                    <Image src={Logo} alt='Logo' className='w-full h-full'/>
                </div>
                
                {/* button or trigger the side button */}
                <button 
                    onClick={onToggleSidebar}
                    className={`bg-white text-sm px-1 py-1 rounded-full shadow-[0px_0px_1px_2px_rgba(0,_0,_0,_0.1)] hover:bg-gray-50 transition-transform duration-300 ${
                        sidebarOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                    <IoIosArrowForward />
                </button>
                </div>
                

                {/* Search Bar for Mobile */}
                <div className="flex-1 mx-3 h-8">
                    <input 
                        className='w-full h-full shadow-2xs bg-[#F5F5FA] pl-3 rounded-lg text-xs' 
                        placeholder='Search' 
                        type="search" 
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-2">
                    <div className="message cursor-pointer text-lg">
                        <BiSolidMessageDots />
                    </div>
                    <div className="message cursor-pointer text-lg">
                        <IoNotifications />
                    </div>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-xl p-1"
                    >
                        {isMobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 right-0 left-0 bg-white shadow-lg border-t-2 z-50">
                        <div className="flex flex-col p-4 gap-4">
                            <div className="flex items-center gap-2 pb-3 border-b">
                                <TbExternalLink className="text-sm"/>
                                <p className="text-sm">Browse</p>
                                <IoIosArrowDown className="text-xs"/>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                                    <Image src={ProfileImage} alt='Profile' className='w-full h-full object-cover'/>
                                </div>
                                <p className="text-sm">Profile</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navber
