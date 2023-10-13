import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { SHOPPING } from "./shopping";
import style from "../shoppingcart/shopping.module.css";
import "../shoppingcart/shopping.css";
import { PRODUCT } from "../../product";
import { ShopContext } from "../../context/shopcontext";
import CartItem from "./CartItem";
import CartItemMb from "./CartItemMb";
import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const totalAmounts = getTotalAmount();

  const [visible, setVisible] = useState(false);

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
      <Navbar />
      <div className={style.actionContainer}>
        <div className="latest-blog">
          <div className={style.col12}>
            <div className={`glitch ${style.latestblogTitle}`}>
              <span aria-hidden="true">SHOPPING CART</span>
              <span> SHOPPING CART</span>
              <span aria-hidden="true">SHOPPING CART</span>
            </div>
          </div>
        </div>
        <div className={style.mainSlide}>
          {SHOPPING.map((shop, idx) => (
            <div className={style.slide} key={idx}>
              <img src={shop.img} alt="sport" />
            </div>
          ))}
        </div>
      </div>
      <section className="shop-card">
        <div className="shopping-container">
          <div className="shopping-box">
            <div className="shopping-card__box">
              <tbody className="table-head">
                <tr>
                  <th className="column1">Product</th>
                  <th className="column2"></th>
                  <th className="column3">Price</th>
                  <th className="column4">Quantity</th>
                  <th className="column5">Total</th>
                </tr>
              </tbody>

              {totalAmounts > 0 ? (
                <div className="shopping-item">
                  {PRODUCT.map((product, idx) => {
                    if (cartItems[product.id] !== 0) {
                      return (
                        <CartItem
                          product={product}
                          key={idx}
                          totalAmounts={totalAmounts}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <h1 className="cart-empty">Your Shopping Cart is Empty</h1>
              )}
            </div>
            {totalAmounts > 0 ? (
              <div className="coupon-item">
                <div className="apply-coupon">
                  <input type="text" placeholder="Coupon Code" />
                  <button>Apply Coupon</button>
                </div>
                <div className="update">
                  <button>Update Cart</button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Shopping Box Mobile View  */}

          <div className="shopping-box-mb__container">
            <div className="shopping-card-mb__main">
              <tbody className="table-head">
                <tr>
                  <td className="column1">Product</td>
                  <td className="column2"></td>
                  <td className="column3">Price</td>
                </tr>
              </tbody>

              {totalAmounts > 0 ? (
                <div className="shopping-item">
                  {PRODUCT.map((product, idx) => {
                    if (cartItems[product.id] !== 0) {
                      return (
                        <CartItem
                          product={product}
                          key={idx}
                          totalAmounts={totalAmounts}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <h1 className="cart-empty">Your Shopping Cart is Empty</h1>
              )}
              <tbody>
                <tr className="table-head">
                  <td className="column1">Quantity</td>
                  <td className="column2"></td>
                  <td className="column3">Total</td>
                </tr>
              </tbody>
              <div className="cart-items__mb">
                {totalAmounts > 0 ? (
                  <div className="shopping-item">
                    {PRODUCT.map((product, idx) => {
                      if (cartItems[product.id] !== 0) {
                        return (
                          <CartItemMb
                            product={product}
                            key={idx}
                            totalAmounts={totalAmounts}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* End Shopping Box Mobile View  */}

          <div className="card-total__container">
            <div className="card-total">
              <h1>Card Totals</h1>
              <div className="sub-total">
                <h4>Subtotal: </h4>
                <p>${totalAmounts}</p>
              </div>
              <div className="card-shipping">
                <h4>Shipping:</h4>
                <div className="shipping-info">
                  <p>
                    There are no shipping methods available. Please double check
                    your address, or contact us if you need any help.
                  </p>
                  <div className="country-selecting">
                    <h5>Select Country</h5>
                    <select name="country" id="country">
                      <option value="SL" className="option">
                        Select a country...
                      </option>
                      <option value="CAM" className="option">
                        Cambodia
                      </option>
                      <option value="CN" className="option">
                        Chinese
                      </option>
                      <option value="PH" className="option">
                        Philipine
                      </option>
                      <option value="IN" className="option">
                        Indonesia
                      </option>
                      <option value="SG" className="option">
                        Singapore
                      </option>
                      <option value="MA" className="option">
                        Malaysia
                      </option>
                      <option value="MY" className="option">
                        Myanmar
                      </option>
                      <option value="JP" className="option">
                        Japan
                      </option>
                      <option value="KR" className="option">
                        Korea
                      </option>
                    </select>
                    <input type="text" placeholder="State / Country" />
                    <input type="text" placeholder="Postcode / Zip" />
                    <button>Update Total</button>
                  </div>
                </div>
              </div>
              <div className="checkout-container">
                <div className="checkout-cart">
                  <h4>Total:</h4>
                  <div className="total">
                    <p>${totalAmounts}</p>
                  </div>
                </div>
                <NavLink
                  to="/checkout"
                  onClick={scrollToTop}
                  style={{ display: visible ? "inline" : "none" }}
                >
                  <button>Proceed To Checkout</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
