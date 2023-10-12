import React from "react";
import "../checkout/Checkout.css";

const CheckoutProduct = ({ product, cartItems, cartPrice }) => {
  const { id, image1, title, price } = product;
  const cartAmount = cartItems[id];
  const total = cartPrice * cartItems[id];
  return (
    <>
      <tr className="order-cart-item">
        <td className="product-name product-name-td">
          <div className="product-image">
            <div className="product-thumbnail">
              <img src={image1} alt="product" />
            </div>
            <div className="product-name title">{title}</div>
          </div>
          &nbsp;
        </td>
        <td className="product-total td-product-total ">
          <span className="product-amount ">
            <bdi>${price} (1)</bdi>
          </span>
        </td>
        <td className="product-total td-product-total ">
          <span className="product-amount ">
            <bdi>{cartAmount}</bdi>
          </span>
        </td>
        <td className="product-total td-product-total">
          <span className="product-amount">
            <bdi>${total.toFixed(2)}</bdi>
          </span>
        </td>
      </tr>
    </>
  );
};

export default CheckoutProduct;
