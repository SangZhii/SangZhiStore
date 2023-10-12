import React from "react";
import style from "../about/about.module.css";
import "./about.css";
import { ABOUT, ABOUTDETAIL } from "./aboutdata";
import Navbar from "../../components/navbar/Navbar";
import AboutItem from "./AboutItem";
import MainFooter from "../../components/mainfooter/MainFooter";

const About = () => {
  return (
    <>
      <Navbar navbar={style.navbar} />
      <div className={style.actionContainer}>
        <div className="latest-blog">
          <div className={style.col12}>
            <div className={`glitch ${style.latestblogTitle}`}>
              <span aria-hidden="true">About Us</span>
              <span> About Us</span>
              <span aria-hidden="true">About Us</span>
            </div>
          </div>
        </div>
        <div className={style.mainSlide}>
          {ABOUT.map((about, idx) => (
            <div className={style.slide} key={idx}>
              <img src={about.img} alt="about" />
            </div>
          ))}
        </div>
      </div>

      <div className="about-container">
        {ABOUTDETAIL.map((about, idx) => (
          <AboutItem about={about} key={idx} />
        ))}
      </div>
      <MainFooter />
    </>
  );
};

export default About;
