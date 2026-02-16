import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./Cart.css";
const Cart = () => {
  const { cart, removeFromCart, checkout } = useContext(StoreContext);

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length === 0 && (
        <p className="empty-cart">Your cart is empty</p>
      )}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-details">
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>

          <button 
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={checkout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;