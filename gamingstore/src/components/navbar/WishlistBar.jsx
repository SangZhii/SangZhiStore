import React, { useContext } from "react";
import "./navbar.css";
import { ShopContext } from "../../context/shopcontext";

const WishlistBar = ({ product, wishItems }) => {
  const { id, image1, title, price } = product;
  const { removeFromWish, addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="cart-nav__container">
        <div className="recommended-items">
          <a href="/#" className="overlay">
            <img src={image1} alt="product" />
          </a>
          <div className="cart-titles">
            <a href="/#">{title}</a>
            <div className="recommended-price">
              <p>${price}</p>
            </div>
          </div>
        </div>
        <div className="cart-amount">
          <p>({wishItems[id]})</p>
          <div
            className="remove-from-cart"
            onClick={() => removeFromWish(product)}
          >
            <button onClick={() => removeFromWish(id)}>Remove</button>
          </div>
          <div
            className="add-to-cart__from-wishlist"
            onClick={() => addToCart(product)}
          >
            <button onClick={() => addToCart(id)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistBar;
