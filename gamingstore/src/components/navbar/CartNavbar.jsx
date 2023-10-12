import React, { useContext } from "react";
import "./navbar.css";
import { ShopContext } from "../../context/shopcontext";

const CartNavbar = ({ product, cartItems }) => {
  const { id, image1, title, price } = product;
  const { removeFromCart } = useContext(ShopContext);
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
          <p>({cartItems[id]})</p>
          <div
            className="remove-from-cart"
            onClick={() => removeFromCart(product)}
          >
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartNavbar;
