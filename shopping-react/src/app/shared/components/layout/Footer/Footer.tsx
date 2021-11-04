import React from 'react';

import facebookIcon from 'assets/images/facebook.png';
import instagramIcon from 'assets/images/instagram.png';
import linkedInIcon from 'assets/images/LinkedIn.png';
import logo from 'assets/images/logo.svg';
import twitterIcon from 'assets/images/twitter.png';
import youtubeIcon from 'assets/images/youtube.png';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <section className='section-footer-top'>
        <div className='container'>
          <div className='row footer-top-content'>
            <div className='col-12 col-xl-6'>
              <div className='about-us-detail'>
                <h2 className='footer-logo'>
                  <a href='/#' className='logo-link shop-name'>
                    <img className='logo' src={logo} alt='E-shop' />
                    E-Shop
                  </a>
                </h2>
                <h4 className='description-content'>
                  House My Brand designs clothing for the young, the old 	&amp; everyone in between – but
                  most importantly, for the fashionable
                </h4>
                <div className='social-network'>
                  <ul className='list-group'>
                    <li className='list-item'>
                      <a href='/#'>
                        <img src={facebookIcon} alt='facebook' />
                      </a>
                    </li>
                    <li className='list-item'>
                      <a href='/#'>
                        <img src={twitterIcon} alt='twitter' />
                      </a>
                    </li>
                    <li className='list-item'>
                      <a href='/#'>
                        <img src={linkedInIcon} alt='linkedin' />
                      </a>
                    </li>
                    <li className='list-item'>
                      <a href='/#'>
                        <img src={instagramIcon} alt='instagram' />
                      </a>
                    </li>
                    <li className='list-item'>
                      <a href='/#'>
                        <img src={youtubeIcon} alt='youtube' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className='list-group shop-detail col-12 col-xl-6'>
              <li className='list-item '>
                <h4 className='item-title shop-detail-title '>Shopping online</h4>
                <ul className='list-group'>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Order Status
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Shipping and Delivery
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Returns
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Payment Options
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li className='list-item'>
                <h4 className='item-title shop-detail-title'>Information</h4>
                <ul className='list-group'>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Gift Cards
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Find a store
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Newsletter
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Become a member
                    </a>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <a className='shop-detail-content' href='/#'>
                      Site feedback
                    </a>
                  </li>
                </ul>
              </li>
              <li className='list-item'>
                <h4 className='item-title shop-detail-title'>Contact</h4>
                <ul className='list-group shop-detail-item'>
                  <li className='list-item shop-detail-item'>
                    <p className='shop-detail-content'>store&#64;uikit.com</p>
                  </li>
                  <li className='list-item shop-detail-item'>
                    <p className='shop-detail-content'>Hotline: +1 131 138 138</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='section-footer-bottom'>
        <p>DESIGN BY ICEO.CO - &copy; 2019. ALL RIGHTS RESERVED. </p>
      </section>
    </footer>
  );
};
export default Footer;
