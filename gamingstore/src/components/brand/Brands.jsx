import React, { useState } from "react";
import "../brand/brand.css";
import { BRAND, SLIDEIMAGE } from "./brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClose = () => {
    setIsClicked(!isClicked);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div className="brand-container">
      <div className="brand-lists">
        {BRAND.map((brand, idx) => (
          <div className="brand-border" key={idx}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="brand-items" key={idx.id}>
              <img src={brand.image} alt="brand-img" />
            </div>
          </div>
        ))}
      </div>
      <div className="subscribe-container">
        <div className="subscribe-lists">
          <div className="subscribe-newsletter">
            <FontAwesomeIcon icon={faEnvelope} className="mail" />
            <span>Subscribe Newsletter</span>
          </div>
          <div className="subscribe-discount">
            <p>
              SIGN UP OUR NEWSLETTER & RECEIVE <span>15% OFF</span> YOUR FIRST
              PURCHASE,
            </p>
          </div>
          <div className="subscribe-form">
            <form action="input">
              <div className="inputBox">
                <input type="text" required="required" />
                <span>email@example.com</span>
                <i></i>
              </div>
            </form>
            <div className="subscribe-btn" onClick={handleClick}>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="show-overlay">
          <div className="show-modal">
            <div className="swal-success__icon">
              <span className="swal-icon--success-long"></span>
              <span className="swal--icon--sucess-tip"></span>
              <div className="swal-icon--success__ring"></div>
              <div className="swal-icon--success__hide-corners"></div>
            </div>
            <div className="swal__title">Sent Successfully</div>
            <div className="swal__text">Done</div>
            <div className="swal__footer">
              <div className="swal-btn-container" onClick={handleClose}>
                <button>Ok</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="brand-slide__container">
        <div className="container">
          <Slider {...settings}>
            {SLIDEIMAGE.map((slide, idx) => (
              <div className="brand-slide__items" key={idx}>
                <img src={slide.slideImage} alt="slideimg" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brands;
