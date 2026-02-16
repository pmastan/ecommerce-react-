// src/context/StoreContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { initialProducts } from "../data/products";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // -----------------------------
  // CLEAR PREVIOUS PRODUCTS FROM LOCALSTORAGE
  // -----------------------------
  localStorage.removeItem("products"); // <- Remove old products

  // -----------------------------
  // PRODUCTS STATE (LOAD UPDATED DATA)
  // -----------------------------
  const [products, setProducts] = useState(() => {
    return initialProducts; // Always load latest initialProducts
  });

  // -----------------------------
  // CART STATE
  // -----------------------------
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // -----------------------------
  // ORDERS STATE
  // -----------------------------
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error parsing orders from localStorage:", error);
      return [];
    }
  });

  // -----------------------------
  // PERSIST DATA TO LOCALSTORAGE
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [products, cart, orders]);

  // -----------------------------
  // CART FUNCTIONS
  // -----------------------------
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkout = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cart,
      date: new Date().toLocaleString(),
    };

    setOrders([...orders, newOrder]);
    setCart([]);
  };

  // -----------------------------
  // PRODUCTS FUNCTIONS
  // -----------------------------
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    setCart(cart.filter((item) => item.id !== id)); // remove from cart if exists
  };

  // -----------------------------
  // PROVIDER
  // -----------------------------
  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        orders,
        addToCart,
        removeFromCart,
        checkout,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};