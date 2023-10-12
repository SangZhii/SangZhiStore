import { createContext, useState } from "react";
import { PRODUCT } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartItem, setCartItem] = useState([]);
  const [wishItems, setWishItems] = useState(getDefaultCart());
  const [wishItem, setWishItem] = useState([]);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCT.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const exist = cartItem.find((x) => x.id === itemId.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === itemId.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...itemId, qty: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const exist = cartItem.find((x) => x.id === itemId.id);
    for (const item in exist)
      if (exist[item] === 1) {
        const newCartItems = cartItem.filter((x) => x.id !== itemId.id);
        setCartItem(newCartItems);
      } else {
        const newCartItems = cartItem.map((x) =>
          x.id === itemId.id ? { ...exist, qty: exist[item] - 1 } : x
        );
        setCartItem(newCartItems);
      }
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Wish Function

  const wishTotalAmount = () => {
    let totalAmount = 0;
    for (const item in wishItems) {
      if (wishItems[item] > 0) {
        let itemInfo = PRODUCT.find((product) => product.id === Number(item));
        totalAmount += wishItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const addToWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const exist = wishItem.find((x) => x.id === itemId.id);
    if (exist) {
      setWishItem(
        wishItem.map((x) =>
          x.id === itemId.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setWishItem([...wishItem, { ...itemId, qty: 1 }]);
    }
  };

  const removeFromWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const exist = wishItem.find((x) => x.id === itemId.id);
    for (const item in exist)
      if (exist[item] === 1) {
        const newWishItems = wishItem.filter((x) => x.id !== itemId.id);
        setWishItem(newWishItems);
      } else {
        const newWishItems = wishItem.map((x) =>
          x.id === itemId.id ? { ...exist, qty: exist[item] - 1 } : x
        );
        setWishItem(newWishItems);
      }
  };

  const contextValue = {
    cartItems,
    cartItem,
    addToCart,
    removeFromCart,
    updateCartAmount,
    getTotalAmount,
    wishTotalAmount,
    addToWish,
    removeFromWish,
    wishItems,
    wishItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
