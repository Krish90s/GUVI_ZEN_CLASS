import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col">
      <div
        className="card bg-light p-2 m-2"
        style={({ width: "18rem" }, { height: "22rem" })}
      >
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">${product.price}</p>
        </div>
        <div>
          <button
            className="btn btn-warning btn-sm fw-bold text-dark my-2 w-100"
            onClick={() => onAdd(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
