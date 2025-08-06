import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter submission logic
    console.log("Email:", email, "Subscribed:", subscribe);
    setEmail("");
    setSubscribe(false);
  };

  return (
    <footer className="w-full bg-[#1a1a1a] text-white pt-12">
      <div className="mx-auto max-w-[1200px] py-4 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f7cd3a]">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-base font-medium">
                  <strong>Walk In Store:</strong> GAPA Naija (First Floor)
                  Sunset Plaza, Ademola Adetokunbo Crescent, Wuse II, F.C.T -
                  Abuja, Nigeria
                </p>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+2347088885268"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  +234 708 888 5268
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:sales@gapaautoparts.com"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  sales@gapaautoparts.com
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f7cd3a]">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f7cd3a]">
              My Account
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/account"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  My Cart
                </a>
              </li>
              <li>
                <a
                  href="/wishlist"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  href="/order-history"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Order History
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f7cd3a]">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/categories/engine-oil"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Engine Oil
                </a>
              </li>
              <li>
                <a
                  href="/categories/car-parts"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Car Parts
                </a>
              </li>
              <li>
                <a
                  href="/categories/car-care"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Car Care
                </a>
              </li>
              <li>
                <a
                  href="/categories/car-accessories"
                  className="text-base font-medium hover:text-[#f7cd3a]"
                >
                  Car Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f7cd3a]">
              Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-black bg-gray-100 border-none rounded-md focus:outline-none focus:ring-1 focus:ring-[#492F92]"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                  className="h-4 w-4 text-[#492F92] focus:ring-[#492F92]"
                />
                <label className="text-base font-medium">
                  Yes, I want to receive email newsletters.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#492F92] text-white px-4 py-2 rounded-md hover:bg-[#492F92]/80"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white font-medium py-4">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <p className="text-base text-black">
            GAPA NAIJA &copy; {new Date().getFullYear()} All Rights Reserved.
            Designed by <span className="text-[#492F92]">Silexsecure Lab</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
