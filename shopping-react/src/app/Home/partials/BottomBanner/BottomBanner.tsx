import React from 'react';

const BottomBanner = () => {
  return (
    <section className="section-bottom-banner">
      <div className="bottom-banner container">
        <div className="row bottom-banner-content">
          <div className="col-12 col-xl-6">
            <h4 className="bottom-banner-title">
              Subscribe to our newsletter and receive exclusive offers every
              week
            </h4>
          </div>
          <form className="subscribe-form col-12 col-xl-6 row">
            <input
              className="input-email col-12 col-xl-7"
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary col-6 col-xl-4">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default BottomBanner;
