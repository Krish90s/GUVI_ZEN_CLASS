import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    return (
      <div className="card h-100">
        {this.props.product.badge}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{this.props.product.title}</h5>
            {this.props.product.fixedprice}
            {this.props.product.rating}
            <span className="text-muted text-decoration-line-through">
              {this.props.product.originalprice}
            </span>
            {this.props.product.discountprice}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {this.props.product.viewoption === true ? (
              <button className="btn btn-outline-dark my-1">
                View options
              </button>
            ) : null}
            {this.props.product.additem === true ? (
              <button
                onClick={() => this.props.onAdd(this.props.product)}
                className="btn btn-outline-dark my-1"
                style={{ width: "10rem" }}
                disabled={this.props.product.value === 1 ? "disabled" : ""}
              >
                Add to cart
              </button>
            ) : null}
            {this.props.product.removeitem === true ? (
              <button
                onClick={() => this.props.onRemove(this.props.product)}
                className="btn btn-outline-dark my-1"
                style={{ width: "10rem" }}
                disabled={this.props.product.value === 0 ? "disabled" : ""}
              >
                Remove item
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
