import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import CartItem from './CartItem';

import sendIcon from 'assets/images/send.svg';
import arrowLeft from 'assets/images/arrow-left.svg';
import cartIcon from 'assets/images/cart.svg';
import deliveryIcon from 'assets/images/delivery.svg';

import { useSelector } from 'react-redux';
import { rootState } from 'store/rootReducer';
import { productAttribute } from 'app/shared/model/product-interface';
import ConfirmBox from 'app/shared/components/partials/ComfirmBox/ConfirmBox';

const ShoppingCart = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const listCartItem: productAttribute[] = useSelector((state: rootState) => state.cart?.listItem);
  const totalPrice = listCartItem.reduce(
    (total: number, item: productAttribute) => total + (item.quantity || 1) * item.price,
    0
  );

  const onShowDialog = (id: string) => {
    setShowConfirm(true);
    setSelectedId(id);
  };

  return (
    <section className="section-shopping-cart">
      <div className="container">
        <div className="section-header row">
          <h4 className="section-title col-xl-4">Shopping Cart</h4>
          <div className="shopping-state">
            <img src={cartIcon} alt="cart" className="user-cart" />
            <div className="center-line"></div>
            <img src={deliveryIcon} alt="delivery" />
          </div>
        </div>
        <div className="shopping-product row">
          <table className="col-xl-12">
            <thead className="table-head">
              <tr className="table-row">
                <td className="table-title col-xl-4">Product</td>
                <td className="table-title text-center col-xl-2">Color</td>
                <td className="table-title text-center col-xl-1">Size</td>
                <td className="table-title text-center col-xl-1 text-align-center">Amount</td>
                <td className="table-title text-center col-xl-3">Price</td>
                <td className="table-title text-center col-xl-1"></td>
              </tr>
            </thead>
            <tbody className="shopping-product-table">
              {listCartItem?.map((item: productAttribute) =>
                CartItem({ ...item, onDialogHandler: onShowDialog })
              )}
            </tbody>
          </table>
          <form className="checkout-form row">
            <h4 className="col-xl-4">
              <Link to="/" className="redirect-home-page">
                <img src={arrowLeft} alt="arrow_left" /> Continue Shopping
              </Link>
            </h4>
            <div className="btn btn-outline input-area col-xl-3">
              <input className="input-code" type="text" placeholder="Promo code" />
              <img src={sendIcon} alt="send" />
            </div>
            <div className="total-area col-xl-2">
              <p>Total cost </p>
              <h4 className="total-price">{totalPrice.toFixed(2)}</h4>
            </div>
            <button type="button" className="col-xl-2 btn btn-primary">
              checkout
            </button>
          </form>
        </div>
      </div>
      <ConfirmBox
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        selectedId={selectedId}
      />
    </section>
  );
};
export default ShoppingCart;
