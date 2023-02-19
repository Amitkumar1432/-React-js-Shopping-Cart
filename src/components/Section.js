import React, { Component } from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Checkout from "./section/Checkout";
import SearchBar from "./section/SearchBar";
import Rating from "./section/Rating";
// import Footer from "./section/Footer";
// import ScrollArrow from "./section/ScrollArrow";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/payment" component={Payment} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/SearchBar" Component={SearchBar} exact />
        <Route path="/Rating" Component={Rating} exact />
        {/* <Route path="/Footer" Component={Footer} exact /> */}
        {/* <Route path="/ScrollArrow" component={ScrollArrow} exact /> */}
      </section>
    );
  }
}

export default Section;
