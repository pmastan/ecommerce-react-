import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Orders = () => {
  const { orders } = useContext(StoreContext);

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + Number(item.price), 0);
  };

  if (orders.length === 0) {
    return <h2>No Orders Found</h2>;
  }

  return (
    <div>
      <h2>Order History</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h3>Order ID: {order.id}</h3>
          <p><strong>Date:</strong> {order.date}</p>

          <div className="order-items">
            {order.items.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <h4>Total: ${calculateTotal(order.items).toFixed(2)}</h4>
        </div>
      ))}
    </div>
  );
};

export default Orders;