
import React from "react";


import Header from "./partials/Header";
import ShoppingCart from "./partials/ShoppingCart";

const Cart = () => {

  return (
    <div id="cart-page">
      <Header />
      <main>
        <ShoppingCart />
      </main>
    </div>
  );
};
export default Cart;
