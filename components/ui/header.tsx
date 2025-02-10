"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Branding */}
        <Link
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Logo />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ADPI Pharmaceuticals
          </span> */}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            aria-hidden="true"
          >
            <path
              d="M1 1h15M1 7h15M1 13h15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between font-medium w-full md:flex md:w-auto`}
          id="mega-menu-full"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                aria-current="page"
              >
                About us
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Products
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Infrastructure
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Product 1</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Product 2</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Segment customers based on data.
                  </span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Product 3</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Automate and personalize outreach.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Product 4</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Automate and personalize outreach.
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}



{isDropdownOpen2 && (
        <div className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Overview</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-Nani tools that you're already using.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Board of Directors</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Segment customers based on Nani.
                  </span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">MD's Message</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Automate and personalize Nani.
                  </span>
                </Link>
              </li><li>
                <Link
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Social Responsibility</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Automate and personalize Nani.
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
