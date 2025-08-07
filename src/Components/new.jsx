import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  User,
  Heart,
  ShoppingCart,
  Search,
} from "lucide-react";
import { SiX } from "react-icons/si";
import logo from "../assets/logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Toggle account dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Toggle brands dropdown for mobile
  const toggleBrands = () => {
    setIsBrandsOpen((prev) => !prev);
  };

  // Toggle categories dropdown for mobile
  const toggleCategories = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  return (
    <div className="w-full text-white">
      <div className="bg-black w-full">
        <div className="mx-auto max-w-[1300px] px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook
                size={28}
                className="hover:text-gray-300 border border-gray-300 rounded p-1"
              />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <SiX
                size={28}
                className="hover:text-gray-300 border border-gray-300 rounded p-1"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram
                size={28}
                className="hover:text-gray-300 border border-gray-300 rounded p-1"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={28}
                className="hover:text-gray-300 border border-gray-300 rounded p-1"
              />
            </a>
          </div>

          {/* Center: Phone Numbers */}
          <div className="flex items-center gap-2 sm:gap-4 text-sm">
            <a
              href="tel:+2347088885268"
              className="hover:text-gray-300 text-base font-semibold"
            >
              +234 708 888 5268
            </a>
            <a
              href="tel:+2347088885242"
              className="hover:text-gray-300 text-base font-semibold"
            >
              +234 708 888 5242
            </a>
          </div>

          {/* Right: Welcome Message and My Account Dropdown */}
          <div className="relative flex items-center gap-4 md:gap-12">
            <span className="text-base font-semibold">Welcome, AdeEmma</span>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1.5 text-base font-semibold hover:text-gray-300 focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <User
                  size={20}
                  className="bg-[#f7cd3a] text-black rounded-full p-[2px]"
                />
                My Account <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-34 bg-white text-black rounded-md shadow-lg z-10">
                  <a
                    href="/"
                    className="block px-4 py-2 text-base hover:bg-[#f7cd3a]"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Account
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-base hover:bg-[#f7cd3a]"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Orders
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-base hover:bg-[#f7cd3a]"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Wishlist
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-base hover:bg-[#f7cd3a]"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f7cd3a] w-full">
        <div className="mx-auto max-w-[1200px] grid gap-4 px-4 md:px-8 py-8">
          {/* First Container: Logo, Search Box, and Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={logo} alt="Company Logo" className="w-50 h-20" />
            <div className="flex items-center w-full max-w-sm">
              <input
                type="text"
                placeholder="Search products part here..."
                className="w-full px-4 py-2 text-black bg-gray-100 border-none rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#492F92]"
              />
              <button className="bg-[#492F92] text-white px-4 py-2 rounded-r-md hover:bg-[#492F92]/80 cursor-pointer">
                <Search size={26} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <a href="/wishlist" aria-label="Wishlist">
                <Heart
                  size={28}
                  className="text-[#492F92] hover:text-gray-600"
                />
              </a>
              <a href="/cart" aria-label="Shopping Cart">
                <ShoppingCart
                  size={28}
                  className="text-[#492F92] hover:text-gray-600"
                />
              </a>
            </div>
          </div>

          {/* Second Container: All Brands and Categories Dropdowns */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
            <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto flex-wrap">
              {/* All Brands Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleBrands}
                  className="flex items-center gap-1.5 bg-gray-200 max-w-[240px] md:w-[180px] justify-between w-full rounded-sm px-4 py-3 text-base font-semibold text-black hover:text-gray-600 focus:outline-none md:group-hover:text-gray-600"
                  aria-expanded={isBrandsOpen}
                  aria-haspopup="true"
                >
                  All Brands <ChevronDown size={22} />
                </button>
                <div
                  className={`absolute left-0 top-full w-[180px] bg-white text-black rounded-md shadow-lg z-10 transition-opacity duration-200 md:group-hover:block md:opacity-0 md:group-hover:opacity-100 md:transition-delay-100`}
                >
                  <a
                    href="/brands/nike"
                    className="block px-4 py-2 text-base hover:bg-[#492F92]"
                    onClick={() => setIsBrandsOpen(false)}
                  >
                    Nike
                  </a>
                  <a
                    href="/brands/adidas"
                    className="block px-4 py-2 text-base hover:bg-[#492F92]"
                    onClick={() => setIsBrandsOpen(false)}
                  >
                    Adidas
                  </a>
                  <a
                    href="/brands/puma"
                    className="block px-4 py-2 text-base hover:bg-[#492F92]"
                    onClick={() => setIsBrandsOpen(false)}
                  >
                    Puma
                  </a>
                </div>
              </div>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleCategories}
                  className="flex items-center gap-1.5 bg-gray-200 max-w-[240px] md:w-[180px] justify-between w-full rounded-sm px-4 py-3 text-base font-semibold text-black hover:text-gray-600 focus:outline-none md:group-hover:text-gray-600"
                  aria-expanded={isCategoriesOpen}
                  aria-haspopup="true"
                >
                  Categories <ChevronDown size={22} />
                </button>
                <div
                  className={`absolute left-0 top-full w-[180px] bg-white text-black rounded-md shadow-lg z-10 transition-opacity duration-200 md:group-hover:block md:opacity-0 md:group-hover:opacity-100 md:transition-delay-100`}
                >
                  <a
                    href="/categories/electronics"
                    className="block px-4 py-2 text-base hover:bg-[#492F92]"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    Engine Repear
                  </a>
                  <a
                    href="/categories/clothing"
                    className="block px-4 py-2 text-base hover:bg-[#492F92]"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    Oil Change
                  </a>
                  <a
                    href="/categories/accessories"
                    className="block px-4 py-2 text-base hover:bg-[#492F92]"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    Tire Service
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
              <div className="bg-[#492F92] text-white rounded-md px-4 py-2 font-semibold text-lg">
                ENGINE OIL
              </div>
              <div className="bg-[#492F92] text-white rounded-md px-4 py-2 font-semibold text-lg">
                CAR PARTS
              </div>
              <div className="bg-[#492F92] text-white rounded-md px-4 py-2 font-semibold text-lg">
                CAR CARE
              </div>
              <div className="bg-[#492F92] text-white rounded-md px-4 py-2 font-semibold text-lg">
                CAR ACCESSORIES
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
