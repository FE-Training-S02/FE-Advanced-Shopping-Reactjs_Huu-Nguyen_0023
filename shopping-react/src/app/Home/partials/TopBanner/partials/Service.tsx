import React from "react";

import shippingIcon from 'assets/images/ship_service.svg'
import customerIcon from 'assets/images/customer.svg'
import warrantyIcon from 'assets/images/guarantee_service.svg'

const Service=()=>{
  return(
    <div className="services">
              <ul className="list-services">
                <li className="list-item">
                  <div className="card service-card">
                    <img src={shippingIcon} alt="shipping-icon" />
                    <div className="card-detail">
                      <h4 className="card-title service-title">Free Shipping</h4>
                      <p className="card-description">On purchases over $199</p>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="card service-card">
                    <img src={customerIcon} alt="customer-icon" />
                    <div className="card-detail">
                      <h4 className="card-title service-title">99% Satisfied Customers</h4>
                      <p className="card-description">Our clients' opinions speak for themselves</p>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="card service-card">
                    <img src={warrantyIcon} alt="warranty-icon" />
                    <div className="card-detail">
                      <h4 className="card-title service-title">Originality Guaranteed</h4>
                      <p className="card-description">30 days warranty for each product from our store</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
  )};
export default Service
