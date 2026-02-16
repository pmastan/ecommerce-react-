import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products } = useContext(StoreContext);

  return (
    <div className="grid">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h2>No Products Available</h2>
      )}
    </div>
  );
};

export default Home;