import React from "react";
import Service from "./partials/Service";
import arrow from 'assets/images/arrow.svg'

const TopBanner=()=>{
  return(
    <section className="section-top-banner">
          <div className="top-banner container">
            <div className="banner-content">
              <h2 className="top-banner-title">
                Sale of the <span className="text-primary">summer</span> collection
              </h2>
              <a className="banner-link" href="/#">
                <span className="arrow-icon">
                  <img src={arrow} alt="arrow-left"/>
                </span>
                SHOP NOW
              </a>
            </div>
            <Service/>
          </div>
        </section>
  )
};
export default TopBanner
