import React, { useState } from "react";
import { DETAIL } from "./detail";
import ProductItem from "./ProductItem";
import style from "../productdetail/detail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Description from "../../components/description/Description";
import ProductCards from "./ProductCards";
import styles from "../productdetail/productcard.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainFooter from "../../components/mainfooter/MainFooter";
import { HONKAI, PRODUCT } from "../../product";
import DetailCard from "./DetailCard";

const ProductDetail = () => {
  const [modal, setModal] = useState(false);
  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productPages = PRODUCT.filter(
    (item) => item.type4 !== "" && item.type4 !== null,
    (item) => item.type6 !== "" && item.type6 !== null
  );

  const productKid = PRODUCT.filter(
    (item) => item.type5 !== "" && item.type5 !== null
  );

  return (
    <>
      <Navbar navbar={style.navbar} />
      <div className={style.actionContainer}>
        <div className="latest-blog">
          <div className={style.col12}>
            <div className={`glitch ${style.latestblogTitle}`}>
              <span aria-hidden="true">Genshin Impact</span>
              <span> Genshin Impact</span>
              <span aria-hidden="true">enshin Impact</span>
            </div>
          </div>
        </div>
        <div className={style.mainSlide}>
          {DETAIL.map((detail, idx) => (
            <div className={style.slide} key={idx}>
              <img src={detail.img} alt="genshin impact" />
            </div>
          ))}
        </div>
      </div>
      <div className="product-detail__container">
        <div className="product-detail__cart">
          <ProductItem data={productPages} />
        </div>

        <div className="description-container">
          <Description />
        </div>
        <div className="product-detail__card-container">
          <div className={styles.actionContainer}>
            <div className="latest-blog">
              <div className={styles.col12}>
                <div className={`glitch ${styles.latestblogTitle}`}>
                  <span aria-hidden="true">Related Games</span>
                  <span> Related Games</span>
                  <span aria-hidden="true">Related Games</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <Slider {...settings}>
              {productKid.map((game, idx) => (
                <ProductCards
                  game={game}
                  kid={HONKAI}
                  key={idx}
                  setModal={setModal}
                  modal={modal}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <DetailCard setModal={setModal} modal={modal} product={HONKAI} />
      <MainFooter />
    </>
  );
};

export default ProductDetail;
