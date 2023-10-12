import React, { useContext } from "react";
import "../shoppingcart/shopping.css";
import { ShopContext } from "../../context/shopcontext";

const CartItem = ({ product, totalAmounts }) => {
  const { id, image1, title, price } = product;
  const { cartItems, addToCart, removeFromCart, updateCartAmount } =
    useContext(ShopContext);

  return (
    <div className="shopping">
      <div className="shopping-cart">
        <div className="cart-games">
          <div className="cart-items">
            <tbody>
              <tr className="table-row">
                <td className="column1">
                  <img src={image1} alt="product" />
                </td>
                <td className="column2">{title}</td>
                <td className="column3">{price}</td>
                <td className="column4">
                  <div className="cart-count">
                    <div
                      className="remove-from-cart"
                      onClick={() => removeFromCart(product)}
                    >
                      <button onClick={() => removeFromCart(id)}> - </button>
                    </div>
                    <input
                      type="text"
                      value={cartItems[id]}
                      onChange={(e) =>
                        updateCartAmount(Number(e.target.value), id)
                      }
                    />
                    <div
                      className="cart-add"
                      onClick={() => addToCart(product)}
                    >
                      <button onClick={() => addToCart(id)}> + </button>
                    </div>
                  </div>
                </td>
                <td className="column5">${totalAmounts}</td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
