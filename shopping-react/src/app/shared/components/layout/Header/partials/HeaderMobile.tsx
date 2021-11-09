import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {rootState} from 'store/rootReducer';

import { productAttribute } from 'app/shared/model/product-interface';

import logo from 'assets/images/logo_black.svg';
import cart from 'assets/images/cart_black.svg';
import avatar from 'assets/images/avatar_black.svg';
import menuIcon from 'assets/images/menu_icon.svg';


const HeaderMobile = () => {
  const listCartItem: productAttribute[] = useSelector(
    (state: rootState) => state.cart?.listItem
  );
  const totalPrice = listCartItem.reduce(
    (total: number, item: productAttribute) =>
      total + (item.quantity || 1),
    0
  );
  return (
    <div className="header-mobile container">
      <div className="row">
        <h1 className="header-logo col-2">
          <Link to="/" className="logo-link shop-name">
            <img className="logo" src={logo} alt="E-shop" />
            E-Shop
          </Link>
        </h1>
        <div className="col-4">
          <ul className="list-group">
            <li className="list-item">
              <Link to="/cart" className="logo-link">
                <img src={cart} alt="cart_black_icon" />
                <div className="cart-quantity">{totalPrice}</div>
              </Link>
            </li>
            <li className="list-item">
              <a className="logo-link" href="/#">
                <img src={avatar} alt="avatar_black_icon" />
              </a>
            </li>
            <li className="list-item">
              <a className="logo-link" href="/#">
                <img src={menuIcon} alt="menu_icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderMobile;
