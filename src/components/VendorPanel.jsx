import React, { useState } from "react";
import "./VendorPanel.css";

const VendorPanel = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    if (!productName || !price) return;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: price,
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setPrice("");
  };

  return (
    <div className="vendor-container">
      <h2 className="vendor-title">Vendor Dashboard</h2>

      <form className="vendor-form" onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>

      <div className="product-list">
        {products.length === 0 ? (
          <p className="no-products">No products added yet.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h4>{product.name}</h4>
              <p>₹ {product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VendorPanel;