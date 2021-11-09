import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {rootState} from 'store/rootReducer';

import { productAttribute } from 'app/shared/model/product-interface';

import logo from 'assets/images/logo_black.svg';
import searchIcon from 'assets/images/search_black.svg';
import cartIcon from 'assets/images/cart_black.svg';
import avatarIcon from 'assets/images/avatar_black.svg';

const Header = () => {
  const listCartItem: productAttribute[] = useSelector(
    (state: rootState) => state.cart?.listItem
  );
  const totalPrice = listCartItem.reduce(
    (total: number, item: productAttribute) =>
      total + (item.quantity || 1),
    0
  );
  return (
    <div id="cart-page">
      <header className="page-header">
        <div className="header-desktop container">
          <div className="row">
            <h1 className="header-logo col-xl-2">
              <Link to="/" className="logo-link shop-name">
                <img className="logo" src={logo} alt="E-shop" />
                <span className="text-primary">E-</span>Shop
              </Link>
            </h1>
            <nav className="navigation col-xl-3">
              <ul className="list-group">
                <li className="list-item">
                  <a href="/#" className="nav-link">
                    Men
                  </a>
                </li>
                <li className="list-item">
                  <a href="/#" className="nav-link">
                    Women
                  </a>
                </li>
                <li className="list-item">
                  <a href="/#" className="nav-link">
                    Kids
                  </a>
                </li>
              </ul>
            </nav>
            <div className="col-xl-2">
              <ul className="list-group">
                <li className="list-item">
                  <a className="logo-link" href="/#">
                    <img src={searchIcon} alt="search_icon" />
                  </a>
                </li>
                <li className="list-item">
                  <Link to="/cart" className="logo-link">
                    <img src={cartIcon} alt="cart_icon" />
                    <div className="cart-quantity">{totalPrice}</div>
                  </Link>
                </li>
                <li className="list-item">
                  <a className="logo-link" href="/#">
                    <img src={avatarIcon} alt="avatar_icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
