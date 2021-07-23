import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="container">
      <h2>Products</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
