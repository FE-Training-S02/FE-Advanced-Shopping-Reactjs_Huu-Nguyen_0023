import React from 'react';

import logo from 'assets/images/logo_black.svg';
import cart from 'assets/images/cart_black.svg';
import avatar from 'assets/images/avatar_black.svg';
import menuIcon from 'assets/images/menu_icon.svg';

const HeaderMobile = () => {
  return (
    <div className='header-mobile container'>
      <div className='row'>
        <h1 className='header-logo col-2'>
          <a href='/#' className='logo-link shop-name'>
            <img className='logo' src={logo} alt='E-shop' />
            E-Shop
          </a>
        </h1>
        <div className='col-4'>
          <ul className='list-group'>
            <li className='list-item'>
              <a className='logo-link' href='/#'>
                <img src={cart} alt='cart_black_icon' />
                <div className='cart'></div>
              </a>
            </li>
            <li className='list-item'>
              <a className='logo-link' href='/#'>
                <img src={avatar} alt='avatar_black_icon' />
              </a>
            </li>
            <li className='list-item'>
              <a className='logo-link' href='/#'>
                <img src={menuIcon} alt='menu_icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderMobile;
