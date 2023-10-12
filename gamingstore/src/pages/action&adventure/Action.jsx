import React from "react";
import { ACTION } from "./actions";
import style from "../action&adventure/action.module.css";
import Series from "../biggestseries/Series";
import "../action&adventure/action.module.css";
import HotDeals from "../../components/hotdeals/HotDeals";
import LatestBlogs from "../../components/latestblog/LatestBlogs";
import Brands from "../../components/brand/Brands";
import MainFooter from "../../components/mainfooter/MainFooter";
import Navbar from "../../components/navbar/Navbar";

const Action = () => {
  return (
    <>
      <Navbar navbar={style.navbar} />
      <div className={style.actionContainer}>
        <div className="latest-blog">
          <div className={style.col12}>
            <div className={`glitch ${style.latestblogTitle}`}>
              <span aria-hidden="true">Action and Adventure</span>
              <span> Action and Adventure</span>
              <span aria-hidden="true">Action and Adventure</span>
            </div>
          </div>
        </div>
        <div className={style.mainSlide}>
          {ACTION.map((action, idx) => (
            <div className={style.slide} key={idx}>
              <img src={action.img} alt="action" />
            </div>
          ))}
        </div>
        <Series className={style.none} filter={style.filter} />
        <HotDeals />
        <LatestBlogs />
        <Brands />
        <MainFooter />
      </div>
    </>
  );
};

export default Action;
