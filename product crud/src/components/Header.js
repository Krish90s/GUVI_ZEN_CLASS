import React from "react";

export default function Header(props) {
  return (
    <React.Fragment>
      <nav className="navbar fixed-top shadow navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Product Validation</a>
          <a className="text-dark text-decoration-none fw-bold" href="#/cart">
            Cart{" "}
            {props.countCartItems ? (
              <span class="badge bg-warning text-dark">
                {props.countCartItems}
              </span>
            ) : (
              ""
            )}
          </a>{" "}
        </div>
      </nav>
    </React.Fragment>
  );
}
