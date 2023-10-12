import React, { useCallback, useEffect, useRef, useState } from "react";
import "./detail.css";
import {
  faChevronLeft,
  faChevronRight,
  faDownLeftAndUpRightToCenter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRODUCT } from "../../product";
import ProductInfo from "./ProductInfo";
import { FULLIMAGE } from "./detail";

const ProductItem = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [slides, setSlides] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const timeRef = useRef(null);

  const nextSlide = useCallback(() => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }, [slide, data.length]);
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
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

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      nextSlide();
    }, [5000]);
    return () => clearTimeout(timeRef.current);
  }, [nextSlide]);

  const productPage = PRODUCT.filter(
    (item) => item.type4 !== "" && item.type4 !== null,
    (item) => item.type6 !== "" && item.type6 !== null
  );

  const productInfo = PRODUCT.filter(
    (item) => item.productInfo !== "" && item.productInfo !== null
  );

  return (
    <>
      <div className="product-cart">
        <div className="product-detail__cart-container">
          <div className="product-overlay__container">
            {productPage.map((item, index) => (
              <div
                className={
                  slide === index ? "product-overlay" : "product-overlay"
                }
                key={index}
                onClick={() => nextSlide(index)}
              >
                <img src={item.image1} alt="genshin" />
                <div className="overlays"></div>
              </div>
            ))}
          </div>
          <div className="main-product__cart">
            {data.map((item, idx) => (
              <div
                className={
                  slide === idx
                    ? "main-product__cart__slide"
                    : "main-product__cart__slide slide-hidden"
                }
                key={idx}
              >
                <img src={item.image1} alt="gen" />
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
                  {FULLIMAGE.map((item, index) => (
                    <div
                      key={index}
                      className={
                        slides === index
                          ? "main-product__cart__slide"
                          : "main-product__cart__slide hidden"
                      }
                    >
                      <img
                        src={item.image1}
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
    </>
  );
};

export default ProductItem;
