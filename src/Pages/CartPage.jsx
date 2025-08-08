import { useCart } from "../context/useCart";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Trash2, Plus, Minus } from "lucide-react";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.priceGBP * 2000 * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
            <a
              href="/"
              className="mt-4 inline-block bg-[#492F92] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a2470] transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm max-h-[400px] overflow-y-auto">
              <div className="hidden sm:grid sm:grid-cols-12 gap-4 p-4 bg-gray-50 font-semibold text-gray-700 text-sm">
                <div className="col-span-2">Product</div>
                <div className="col-span-4">Description</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Quantity</div>
                <div className="col-span-2">Subtotal</div>
              </div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b border-gray-200 last:border-b-0 items-center"
                >
                  <div className="col-span-2 flex justify-center sm:justify-start">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain rounded"
                    />
                  </div>
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
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 text-red-500 hover:text-red-600 text-sm font-medium flex items-center gap-1"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                  <div className="col-span-2 text-sm font-medium text-gray-700">
                    ₦{(item.priceGBP * 2000).toLocaleString("en-NG")}
                  </div>
                  <div className="col-span-2 flex items-center justify-center sm:justify-start">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                      >
                        <Minus size={16} />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="w-12 text-center border-0 bg-transparent focus:outline-none text-sm"
                      />
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-sm font-semibold text-gray-800">
                    ₦
                    {(item.priceGBP * 2000 * item.quantity).toLocaleString(
                      "en-NG"
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Clear Cart
              </button>
              <div className="bg-white border border-gray-200 rounded-lg p-6 w-full sm:w-1/3">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Order Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>₦{totalPrice.toLocaleString("en-NG")}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-gray-800 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>₦{totalPrice.toLocaleString("en-NG")}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-[#492F92] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a2470] transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
