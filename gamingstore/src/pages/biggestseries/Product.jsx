import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = ({ product, images, setModal }) => {
  const { id, image1, image2, title, quick, news, nonew, price, newprice } =
    product;
  const { addToCart, cartItems, addToWish, wishItems } =
    useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const wishItemCount = wishItems[id];

  return (
    <>
      <div>
        <div className={`series-border ${images}`}>
          <div className="series-img">
            <img
              src={image1}
              alt="series"
              className="series1"
              style={{ width: "200px" }}
            />
            <img
              src={image2}
              alt="series2"
              className="series2"
              style={{ width: "200px" }}
            />
            <div className="quick-view">
              <button tabIndex={1} onClick={() => setModal(product)}>
                {quick}
              </button>
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
            <div className="add-to-cart-btn">
              <div
                className="add-to-cart-onclick"
                onClick={() => addToCart(product)}
              >
                <button onClick={() => addToCart(id)}>
                  Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </button>
              </div>
              <div
                className="add-to-wishlist"
                onClick={() => addToWish(product)}
              >
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

export default Product;
