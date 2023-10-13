import React from "react";
import { BANNER } from "../../newarrival";
import SliderCard from "../../components/Slider/SliderCard";
import { MAINSLIDE } from "../../mainslide";
import Series from "../biggestseries/Series";
import HotDeals from "../../components/hotdeals/HotDeals";
import LatestBlogs from "../../components/latestblog/LatestBlogs";
import Brands from "../../components/brand/Brands";
import MainFooter from "../../components/mainfooter/MainFooter";
import styles from "../homepage2/homepage2.module.css";
import Navbar from "../../components/navbar/Navbar";

const Homepage2 = () => {
  return (
    <div>
      <Navbar />
      <SliderCard data={MAINSLIDE} />
      <div className={styles.newarrival}>
        {BANNER.map((banner, index) => {
          return (
            <div className="arrival-top">
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
      <Series />
      <HotDeals />
      <LatestBlogs />
      <Brands />
      <MainFooter />
    </div>
  );
};

export default Homepage2;
