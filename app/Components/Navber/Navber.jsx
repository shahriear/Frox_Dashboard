'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../../public/photos/Logo.png';
import ProfileImage from '../../../public/photos/Avatar.png';
import { TbExternalLink } from 'react-icons/tb';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { BiSolidMessageDots } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Navber = ({ onToggleSidebar, sidebarOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <div className="bg-[var(--sidebar-bg)]  border-b border-b-gray-400  shadow-xl hidden sm:flex w-full h-16 sm:h-20 lg:h-24 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-8 md:gap-40 lg:gap-64 justify-center lg:justify-center">
          <div className="flex">
            {/* Logo */}
            <Link href={'/'}>
              <div className="Logo w-20 h-5 sm:w-24 sm:h-6 lg:w-[148px] lg:h-[39.29px] shrink-0">
                <Image src={Logo} alt="Logo" className="w-full h-full" />
              </div>
            </Link>

            {/* button or trigger the side button */}
            <button
              onClick={onToggleSidebar}
              className={`bg-whit md:px-2 md:text-2xl border border-gray-100 rounded-full shadow-[0px_0px_1px_2px_rgba(0,_0,_0,_0.1)] hover:bg-gray-0 transition-transform duration-300 ${
                sidebarOpen ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Search Bar - Hidden on small tablets, visible on larger */}
          <div className="hidden md:block w-32 sm:w-40 lg:w-[360px] h-8 sm:h-10 lg:h-12 shrink-0">
            <input
              className="w-full h-full border border-gray-500 shadow-2xs  pl-4 sm:pl-8 lg:pl-10 rounded-2xl text-[16px] "
              placeholder="Search"
              type="search"
            />
          </div>

          {/* Browse Section - Hidden on small screens */}
          <div className="hidden  bg-whit lg:flex items-center gap-2 lg:gap-5 shrink-0">
            <TbExternalLink className="text-sm lg:text-base" />
            <p className="text-xs lg:text-base">Browse</p>
            <IoIosArrowDown className="text-xs lg:text-base" />
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
            <Image
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden w-full h-16 flex items-center justify-between px-3 bg-[var(--sidebar-bg)] dark:bg-[var(--sidebar-bg)] shadow-md transition-colors duration-300">
        <div className="flex items-center gap-2 min-w-0">
          {/* Logo - Clickable */}
          <Link href="/" className="flex-shrink-0">
            <div className="Logo w-14 h-3.5 sm:w-16 sm:h-4">
              <Image
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Sidebar toggle button */}
          <button
            onClick={onToggleSidebar}
            className={`bg-white dark:bg-gray-700 text-xs sm:text-sm px-1.5 py-1.5 rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 flex-shrink-0 ${
              sidebarOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <IoIosArrowForward className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Search Bar for Mobile - Responsive */}
        <div className="flex-1 mx-2 sm:mx-3 h-8 min-w-0">
          <input
            className="w-full h-full shadow-sm bg-white dark:bg-gray-600 dark:text-white pl-3 sm:pl-4 rounded-lg text-xs sm:text-sm border border-gray-300 dark:border-gray-500 transition-colors duration-300"
            placeholder="Search"
            type="search"
          />
        </div>

        {/* Mobile Menu Icons and Toggle */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="message cursor-pointer text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <BiSolidMessageDots />
          </div>
          <div className="message cursor-pointer text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <IoNotifications />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-base sm:text-lg p-1 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-white dark:bg-gray-800 shadow-lg border-t-2 border-blue-500 z-50 animate-fadeIn">
            <div className="flex flex-col p-3 sm:p-4 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-300 dark:border-gray-600">
                <TbExternalLink className="text-sm text-gray-700 dark:text-gray-300" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Browse
                </p>
                <IoIosArrowDown className="text-xs text-gray-700 dark:text-gray-300" />
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-300">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={ProfileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Profile
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navber;
