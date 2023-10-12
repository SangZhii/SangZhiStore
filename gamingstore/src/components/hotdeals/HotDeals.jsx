import React from "react";
import "./hotdeals.css";
import { HOTDEAL } from "./hotdeal";

const HotDeals = () => {
  return (
    <div className="hotdeals-container">
      <div className="hotdeals-header">
        <div className="col-12">
          <div className="hotdeals-header-title glitch">
            <span aria-hidden="true">Hot Deals</span>
            <span> Hot Deals</span>
            <span aria-hidden="true">Hot Deals</span>
          </div>
        </div>
      </div>
      <div className="hotdeals-card-container">
        {HOTDEAL.map((hotdeal, index) => (
          <div className="hotdeals-card-lists" key={index}>
            <div className="hotdeals-card-items">
              <img
                src={hotdeal.image}
                alt="hotdeal-img"
                className={hotdeal.className}
              />
              <div className={`hotdeals-btn ${hotdeal.className}`}>
                <button>{hotdeal.btn}</button>
                <div className="underlines-container">
                  <span className="underlines"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
