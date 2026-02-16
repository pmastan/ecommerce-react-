import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <div className="card-content">
        <h3 className="title">{product.title}</h3>

        <p className="category">{product.category}</p>

        <p className="description">
          {product.description}
        </p>

        <div className="rating">
          ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
        </div>

        <h2 className="price">${product.price}</h2>

        <div className="button-group">
  <button onClick={() => addToCart(product)}>
    Add to Cart
  </button>

  <button >
    Buy Now
  </button>
</div>
      </div>
    </div>
  );
};

export default ProductCard;