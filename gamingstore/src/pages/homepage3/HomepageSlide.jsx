import React, { useCallback, useEffect, useRef, useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";
import cloud4 from "../../assets/cloud4.png";
import cloud5 from "../../assets/cloud5.png";
import "animate.css";
import NewArrival from "../../components/newarrival/NewArrival";
import Series from "../biggestseries/Series";
import HotDeals from "../../components/hotdeals/HotDeals";
import LatestBlogs from "../../components/latestblog/LatestBlogs";
import Brands from "../../components/brand/Brands";
import MainFooter from "../../components/mainfooter/MainFooter";
import styling from "../homepage3/homepage3.module.css";
import "../homepage3/homepage3.module.css";

const HomepageSlide = ({ data, datas }) => {
  const len = data.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const timeRef = useRef(null);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  };
  const nextSlide = useCallback(() => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  }, [activeIndex, len]);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      nextSlide();
    }, [5000]);
    return () => clearTimeout(timeRef.current);
  }, [nextSlide]);

  return (
    <>
      <div className={styling.mainSlide}>
        <div className="prevSlide">
          <button className="prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
        </div>

        <div className="nextSlide" onClick={nextSlide}>
          <button className="next">
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        {data.map((item, index) => {
          return (
            <div className={index === activeIndex ? "slides active" : "slides"}>
              <img
                src={item.image}
                alt="img"
                key={index.id}
                className="image"
              />

              <div className={styling.slideInfo}>
                <h4
                  className={
                    index === activeIndex
                      ? item.availableActive
                      : item.availableStyle
                  }
                >
                  {item.available}
                </h4>
                <h3
                  className={
                    index === activeIndex ? item.titleActive : item.titleStyle
                  }
                >
                  {item.title}
                </h3>
                <button
                  className={
                    index === activeIndex ? item.btnActive : item.btnStyle
                  }
                >
                  {item.btn}
                </button>
              </div>
            </div>
          );
        })}

        <div className="cloud-bg">
          <img src={cloud1} alt="cloud" style={{ "--i": "1" }} />
          <img src={cloud2} alt="cloud" style={{ "--i": "2" }} />
          <img src={cloud3} alt="cloud" style={{ "--i": "3" }} />
          <img src={cloud4} alt="cloud" style={{ "--i": "4" }} />
          <img src={cloud5} alt="cloud" style={{ "--i": "5" }} />
        </div>
        <div className={styling.slideIndicatorContainer}>
          {datas.map((item, index) => {
            return (
              <div className={styling.slideIndicatorItems}>
                <div
                  className={`index === activeIndex ? "slide active" : "slide"`}
                >
                  <img
                    src={item.image}
                    alt="img"
                    key={index.id}
                    className={styling.images}
                  />
                  <h3
                    className={
                      index === activeIndex
                        ? styling.slideTitle
                        : styling.slideTitleActive
                    }
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NewArrival />
      <Series />
      <HotDeals />
      <LatestBlogs />
      <Brands />
      <MainFooter />
    </>
  );
};

export default HomepageSlide;
