import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo-02.png";
import "./navbar.css";
import { NAVIMAGE } from "./navimage";
import { DROPDOWN } from "./dropdown";
import { SUBHEADING } from "./subheading";
import CartNavs from "./CartNavs";
import { PRODUCT } from "../../product";
import { NavbarIcon } from "./NavbarIcon";
import Wishlist from "./Wishlist";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = ({ navbar }) => {
  const [pos, setPos] = useState("top");
  const [close, setClose] = useState(false);
  const [active, setActive] = useState(-1);
  const [hide, setHide] = useState(false);
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const emptyIcon = PRODUCT.filter(
    (item) => item.icon !== "" && item.icon !== null
  );

  const handleClick = (e, index) => {
    e.preventDefault();

    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };

  const handleSub = (e) => {
    e.preventDefault();
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  const showCart = () => {
    cartRef.current.classList.toggle("cart-responsive");
  };

  const showWishlist = () => {
    wishRef.current.classList.toggle("wishlist-responsive");
  };

  const wishRef = useRef();
  const cartRef = useRef();
  const navRef = useRef();
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  const navbarImage = NAVIMAGE.map((game, idx) => (
    <div className="game-items" key={idx}>
      <img src={game.image} alt="img" className="navbar-img" />
    </div>
  ));

  const hideNav = () => {
    setHide(!hide);
  };

  const closeNav = () => {
    setClose(!close);
  };

  const unClick = (e) => {
    e.preventDefault(e);
  };

  return (
    <>
      <div
        className={`navbar ${
          pos === "top" ? "top-nav-bg" : "bot-nav-bg"
        } ${navbar}`}
      >
        <a href="/#">
          <img src={logo} alt="" className="logo" />
        </a>
        <div className="nav-lists">
          <div className="dropdown">
            <NavLink to="/" className="link" activeclassname="active">
              <a
                href="/"
                id="home"
                className={[
                  splitLocation[1] === "homepage1" ? "header-active" : "",
                  splitLocation[1] === "homepage2" ? "header-active" : "",
                  splitLocation[1] === "homepage3" ? "header-active" : "",
                ].join(" ")}
              >
                Home
              </a>
              <div className="dropdown-menu">
                <NavLink
                  to="/homepage1"
                  role="menuitem"
                  className="header-link"
                >
                  Homepage 1
                </NavLink>
                <NavLink
                  to="/homepage2"
                  role="menuitem"
                  className="header-link"
                >
                  Homepage 2
                </NavLink>
                <NavLink
                  to="/homepage3"
                  role="menuitem"
                  className="header-link"
                >
                  Homepage 3
                </NavLink>
              </div>
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink to="/" onClick={unClick} className="link">
              <a
                href="/#"
                className={[
                  splitLocation[1] === "adventure" ? "header-active" : "",
                  splitLocation[1] === "sports" ? "header-active" : "",
                  splitLocation[1] === "kids" ? "header-active" : "",
                ].join(" ")}
              >
                Game Category
              </a>
              <div className="dropdown-menu">
                <NavLink
                  to="/adventure"
                  role="menuitem"
                  className="header-link"
                >
                  Action & Adventure
                </NavLink>
                <NavLink to="/sports" role="menuitem" className="header-link">
                  Sports
                </NavLink>
                <NavLink to="/kids" role="menuitem" className="header-link">
                  Kids and Family
                </NavLink>
              </div>
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink to="/" onClick={unClick} className="link blog">
              <a
                href="/"
                className={[
                  splitLocation[1] === "blogleft" ? "header-active" : "",
                  splitLocation[1] === "blogright" ? "header-active" : "",
                  splitLocation[1] === "blogfull" ? "header-active" : "",
                  splitLocation[1] === "blogdetail" ? "header-active" : "",
                ].join(" ")}
              >
                Blog
              </a>
              <div className="dropdown-menu">
                <NavLink to="/blogleft" role="menuitem">
                  Blog Left
                </NavLink>
                <NavLink
                  to="/blogright"
                  role="menuitem"
                  className="header-link"
                >
                  Blog Right
                </NavLink>
                <NavLink to="/blogfull" role="menuitem" className="header-link">
                  Blog Full Width
                </NavLink>
                <NavLink
                  to="/blogdetail"
                  role="menuitem"
                  className="header-link"
                >
                  Blog Detail
                </NavLink>
              </div>
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink to="/" onClick={unClick} className="link">
              <a
                href="/"
                className={[
                  splitLocation[1] === "cart" ? "header-active" : "",
                  splitLocation[1] === "productdetail" ? "header-active" : "",
                ].join(" ")}
              >
                Product
              </a>
              <div className="dropdown-menu">
                <NavLink to="/cart" role="menuitem" className="header-link">
                  Shopping Cart
                </NavLink>
                <NavLink
                  to="/productdetail"
                  role="menuitem"
                  className="header-link"
                >
                  Product Detail
                </NavLink>
              </div>
            </NavLink>
          </div>
          <NavLink
            to="/about"
            role="menuitem"
            className="link"
            activeclassname="active"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            role="menuitem"
            className="link"
            activeclassname="active"
          >
            Contact
          </NavLink>
        </div>
        {emptyIcon.map((icon, idx) => (
          <NavbarIcon
            icon={icon}
            key={idx}
            showCart={showCart}
            closeNav={closeNav}
            showNavbar={showNavbar}
            showWishlist={showWishlist}
            close={close}
          />
        ))}
      </div>

      {/* Sidebar  */}
      <nav className="main-sidebar">
        <div className={`side-bar ${hide ? "hide" : "showw"}`} ref={navRef}>
          <div className="close-btn">
            <button
              className="close-menu"
              onClick={showNavbar}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="sidebar-list">
            <Link to="/" className="side-link">
              <a href="/#">Home</a>
            </Link>
            <Link to="/" className="side-link">
              <a href="/#">My Watchlist</a>
            </Link>
            <Link to="/" className="side-link">
              <a href="/#">My Account</a>
            </Link>
            <Link to="/" className="side-link">
              <a href="/#">Track Order</a>
            </Link>
            <Link to="/" className="side-link">
              <a href="/#">Refunds</a>
            </Link>
            <Link to="/" className="side-link">
              <a href="/#">Help & FAQs</a>
            </Link>
          </div>
          <h1 className="games">@Games</h1>
          <div className="game-lists">{navbarImage}</div>
          <div className="about-us">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              maximus vulputate hendrerit. Praesent faucibus erat vitae rutrum
              gravida. Vestibulum tempus mi enim, in molestie sem fermentum
              quis.
            </p>
          </div>

          <div className={`sidebar-mobile ${hide ? "hide" : "showw"}`}>
            {DROPDOWN.map((drop, index) => (
              <div
                className="dropdown"
                onClick={(e) => handleClick(e, index)}
                key={index}
              >
                <Link to="/">
                  <a href="/#" className={`active ${drop.className}`}>
                    {drop.heading}
                  </a>
                  {active === index ? (
                    <div className="dropdown-menu-mb" onClick={hideNav}>
                      <div
                        className={`dropdown-menu-mb ${drop.className}`}
                        key={index}
                        onClick={(e) => handleSub(e)}
                      >
                        <Link to={drop.to1} className="subheading">
                          <a href="/#" onClick={closeNav}>
                            {drop.subHeading1}
                          </a>
                        </Link>
                        <Link to={drop.to2} className="subheading">
                          <a href="/#" onClick={closeNav}>
                            {drop.subHeading2}
                          </a>
                        </Link>
                        <Link to={drop.to3} className="subheading">
                          <a href="/#" onClick={closeNav}>
                            {drop.subHeading3}
                          </a>
                        </Link>
                        <Link
                          to={drop.to4}
                          className={`subheading ${drop.className}`}
                        >
                          <a href="/#" onClick={closeNav}>
                            {drop.subHeading4}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ) : null}
                  <button className={active !== index ? "btn " : "btn close"}>
                    {drop.closeIcon}
                  </button>
                  {active === index
                    ? [
                        SUBHEADING.map((heading, index) => (
                          <div
                            className={`showDrop ${drop.className}`}
                            key={index}
                          >
                            <div
                              className={`right-arrow ${
                                active
                                  ? "right-arrow-open close"
                                  : "right-arrow-open"
                              }`}
                              onClick={(e) => handleSub(e)}
                            >
                              <button className="dropdown-btn">
                                {heading.closeIcon}
                              </button>
                            </div>

                            <div
                              className={`down-arrow ${
                                active
                                  ? "down-arrow-open close"
                                  : "down-arrow-open"
                              }`}
                            >
                              <button className="dropdown-btn">
                                {heading.downIcon}
                              </button>
                            </div>
                          </div>
                        )),
                      ]
                    : null}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Sidebar Mobile  */}

      {/* Cart */}
      <CartNavs hide={hide} cartRef={cartRef} showCart={showCart} />
      <Wishlist hide={hide} wishRef={wishRef} showWishlist={showWishlist} />
    </>
  );
};

export default Navbar;
