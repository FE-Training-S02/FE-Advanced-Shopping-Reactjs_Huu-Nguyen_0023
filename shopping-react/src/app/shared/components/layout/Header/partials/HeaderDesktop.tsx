import React from 'react';

import logo from 'assets/images/logo.svg';
import cart from 'assets/images/cart.svg';
import avatar from 'assets/images/avatar.svg';
import search from 'assets/images/search.svg';

const HeaderDesktop = () => {
  return (
    <div className="header-desktop container">
          <div className="row">
            <h1 className="header-logo col-xl-2">
              <a href="/#" className="logo-link shop-name">
                <img className="logo" src={logo} alt="E-shop" />
                E-Shop
              </a>
            </h1>
            <nav className="navigation col-xl-4">
              <ul className="list-group">
                <li className="list-item">
                  <a href="/#" className="nav-link">Men</a>
                </li>
                <li className="list-item">
                  <a href="/#" className="nav-link">Women</a>
                </li>
                <li className="list-item">
                  <a href="/#" className="nav-link">Kids</a>
                </li>
              </ul>
            </nav>
            <div className="col-xl-2">
              <ul className="list-group">
                <li className="list-item">
                  <a className="logo-link" href="/#">
                    <img src={search} alt="search_icon"/>
                  </a>
                </li>
                <li className="list-item">
                  <a className="logo-link" href="/#">
                    <img className="redirect-cart-page" src={cart} alt="cart_icon"/>
                    <div className="cart"></div>
                  </a>
                </li>
                <li className="list-item">
                  <a className="logo-link" href="/#">
                    <img src={avatar} alt="avatar_icon"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  );
};
export default HeaderDesktop;
