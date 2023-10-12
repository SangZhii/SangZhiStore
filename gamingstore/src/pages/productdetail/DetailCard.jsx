import React, { useCallback, useEffect, useRef, useState } from "react";
import "../productdetail/detail.css";
import {
  faChevronLeft,
  faChevronRight,
  faDownLeftAndUpRightToCenter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRODUCT, HONKAI } from "../../product";
import ProductInfo from "../productdetail/ProductInfo";
import { FULLIMAGE } from "../productdetail/detail";
import "../biggestseries/series.css";

const DetailCard = ({ product, setModal, modal }) => {
  const initialCount = 0;
  const [slide, setSlide] = useState(initialCount);
  const [slides, setSlides] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const timeRef = useRef(null);

  const nextSlide = useCallback(() => {
    setSlide(slide === product.length - 1 ? 0 : slide + 1);
  }, [slide, product.length]);
  const prevSlide = () => {
    setSlide(slide === 0 ? product.length - 1 : slide - 1);
  };

  const nextSlideFullImage = () => {
    setSlides(slides === FULLIMAGE.length - 1 ? 0 : slides + 1);
  };
  const prevSlideFullImage = () => {
    setSlides(slides === 0 ? FULLIMAGE.length - 1 : slides - 1);
  };

  const showZoomImage = () => {
    setShowImage(!showImage);
  };

  const showHideDetail = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      nextSlide();
    }, [5000]);
    return () => clearTimeout(timeRef.current);
  }, [nextSlide]);

  const productInfo = PRODUCT.filter(
    (item) => item.productInfo !== "" && item.productInfo !== null
  );

  return (
    <>
      <div
        className={`product-card__container ${modal ? "openCard" : "hideCard"}`}
      >
        <div className="product-card__overlay"></div>
        <div className="product-cart">
          <button className="product-detail__btn">
            <FontAwesomeIcon icon={faXmark} onClick={showHideDetail} />
          </button>
          <div className="product-cart__container">
            <div className="product-overlay__container">
              {HONKAI.map((item, idx) => (
                <div
                  className={
                    slide === idx ? "product-overlay" : "product-overlay"
                  }
                  key={idx}
                  onClick={() => nextSlide(idx)}
                >
                  <img src={item.honkai} alt="genshin" />
                  <div className="overlays"></div>
                </div>
              ))}
            </div>
            <div className="main-product__cart">
              {HONKAI.map((item, index) => (
                <div
                  className={
                    slide === index
                      ? "main-product__cart__slide"
                      : "main-product__cart__slide slide-hidden"
                  }
                  key={index}
                >
                  <img src={item.honkai} alt="gen" />
                  <div className="zoom-in__zoom-out">
                    <button
                      className="zoom-in__zoom-out__icon"
                      onClick={showZoomImage}
                    >
                      <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                    </button>
                  </div>
                  <div className="arrow">
                    <button onClick={nextSlide} className="next-slide">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button onClick={prevSlide} className="prev-slide">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="product-info__container">
            {productInfo.map((info, idx) => (
              <ProductInfo info={info} key={idx} />
            ))}
          </div>
          <div className="zoom-in__zoom-out__image-container">
            <div
              className={`zoom-in__zoom-out__image ${
                showImage ? "zoomIn" : "zoomOut"
              }`}
            >
              <div className="zoom-inOut__image-fade"></div>
              <div className="zoom-in__image-holder">
                <div className="zoom-in__content">
                  <div className="zoom-in__figure">
                    <button onClick={showZoomImage}>
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                    {HONKAI.map((item, index) => (
                      <div
                        key={index}
                        className={
                          slides === index
                            ? "main-product__cart__slide"
                            : "main-product__cart__slide hidden"
                        }
                      >
                        <img
                          src={item.honkai}
                          alt="genshin"
                          style={{ maxHeight: "750px" }}
                        />
                        <div className="num-of-img__bot-bar">
                          <div className="num-of-img__title"></div>
                          <div className="num-of-img-counter">
                            <p>{item.id} of 5</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={nextSlideFullImage} className="nextSlide">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button onClick={prevSlideFullImage} className="prevSlide">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
