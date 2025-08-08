import React from "react";
import { useCart } from "../context/useCart";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Trash2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist, moveToCartFromWishlist } =
    useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Wishlist</h2>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Your wishlist is empty.</p>
            <Link
              to="/"
              className="mt-4 inline-block bg-[#492F92] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a2470] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Wishlist Items */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="hidden sm:grid sm:grid-cols-12 gap-4 p-4 bg-gray-50 font-semibold text-gray-700 text-sm">
                <div className="col-span-2">Product</div>
                <div className="col-span-4">Description</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-4">Actions</div>
              </div>
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b border-gray-200 last:border-b-0 items-center"
                >
                  {/* Product Image */}
                  <div className="col-span-2 flex justify-center sm:justify-start">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain rounded"
                    />
                  </div>

                  {/* Product Description */}
                  <div className="col-span-4">
                    <h4 className="text-base font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Part #: {item.articleNo}
                    </p>
                    <p className="text-sm text-gray-600">
                      Condition: {item.condition}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-sm font-medium text-gray-700">
                    ₦{(item.priceGBP * 2000).toLocaleString("en-NG")}
                  </div>

                  {/* Actions */}
                  <div className="col-span-4 flex flex-col sm:flex-row items-center gap-2">
                    <button
                      onClick={() => moveToCartFromWishlist(item, 1)}
                      className="flex items-center gap-2 bg-[#492F92] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3a2470] transition-colors text-sm"
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-medium"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Wishlist Button */}
            <div className="flex justify-between">
              <button
                onClick={clearWishlist}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Clear Wishlist
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;