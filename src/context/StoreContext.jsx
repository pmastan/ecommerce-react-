import React, { createContext, useState, useEffect } from "react";
import { initialProducts } from "../data/products";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

  // ✅ FIXED PRODUCTS LOADING
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");

    if (saved) {
      const parsed = JSON.parse(saved);

      // If localStorage has products and not empty → use it
      if (parsed && parsed.length > 0) {
        return parsed;
      }
    }

    // Otherwise use initialProducts
    return initialProducts;
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [products, cart, orders]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const checkout = () => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      date: new Date().toLocaleString()
    };

    setOrders([...orders, newOrder]);
    setCart([]);
  };

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

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
        deleteProduct
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};