import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart State
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to parse cartItems from localStorage:", error);
      return [];
    }
  });

  // Wishlist State
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlistItems");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Failed to parse wishlistItems from localStorage:", error);
      return [];
    }
  });

  // Persist Cart
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Persist Wishlist
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Cart Functions
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      toast.success("Added to cart!", { toastId: `add-${product.id}` });
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart.");
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared.");
  };

  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Wishlist Functions
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        toast.info("Item already in wishlist!");
        return prev;
      }
      toast.success("Added to wishlist!", { toastId: `wish-${product.id}` });
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      toast.info("Item removed from wishlist.");
      return updated;
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    toast.info("Wishlist cleared.");
  };

  // Move to Cart from Wishlist
  const moveToCartFromWishlist = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
    toast.success("Moved to cart!", { toastId: `move-${product.id}` });
  };

  // Totals
  const totalCartItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalWishlistItems = wishlistItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
        totalCartItems,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        totalWishlistItems,
        moveToCartFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};