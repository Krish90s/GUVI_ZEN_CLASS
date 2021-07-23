import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="container bg-light my-4">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row my-2">
            <div className="col-4">{item.name}</div>
            <div className="col-4">
              <button
                onClick={() => onRemove(item)}
                className="remove btn btn-warning btn-sm fw-bold mx-2"
              >
                -
              </button>
              <button
                onClick={() => onAdd(item)}
                className="add btn btn-warning btn-sm fw-bold"
              >
                +
              </button>
            </div>

            <div className="col-4 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        <hr></hr>
        <div className="row">
          <div className="col-2">Items Price</div>
          <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
        </div>
        <div className="row">
          <div className="col-2">Tax Price</div>
          <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
        </div>
        <div className="row">
          <div className="col-2">Shipping Price</div>
          <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
        </div>

        <div className="row">
          <div className="col-2">
            <strong>Total Price</strong>
          </div>
          <div className="col-1 text-right">
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
        </div>
        <hr />
        <div className="row">
          <button
            className="btn btn-primary"
            onClick={() => alert("Implement Checkout!")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
