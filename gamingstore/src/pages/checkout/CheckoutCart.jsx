import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import CheckoutProduct from "./CheckoutProduct";
import { PRODUCT } from "../../product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";

const CheckoutCart = ({ getDiscount, discountCoupon }) => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmounts = getTotalAmount();
  const afterDiscount = getDiscount();
  const discountPer = discountCoupon();

  return (
    <>
      <form name="checkout" method="post" className="woocommerce-checkout-form">
        <div className="checkout-fields-wrapper">
          <div className="checkout-order-wrap">
            <h3 className="heading">Your order</h3>
            <div className="order-review">
              <table className="order-table">
                <thead>
                  <tr>
                    <th className="product-name">Product</th>
                    <th className="product-name subtotal">Price/Item</th>
                    <th className="product-total subtotal pc">Total Items</th>
                    <th className="product-total subtotal mb">Items</th>
                    <th className="product-total subtotal">Subtotal</th>
                  </tr>
                </thead>
                {totalAmounts > 0 ? (
                  <tbody>
                    {PRODUCT.map((product, idx) => {
                      if (cartItems[product.id] !== 0) {
                        return (
                          <CheckoutProduct
                            product={product}
                            key={idx}
                            cartItems={cartItems}
                            cartPrice={product.price}
                          />
                        );
                      }
                      return null;
                    })}
                  </tbody>
                ) : (
                  <div className="cart-empty-div">
                    <h1 className="cart-empty">Your Shopping Cart is Empty</h1>
                  </div>
                )}
                <tfoot>
                  <tr className="cart-subtotal">
                    <th>Total Price</th>
                    <td className="product-total td-product-total">
                      <span className="product-amount">
                        <bdi></bdi>
                      </span>
                    </td>
                    <td className="product-total td-product-total">
                      <span className="product-amount">
                        <bdi></bdi>
                      </span>
                    </td>
                    <td>
                      <span className="product-amount">${totalAmounts}</span>
                    </td>
                  </tr>
                  <tr className="cart-subtotal">
                    <th>Discount</th>
                    <td className="product-total td-product-total">
                      <span className="product-amount">
                        <bdi></bdi>
                      </span>
                    </td>
                    <td className="product-total td-product-total">
                      <span className="product-amount">
                        <bdi></bdi>
                      </span>
                    </td>
                    <td>
                      <span className="product-amount">{discountPer}%</span>
                    </td>
                  </tr>
                  <tr className="order-total">
                    <th>Total Price After Discount</th>
                    <td className="product-total td-product-total">
                      <span className="product-amount">
                        <bdi></bdi>
                      </span>
                    </td>
                    <td className="product-total td-product-total">
                      <span className="product-amount">
                        <bdi></bdi>
                      </span>
                    </td>
                    <td>
                      <strong>
                        <span className="product-amount">${afterDiscount}</span>
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="payment-option-heading">
                <h3>Payment</h3>
              </div>
              <div className="woocommerce-checkout-payment">
                <ul className="payment-method">
                  <li>
                    <label htmlFor="payment-method-paypal">
                      PayPal
                      <FontAwesomeIcon icon={faCcPaypal} className="paypal" />
                    </label>
                    <div className="payment-suggest">
                      <p>
                        Pay via PayPal; you can pay with any payment methods
                        above if you don't have Paypal account.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutCart;
