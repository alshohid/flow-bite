"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Tabs from "../reusableTabs/Tabs";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window?.scrollY > 300) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
  if(window !=undefined || window !=null){
      window?.addEventListener("scroll", handleScroll);
      return () => {
        window?.removeEventListener("scroll", handleScroll);
      };
  }
  }, []);

  const tabData = [
    { label: "Company", url: "/" },
    { label: "Features", url: "/features" },
    { label: "Marketplace", url: "/market-place" },
    { label: "Team", url: "/team" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <nav
      className={`bg-[#FFFFFF] border-gray-200 dark:bg-gray-900 ${
        isSticky
          ? "fixed top-0 left-0 w-full shadow-md z-50 bg-orange-300 transition duration-300 text-black"
          : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              News portal
            </span>
          </Link>
        </div>
        <div className="flex items-start md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-user"
        >
          <Tabs tabs={tabData} localStorageKey="my-tabs" />
          <ul
            className={`flex flex-col items-center font-medium p-4 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 `}
          >
            <li className="md:ml-auto">
              <Link
                href="/login"
                className="block py-2 px-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Login
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
