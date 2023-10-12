import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import "./shopping.css";

const CartItemMb = ({ product, totalAmounts }) => {
  const { id } = product;
  const { cartItems, addToCart, removeFromCart, updateCartAmount } =
    useContext(ShopContext);
  return (
    <div className="shopping-cart-mb__container">
      <tbody>
        <tr className="table-row">
          <td className="column4 column4__mb">
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
                onChange={(e) => updateCartAmount(Number(e.target.value), id)}
              />
              <div className="cart-add" onClick={() => addToCart(product)}>
                <button onClick={() => addToCart(id)}> + </button>
              </div>
            </div>
          </td>
          <td className="column5 column4__mb totalmb">${totalAmounts}</td>
        </tr>
      </tbody>
    </div>
  );
};

export default CartItemMb;
