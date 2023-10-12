import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./productcard.css";
import React, { useContext } from "react";
import style from "../productdetail/detail.module.css";
import { ShopContext } from "../../context/shopcontext";
import { Link } from "react-router-dom";

const ProductCards = ({ game, images, setModal, kid }) => {
  const { image1, imgalt, id, title, price, newprice, news, nonew, quick } =
    game;

  const { addToCart, cartItems, addToWish, wishItems } =
    useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const wishItemCount = wishItems[id];

  return (
    <>
      <div className="product-card__list">
        <div className={`product-border ${images}`}>
          <div className="product-img">
            <img
              src={image1}
              alt="series"
              className="series1"
              style={{ width: "250px" }}
            />
            <img
              src={imgalt}
              alt="series2"
              className="series2"
              style={{ width: "250px" }}
            />
            <div className={`quick-view ${style.productCardBtn}`}>
              <button onClick={() => setModal(kid)}>{quick}</button>
            </div>
            <span className={nonew}>{news}</span>
          </div>
          <div className="series-info">
            <div className="series-title">
              <Link to="/productdetail">
                <h4>{title}</h4>
              </Link>
            </div>
            <div className="series-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
              <FontAwesomeIcon icon="fa-regular fa-star" />
            </div>
            <div className="series-price">
              <p>${price}</p>
              <div className="series-newprice">
                <p>${newprice}</p>
              </div>
            </div>
            <div className="add-to-cart-btn add-to-cart-product-detail">
              <div
                className="add-to-cart-onclick"
                onClick={() => addToCart(game)}
              >
                <button onClick={() => addToCart(id)}>
                  Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </button>
              </div>
              <div className="add-to-wishlist" onClick={() => addToWish(game)}>
                <button onClick={() => addToWish(id)}>
                  Add To Wishlist {wishItemCount > 0 && <> ({wishItemCount})</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
library.add(fas, far);
