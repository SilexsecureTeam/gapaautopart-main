import React, { useState } from "react";
import { ShoppingCartIcon, Heart } from "lucide-react"; // Added Heart and HeartFilled icons

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isLoved, setIsLoved] = useState(false); // State to track love/unlove
  const priceNGN = product.priceGBP * 2000; // Approximate conversion to ₦

  return (
    <div className="w-full p-2">
      <div className="border border-[#492F92] bg-white rounded-lg shadow-md p-4 transition-all duration-300">
        {/* Container for Left and Right Sections */}
        <div className="flex flex-col h-full sm:flex-row justify-between items-start">
          {/* Left Section: Image, Details Button, and Heart Icon */}
          <div className="mb-8 sm:mb-0 sm:mr-4 flex-shrink-0">
            <div className="relative mb-2">
              <button
                className="absolute top-0 left-0 text-red-400 hover:text-red-500 focus:outline-none  transition-colors"
                onClick={() => setIsLoved(!isLoved)}
              >
                {isLoved ? (
                  <Heart fill="currentColor" className="w-6 h-6" />
                ) : (
                  <Heart className="w-6 h-6" />
                )}
              </button>
            </div>
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 mb-2 object-contain"
            />
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#492F92] transition-colors"
              onClick={() => setShowDetails(!showDetails)}
              aria-expanded={showDetails}
            >
              Details {showDetails ? "▲" : "▼"}
            </button>
          </div>

          {/* Right Section: Product Info, Quantity, and Add to Cart */}
          <div className="flex-1 text-center sm:text-left">
            <div className="space-y-2">
              <h3 className="text-base h-12 font-semibold line-clamp-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">
                Article No: {product.articleNo}
              </p>
              <div className="flex justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(product.rating / 2)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="ml-1 text-sm">{product.rating}/10</span>
              </div>
              <p className="text-xl font-bold text-green-600">
                ₦{priceNGN.toLocaleString("en-NG")}
              </p>
            </div>
            <div className="flex justify-center sm:justify-start items-center space-x-2 mt-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-[#492F92] focus:border-transparent"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-[#492F92] transition-colors">
                <ShoppingCartIcon className="w-5 h-5 mr-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Details Section (Below) */}
        {showDetails && (
          <div className=" text-gray-600 mt-4 p-2 bg-gray-50 rounded transition-all duration-300">
            <p className="flex w-full justify-between text-base">
              <strong>Vehicle Type:</strong> {product.vehicleType}
            </p>
            <p className="flex w-full justify-between text-base">
              <strong>Quantity Unit:</strong> {product.quantityUnit}
            </p>
            <p className="flex w-full justify-between text-base">
              <strong>Condition:</strong> {product.condition}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
