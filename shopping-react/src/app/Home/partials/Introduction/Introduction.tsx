import React from 'react';

import paymentIcon from 'assets/images/payment.svg';
import shipIcon from 'assets/images/ship.svg';
import guaranteeIcon from 'assets/images/guarantee.svg';
import materialIcon from 'assets/images/material.svg';

const Introduction = () => {
  return (
    <section className="section-introduction">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Why should you choose us?</h3>
        </div>
        <ul className="list-group row">
          <li className="list-item col-12 col-xl-3">
            <div className="card introduction-card">
              <img src={shipIcon} alt="Shipping" />
              <div className="card-detail">
                <h4 className="card-title">Free Shipping</h4>
                <p className="card-description">
                  All purchases over $199 are eligible for free shipping via
                  USPS First Class Mail.
                </p>
              </div>
            </div>
          </li>
          <li className="list-item col-12 col-xl-3">
            <div className="card introduction-card">
              <img src={paymentIcon} alt="Payments" className="card-icon" />
              <div className="card-detail">
                <h4 className="text-primary card-title">Easy Payments</h4>
                <p className="card-description">
                  All payments are processed instantly over a secure payment
                  protocol.
                </p>
              </div>
            </div>
          </li>
          <li className="list-item col-12 col-xl-3">
            <div className="card introduction-card">
              <img src={guaranteeIcon} alt="Guarantee" className="card-icon" />
              <div className="card-detail">
                <h4 className="card-title">Money-Back Guarantee</h4>
                <p className="card-description">
                  If an item arrived damaged or you've changed your mind, you
                  can send it back for a full refund.
                </p>
              </div>
            </div>
          </li>
          <li className="list-item col-12 col-xl-3">
            <div className="card introduction-card">
              <img src={materialIcon} alt="material" className="card-icon" />
              <div className="card-detail">
                <h4 className="card-title">Finest Quality</h4>
                <p className="card-description">
                  Designed to last, each of our products has been crafted with
                  the finest materials.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Introduction;
