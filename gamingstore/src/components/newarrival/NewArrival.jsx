import React from "react";
import { BANNER } from "../../newarrival";
import "../newarrival/newarrival.css";

const NewArrival = () => {
  return (
    <div className="arrival-container">
      {BANNER.map((banner, index) => {
        return (
          <div className="arrival-top" key={index}>
            <div className="arrival-lists">
              <div className="arrival-items">
                <img src={banner.image} alt="banner" key={index.id} />
                <div className="arrival-info">
                  <h4 className="title1">{banner.title}</h4>
                  <h4 className="title2">{banner.title2}</h4>
                  <p>{banner.arrival}</p>
                  <div className="banner-btn-container">
                    <button className="banner-btn">{banner.btn}</button>
                    <div className="underline-container">
                      <span className="underline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewArrival;
