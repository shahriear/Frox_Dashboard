'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Logo from "../../../public/photos/Logo.png"
import ProfileImage from "../../../public/photos/Avatar.png"
import { TbExternalLink } from 'react-icons/tb'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { BiSolidMessageDots } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import Link from 'next/link';

const Navber = ({ onToggleSidebar, sidebarOpen }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { theme, setTheme, mounted } = useTheme()
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(theme === 'dark')
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            {/* Desktop & Tablet Navigation */}
            <div className="bg-gray-100 dark:bg-slate-800 shadow-xl hidden sm:flex w-full h-16 sm:h-20 lg:h-24 items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
                <div className="flex items-center gap-4 sm:gap-8 md:gap-40 lg:gap-64 justify-center lg:justify-center">
        
                    <div className="flex">
                        {/* Logo */}
                    <Link href={'/'}>
                    <div className="Logo w-20 h-5 sm:w-24 sm:h-6 lg:w-[148px] lg:h-[39.29px] shrink-0">
                        <Image src={Logo} alt='Logo' className='w-full h-full'/>
                    </div></Link>

                    {/* button or trigger the side button */}
                    <button 
                        onClick={onToggleSidebar}
                        className={`bg-white dark:bg-slate-700 dark:text-white md:px-2 md:text-2xl rounded-full shadow-[0px_0px_1px_2px_rgba(0,_0,_0,_0.1)] dark:shadow-[0px_0px_1px_2px_rgba(255,_255,_255,_0.1)] hover:bg-gray-50 dark:hover:bg-slate-600 transition-transform duration-300 ${
                            sidebarOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                    >
                        <IoIosArrowForward />
                    </button>
                    </div>
        
                    {/* Search Bar - Hidden on small tablets, visible on larger */}
                    <div className="hidden md:block w-32 sm:w-40 lg:w-[360px] h-8 sm:h-10 lg:h-12 shrink-0">
                        <input 
                            className='w-full h-full border border-gray-500 dark:border-slate-600 shadow-2xs bg-[#F5F5FA] dark:bg-slate-700 dark:text-white pl-4 sm:pl-8 lg:pl-10 rounded-2xl text-xs sm:text-sm lg:text-base transition-colors duration-300' 
                            placeholder='Search' 
                            type="search" 
                        />
                    </div>
        
                    {/* Browse Section - Hidden on small screens */}
                    <div className="hidden border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white lg:flex items-center gap-2 lg:gap-5 shrink-0 transition-colors duration-300">
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

                    {/* Theme Toggle Button */}
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white dark:bg-slate-700 shadow-[0px_0px_1px_2px_rgba(0,_0,_0,_0.1)] dark:shadow-[0px_0px_1px_2px_rgba(255,_255,_255,_0.1)] hover:bg-gray-50 dark:hover:bg-slate-600 text-black dark:text-yellow-400 transition-all duration-300"
                            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {isDark ? <BsSun className="text-lg" /> : <BsMoon className="text-lg" />}
                        </button>
                    )}
        
                    {/* Profile Image */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0 rounded-full overflow-hidden">
                        <Image src={ProfileImage} alt='Profile' className='w-full h-full object-cover'/>
                    </div>
        
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden w-full h-16 flex items-center justify-between px-4 bg-white dark:bg-slate-800 shadow-sm transition-colors duration-300">

                <div className="flex items-center">
                    {/* Logo */}
                <div className="Logo w-16 h-4 shrink-0">
                    <Image src={Logo} alt='Logo' className='w-full h-full'/>
                </div>
                
                {/* button or trigger the side button */}
                <button 
                    onClick={onToggleSidebar}
                    className={`bg-white dark:bg-slate-700 dark:text-white text-sm px-1 py-1 rounded-full shadow-[0px_0px_1px_2px_rgba(0,_0,_0,_0.1)] dark:shadow-[0px_0px_1px_2px_rgba(255,_255,_255,_0.1)] hover:bg-gray-50 dark:hover:bg-slate-600 transition-transform duration-300 ${
                        sidebarOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                    <IoIosArrowForward />
                </button>
                </div>
                

                {/* Search Bar for Mobile */}
                <div className="flex-1 mx-3 h-8">
                    <input 
                        className='w-full h-full shadow-2xs bg-[#F5F5FA] dark:bg-slate-700 dark:text-white pl-3 rounded-lg text-xs transition-colors duration-300' 
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
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-1 rounded-full text-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300"
                            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {isDark ? <BsSun className="text-yellow-400" /> : <BsMoon />}
                        </button>
                    )}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-xl p-1"
                    >
                        {isMobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 right-0 left-0 bg-white dark:bg-slate-800 shadow-lg border-t-2 dark:border-slate-700 z-50 transition-colors duration-300">
                        <div className="flex flex-col p-4 gap-4">
                            <div className="flex items-center gap-2 pb-3 border-b dark:border-slate-700">
                                <TbExternalLink className="text-sm"/>
                                <p className="text-sm">Browse</p>
                                <IoIosArrowDown className="text-xs"/>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-300">
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
