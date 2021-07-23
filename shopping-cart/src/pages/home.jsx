import React, { Component } from "react";
import Header from "../components/header";
import NavBar from "../components/navbar";
import ProductDisplay from "../components/productdisplay";
import Footer from "./../components/Footer";
import SaleBadge from "../commons/salebadge";
import StarRating from "../commons/starrating";

class Home extends Component {
  state = {
    data: [
      {
        id: 1,
        badge: null,
        title: "Fancy Product",
        fixedprice: "$40.00 - $80.00",
        rating: null,
        originalprice: null,
        discountprice: null,
        viewoption: true,
        additem: false,
        removeitem: false,
        value: null,
      },
      {
        id: 2,
        badge: <SaleBadge />,
        title: "Special Item",
        fixedprice: null,
        rating: <StarRating />,
        originalprice: "$20.00",
        discountprice: "$18.00",
        viewoption: false,
        additem: true,
        removeitem: true,
        value: 0,
      },
      {
        id: 3,
        badge: <SaleBadge />,
        title: "Sale Item",
        fixedprice: null,
        rating: null,
        originalprice: "$50.00",
        discountprice: "$25.00",
        viewoption: false,
        additem: true,
        removeitem: true,
        value: 0,
      },
      {
        id: 4,
        badge: null,
        title: "Popular Item",
        fixedprice: "$40.00",
        rating: <StarRating />,
        originalprice: null,
        discountprice: null,
        viewoption: false,
        additem: true,
        removeitem: true,
        value: 0,
      },
      {
        id: 5,
        badge: <SaleBadge />,
        title: "Sale Item",
        fixedprice: null,
        rating: null,
        originalprice: "$50.00",
        discountprice: "$25.00",
        viewoption: false,
        additem: true,
        removeitem: true,
        value: 0,
      },
      {
        id: 6,
        badge: null,
        title: "Fancy Product",
        fixedprice: "$120.00-$280.00",
        rating: null,
        originalprice: null,
        discountprice: null,
        viewoption: true,
        additem: false,
        removeitem: false,
        value: null,
      },
      {
        id: 7,
        badge: <SaleBadge />,
        title: "Special Item",
        fixedprice: null,
        rating: <StarRating />,
        originalprice: "$20.00",
        discountprice: "$18.00",
        viewoption: false,
        additem: true,
        removeitem: true,
        value: 0,
      },
      {
        id: 8,
        badge: null,
        title: "Popular Item",
        fixedprice: "$40.00",
        rating: <StarRating />,
        originalprice: null,
        discountprice: null,
        viewoption: false,
        additem: true,
        removeitem: true,
        value: 0,
      },
    ],
  };

  handleAddToCart = (cardId) => {
    const data = [...this.state.data];
    const index = data.indexOf(cardId);
    data[index] = { ...cardId };
    data[index].value++;
    this.setState({ data });
    console.log(data);
  };
  handleRemoveFromCart = (cardId) => {
    const data = [...this.state.data];
    const index = data.indexOf(cardId);
    data[index] = { ...cardId };
    data[index].value--;
    this.setState({ data });
    console.log(data);
  };

  addButtonDisable = () => {};
  removeButtonDisable = () => {};

  render() {
    return (
      <div>
        <NavBar
          totalItems={this.state.data.filter((c) => c.value > 0).length}
        />
        <Header />
        <ProductDisplay
          data={this.state.data}
          onAdd={this.handleAddToCart}
          onRemove={this.handleRemoveFromCart}
          disableAdd={this.addButtonDisable}
          disableRemove={this.removeButtonDisable}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
