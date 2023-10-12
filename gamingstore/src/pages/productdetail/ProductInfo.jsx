import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faFire,
  faGamepad,
  faGlobe,
  faHeadset,
  faHeart,
  faHouseLaptop,
  faPuzzlePiece,
  faRotate,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const ProductInfo = ({ info }) => {
  const { id, price, newPrice } = info;
  const { addToCart, removeFromCart, cartItems, updateCartAmount } =
    useContext(ShopContext);

  const cartAmounts = cartItems[id];
  return (
    <div className="product-info">
      <div className="product-title">
        <p>New</p>
        <h4>Genshin Impact</h4>
      </div>
      <div className="product-code">
        <h5>
          Product Code: <span>BR0224P47</span>
        </h5>
      </div>
      <div className="product-price">
        <span>${price}</span> <h6>${newPrice}</h6> <span>(You Save $10)</span>
      </div>
      <div className="product-required">
        <ul>
          <li>
            <FontAwesomeIcon icon={faGamepad} className="product-icon" />
            PsS Plus Required For Online Play
          </li>
          <li>
            <FontAwesomeIcon icon={faCreditCard} className="product-icon" />
            In-Game Pruchases Optional
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} className="product-icon" />
            Supports Up To 64 Online Players With PS Plus
          </li>
          <li>
            <FontAwesomeIcon icon={faFire} className="product-icon" />
            Vibration Function Required
          </li>
          <li>
            <FontAwesomeIcon icon={faHeadset} className="product-icon" />
            Online Play Supported
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} className="product-icon" />1 - 2
            Players
          </li>
          <li>
            <FontAwesomeIcon icon={faHouseLaptop} className="product-icon" />
            Remote Play Supported
          </li>
          <li>
            <FontAwesomeIcon icon={faPuzzlePiece} className="product-icon" />
            Trigger Effect Required
          </li>
        </ul>
      </div>
      <div className="product-template">
        <h4>Available On</h4>
        <div className="template-list">
          <a href="/#">PS4</a>
          <a href="/#">PS5</a>
          <a href="/#">Android</a>
          <a href="/#">Iphone</a>
        </div>
      </div>
      <div className="add-to-cart">
        <div className="cart-count">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartAmount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <button className="add-btn" onClick={() => addToCart(id)}>
          Add To Cart {cartAmounts > 0 && <>({cartAmounts})</>}
        </button>
      </div>
      <div className="add-to-wish">
        <FontAwesomeIcon icon={faHeart} className="add-to-wish-icon" />
        <span>Add To Wishlist</span>
        <FontAwesomeIcon icon={faRotate} className="add-to-compare-icon" />
        <span>Add To Compare</span>
      </div>
      <div className="product-tag">
        <div className="product-code">
          <p>
            Product Code: <span>BR0224P47</span>
          </p>
        </div>
        <div className="product-categories">
          <p>
            Categories: <span>Action, Online Game</span>
          </p>
        </div>
        <div className="tag">
          <p>
            Tags: <span>Multi-Player, Action</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
