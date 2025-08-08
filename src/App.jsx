import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load components
const Home = lazy(() => import("./Pages/Home"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const WishlistPage = lazy(() => import("./Pages/WishlistPage"));

// Circular Loader Component
const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={2000} />
          </Suspense>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
