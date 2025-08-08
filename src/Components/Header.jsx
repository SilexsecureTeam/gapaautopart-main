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
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { SiX } from "react-icons/si";
import logo from "../assets/logo.png";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { cartItems, totalWishlistItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleBrands = () => setIsBrandsOpen((prev) => !prev);
  const toggleCategories = () => setIsCategoriesOpen((prev) => !prev);

  return (
    <div className="w-full text-white">
      {/* Top Bar - Contact & Account */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
        <div className="mx-auto max-w-[1300px] px-4 md:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#f7cd3a]" />
                <div className="flex gap-2 sm:gap-4">
                  <a
                    href="tel:+2347088885268"
                    className="hover:text-[#f7cd3a] transition-colors font-medium text-base"
                  >
                    +234 708 888 5268
                  </a>
                  <a
                    href="tel:+2347088885242"
                    className="hover:text-[#f7cd3a] transition-colors font-medium text-base"
                  >
                    +234 708 888 5242
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-gray-300">
                <Clock size={16} className="text-[#f7cd3a]" />
                <span>Mon-Sat: 8AM-6PM</span>
              </div>
            </div>

            {/* Center: Social Media */}
            <div className="flex items-center gap-3">
              <span className="text-gray-300 text-xs mr-2">Follow Us:</span>
              {[
                {
                  SocialIcon: Facebook,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                { SocialIcon: SiX, href: "https://x.com", label: "X" },
                {
                  SocialIcon: Instagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  SocialIcon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                }, //eslint-disable-next-line
              ].map(({ SocialIcon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-gray-700 hover:bg-[#492F92] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <SocialIcon size={16} />
                </a>
              ))}
            </div>

            {/* Right: Account */}
            <div className="relative flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#f7cd3a]" />
                <span className="text-gray-300">Abuja, Nigeria</span>
              </div>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-[#492F92] px-3 py-2 rounded-md transition-all duration-200 font-medium"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <div className="w-6 h-6 bg-[#f7cd3a] rounded-full flex items-center justify-center">
                    <User size={14} className="text-gray-800" />
                  </div>
                  <span>AdeEmma</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 z-50">
                    {["My Account", "Orders", "Wishlist", "Logout"].map(
                      (item, index) => (
                        <Link
                          key={item}
                          to={item === "Wishlist" ? "/wishlist" : "/"}
                          className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                            index === 0
                              ? "rounded-t-lg"
                              : index === 3
                              ? "rounded-b-lg border-t border-gray-100"
                              : ""
                          }`}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Logo, Search, Cart */}
      <div className="bg-[#f7cd3a] shadow-md">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="w-50 h-20 sm:w-60 sm:h-24 object-contain"
              />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl w-full">
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Search products part here..."
                  className="w-full px-4 py-2 sm:px-5 sm:py-3 text-black bg-gray-50 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#492F92] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
                <button className="bg-gradient-to-r from-[#492F92] to-[#3a2470] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg hover:from-[#3a2470] hover:to-[#492F92] transition-all duration-200 shadow-md">
                  <Search size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Cart & Wishlist */}
            <div className="flex items-center gap-4">
              <Link to="/wishlist" className="relative group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-all duration-200">
                  <Heart
                    size={20}
                    className="text-gray-600 group-hover:text-red-500 transition-colors"
                  />
                  {totalWishlistItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalWishlistItems}
                    </span>
                  )}
                </div>
              </Link>
              <Link to="/cart" className="relative group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 group-hover:text-red-500 rounded-lg flex items-center justify-center transition-all duration-200">
                  <ShoppingCart
                    size={20}
                    className="text-gray-600  transition-colors"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#f7cd3a]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-3">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Category Dropdowns */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* All Brands */}
              <div className="relative group">
                <button
                  onClick={toggleBrands}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 px-3 sm:px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-[#492F92] transition-all duration-200 min-w-[120px] sm:min-w-[140px] justify-between text-sm sm:text-base"
                >
                  <span>All Brands</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isBrandsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-40 ${
                    isBrandsOpen ? "block" : "hidden"
                  } lg:group-hover:block`}
                >
                  {["Nike", "Adidas", "Puma", "Bosch", "Castrol"].map(
                    (brand, index) => (
                      <a
                        key={brand}
                        href={`/brands/${brand.toLowerCase()}`}
                        className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                          index === 0
                            ? "rounded-t-lg"
                            : index === 4
                            ? "rounded-b-lg"
                            : ""
                        } text-sm`}
                        onClick={() => setIsBrandsOpen(false)}
                      >
                        {brand}
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="relative group">
                <button
                  onClick={toggleCategories}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 px-3 sm:px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-[#492F92] transition-all duration-200 min-w-[120px] sm:min-w-[140px] justify-between text-sm sm:text-base"
                >
                  <span>Categories</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-40 ${
                    isCategoriesOpen ? "block" : "hidden"
                  } lg:group-hover:block`}
                >
                  {[
                    { name: "Engine Repair", icon: null },
                    { name: "Oil Change", icon: null },
                    { name: "Tire Service", icon: null },
                  ].map((item, index) => (
                    <a
                      key={item.name}
                      href={`/categories/${item.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                        index === 0
                          ? "rounded-t-lg"
                          : index === 2
                          ? "rounded-b-lg"
                          : ""
                      } text-sm`}
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Access Categories */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {[
                { name: "ENGINE OIL", icon: null },
                { name: "CAR PARTS", icon: null },
                { name: "CAR CARE", icon: null },
                { name: "CAR ACCESSORIES", icon: null },
              ].map(({ name }) => (
                <button
                  key={name}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#492F92] to-[#3a2470] hover:from-[#3a2470] hover:to-[#492F92] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
