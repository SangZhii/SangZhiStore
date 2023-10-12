import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCT } from "../../product";
import { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import "./navbar.css";
import WishlistBar from "./WishlistBar";

const Wishlist = ({ hide, wishRef, showWishlist }) => {
  const { wishItems, wishTotalAmount } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const totalAmounts = wishTotalAmount();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <section className="cart-nav">
        <div
          className={`cart-sidebar ${hide ? "hide" : "showw"}`}
          ref={wishRef}
        >
          <div className="cart-btn">
            <h3>Your Cart</h3>
            <button
              className="close-cart"
              style={{ cursor: "pointer" }}
              onClick={showWishlist}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          {totalAmounts > 0 ? (
            <div className="recommended-games cart-item">
              {PRODUCT.map((product, idx) => {
                if (wishItems[product.id] !== 0) {
                  return (
                    <WishlistBar
                      product={product}
                      key={idx}
                      totalAmounts={totalAmounts}
                      wishItems={wishItems}
                    />
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <h6>Your Wishlist is Empty</h6>
          )}
          <div className="total-price">
            <div className="total-price-heading">
              <h4>Total:</h4>
              <p>${totalAmounts}</p>
            </div>
            <div className="checkout">
              <Link to="/cart">
                <button className="view-cart">View Cart</button>
              </Link>
              <Link
                to="/checkout"
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
              >
                <button>Check Out</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
