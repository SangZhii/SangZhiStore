import React from "react";
import SliderCard from "./SliderCard";
import { MAINSLIDE } from "../../mainslide";
import "./slider.css";
import "animate.css";
import NewArrival from "../newarrival/NewArrival";
import Series from "../../pages/biggestseries/Series";
import HotDeals from "../hotdeals/HotDeals";
import LatestBlogs from "../latestblog/LatestBlogs";
import Brands from "../brand/Brands";
import MainFooter from "../mainfooter/MainFooter";
import Navbar from "../navbar/Navbar";

const Slider = () => {
  return (
    <>
      <div className="slide-container">
        <Navbar />
        <SliderCard data={MAINSLIDE} />
        <NewArrival />
        <Series />
        <HotDeals />
        <LatestBlogs />
        <Brands />
        <MainFooter />
      </div>
    </>
  );
};

export default Slider;
