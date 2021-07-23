import React, { Component } from "react";
import ProductCard from "./productcard";

class ProductDisplay extends Component {
  render() {
    const { data, onAdd, onRemove, disableAdd, disableRemove } = this.props;
    return (
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((product) => (
            <div className="col mb-5" key={product.id}>
              <ProductCard
                product={product}
                onAdd={onAdd}
                onRemove={onRemove}
                disableAdd={disableAdd}
                disableRemove={disableRemove}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductDisplay;
