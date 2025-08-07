import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Wrench,
  Car,
  Info,
  CheckCircle,
} from "lucide-react";

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isLoved, setIsLoved] = useState(false);
  const priceNGN = product.priceGBP * 2000;

  // Mock product data for demonstration
  // const mockProduct = product || {
  //   image:
  //     "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=300&fit=crop",
  //   title: "Premium Engine Oil Filter - High Performance",
  //   articleNo: "EOL-2024-HP",
  //   rating: 8.5,
  //   priceGBP: 25,
  //   vehicleType: "Universal",
  //   quantityUnit: "1 Unit",
  //   condition: "New",
  //   brand: "AutoPro",
  //   compatibility: "Most Vehicles",
  // };

  return (
    <div className="w-full p-2 sm:p-3">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        {/* Header with Brand and Wishlist */}
        <div className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="flex items-center space-x-2">
            <Car className="w-4 h-4 text-[#f7cd3a] sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold text-[#f7cd3a]">
              {product.brand || "AutoPro"}
            </span>
          </div>
          <button
            className="text-gray-300 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1 transition-colors"
            onClick={() => setIsLoved(!isLoved)}
            aria-label={isLoved ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isLoved ? (
              <Heart fill="currentColor" className="w-5 h-5 text-red-400" />
            ) : (
              <Heart className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Product Image Section */}
        <div className="relative p-4 sm:p-6 bg-gray-50 flex justify-center items-center h-[150px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 bg-[#492F92] text-white px-1 sm:px-2 py-1 rounded-full text-xs sm:text-sm font-semibold">
            {product.condition}
          </div>
        </div>

        {/* Product Information */}
        <div className="p-3 sm:p-4 space-y-3">
          {/* Product Title */}
          <h3 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>

          {/* Article Number */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <span className="font-medium">Part #:</span>
            <span className="bg-gray-100 px-1 sm:px-2 py-1 rounded font-mono text-xs sm:text-sm">
              {product.articleNo}
            </span>
          </div>

          {/* Rating and Compatibility */}
          <div className="flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(product.rating / 2)
                        ? "text-[#f7cd3a] text-lg sm:text-xl"
                        : "text-gray-300 text-lg sm:text-xl"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {product.rating}/10
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs sm:text-sm text-green-600">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>In Stock</span>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-2 sm:p-3 rounded-lg border border-green-200">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-0">
              <div>
                <span className="text-xs sm:text-sm text-gray-600">Price:</span>
                <div className="text-xl sm:text-2xl font-bold text-green-700">
                  ₦{priceNGN.toLocaleString("en-NG")}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs sm:text-sm text-gray-500">Per Unit</div>
                <div className="text-xs sm:text-sm text-green-600 font-semibold">
                  Free Shipping
                </div>
              </div>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-2 sm:space-x-3 pt-2 flex-col sm:flex-row">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Qty:
              </label>
              <div className="flex items-center border border-gray-300 rounded-md w-full sm:w-auto">
                <button
                  className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-gray-600 text-xs sm:text-sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-12 sm:w-16 px-1 py-1 text-center border-0 focus:outline-none focus:ring-0 text-xs sm:text-sm"
                />
                <button
                  className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-gray-600 text-xs sm:text-sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button className="flex-1 sm:flex-initial bg-[#492F92] hover:bg-[#3a2470] text-white px-3 sm:px-4 py-2 rounded-md flex items-center justify-center space-x-2 font-semibold transition-colors duration-200 text-xs sm:text-sm">
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Details Toggle */}
          <button
            className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-[#492F92] py-2 border-t border-gray-200 transition-colors text-xs sm:text-sm"
            onClick={() => setShowDetails(!showDetails)}
            aria-expanded={showDetails}
          >
            <Info className="w-4 h-4" />
            <span className="font-medium">
              {showDetails ? "Hide" : "Show"} Technical Details
            </span>
            <span className="text-xs">{showDetails ? "▲" : "▼"}</span>
          </button>

          {/* Technical Details */}
          {showDetails && (
            <div className="mt-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-[#492F92] sm:w-5 sm:h-5" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Technical Specifications
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1 sm:gap-2 text-sm sm:text-base">
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="font-medium text-gray-600">
                    Vehicle Type:
                  </span>
                  <span className="text-gray-800">{product.vehicleType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="font-medium text-gray-600">
                    Quantity Unit:
                  </span>
                  <span className="text-gray-800">{product.quantityUnit}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Condition:</span>
                  <span className="text-gray-800">{product.condition}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-gray-600">
                    Compatibility:
                  </span>
                  <span className="text-gray-800">{product.compatibility}</span>
                </div>
              </div>

              <div className="mt-2 p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded text-xs sm:text-sm text-blue-700">
                <strong>Installation Note:</strong> Professional installation
                recommended. Contact our service center for expert fitting.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
