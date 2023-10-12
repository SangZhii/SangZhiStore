import {
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopcontext";
import { useRef } from "react";

export const NavbarIcon = ({
  showNavbar,
  showCart,
  showWishlist,
  closeNav,
  close,
}) => {
  const [search, setSearch] = useState(false);
  const { cartItem, wishItem } = useContext(ShopContext);
  const searchRef = useRef();

  const searchBtn = () => {
    setSearch(!search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showSearchBar = () => {
    searchRef.current.classList.toggle("search-bar__responsive");
  };
  return (
    <div className="nav-list2">
      <div className="bor6">
        <div className="icon-item" onClick={searchBtn}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="header-btn"
            style={{ cursor: "pointer" }}
            onClick={showSearchBar}
          />
        </div>
        <div
          className={`search-bar ${search ? "open" : "close"}`}
          ref={searchRef}
        >
          <div className={`search-bar__container ${search ? "close" : "open"}`}>
            <form className="search-form" onSubmit={handleSubmit}>
              <button className="close-icon" onClick={showSearchBar}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ cursor: "pointer" }}
                  className="search"
                />
              </button>
              <input type="text" placeholder="Search..." />
            </form>
          </div>
        </div>
      </div>
      <div className="bor6">
        <div className="icon-item">
          <Link>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="header-btn"
              onClick={showCart}
              style={{ cursor: "pointer" }}
            />
            {cartItem.length ? (
              <div className="shops shops-count" onClick={showCart}>
                {cartItem.length}
              </div>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
      <div className="bor6">
        <div className="icon-item">
          <Link>
            <FontAwesomeIcon
              icon={faHeart}
              className="header-btn"
              style={{ cursor: "pointer" }}
              onClick={showWishlist}
            />
            {wishItem.length ? (
              <div className="shops wishlist-amount" onClick={showWishlist}>
                {wishItem.length}
              </div>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
      <div className="header-menu" onClick={closeNav}>
        <button
          className={`close-menu ${close ? "close-mb" : "close-pc"}`}
          onClick={showNavbar}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button
          className={`hamburger-menu ${
            close ? "hamburger-close" : "hamburger-open"
          }`}
          onClick={showNavbar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};
