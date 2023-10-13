import * as React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../checkout/Checkout.css";
import { Country } from "./country";
import MainFooter from "../../components/mainfooter/MainFooter";
import CheckoutCart from "./CheckoutCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/shopcontext";

const getFormData = () => {
  const storeData = localStorage.getItem("form");
  if (!storeData)
    return {
      email: "",
      fName: "",
      lName: "",
      country: "Cambodia",
      street: "",
      city: "",
      postcode: "",
      phone: "",
      coupon: "",
    };
  return JSON.parse(storeData);
};

export default function Checkout() {
  const [showCoupon, setShowCoupon] = React.useState(true);
  const [showStep, setShowStep] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [formData, setFormData] = React.useState(getFormData);
  const [focus, setFocus] = React.useState({
    errEmail: false,
    errfName: false,
    errlName: false,
    errStreet: false,
    errCity: false,
    errpCode: false,
    errPhone: false,
  });
  const [error, setError] = React.useState({
    focusEmail: false,
    focusfName: false,
    focuslName: false,
    focusStreet: false,
    focusCity: false,
    focuspCode: false,
    focusPhone: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = {};
    const REGEX =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formData.email.trim() || !REGEX.test(formData.email)) {
      validationError.email = "email";
    }
    if (!formData.fName.trim()) {
      validationError.fName = "fName";
    }
    if (!formData.lName.trim()) {
      validationError.lName = "lName";
    }
    if (!formData.street.trim()) {
      validationError.street = "street";
    }
    if (!formData.city.trim()) {
      validationError.city = "city";
    }
    if (!formData.postcode.trim()) {
      validationError.postcode = "postcode";
    }
    if (!formData.phone.trim()) {
      validationError.phone = "phone";
    }
    setError(validationError);
    if (
      !formData.email.trim() ||
      !formData.fName.trim() ||
      !formData.lName.trim() ||
      !formData.street.trim() ||
      !formData.city.trim() ||
      !formData.postcode.trim() ||
      !formData.phone.trim()
    ) {
      setShowStep(showStep);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (
      !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formData.email)
    ) {
      setShowStep(showStep);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setShowStep(!showStep);
    }
  };

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formData));
  }, [formData]);

  const { getTotalAmount } = React.useContext(ShopContext);

  const applyCoupon = (e) => {
    e.preventDefault();
    const validationError = {};
    if (formData.coupon === "") {
      validationError.coupon = "Please enter coupon code.";
    } else if (formData.coupon !== "JuJingyi") {
      validationError.coupon = "Coupon '' does not exist!";
    } else if (formData.coupon === "JuJingyi") {
      validationError.coupon = "Coupon Exist";
    } else if (formData.coupon === "ChengXiao") {
      validationError.coupon = "Coupon Exist";
    }
    setShowCode(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (formData.coupon !== "ChengXiao") {
      return getDiscount();
    } else {
      return getTotalAmount();
    }
  };

  const getDiscount = () => {
    let totalAmount = Number(getTotalAmount());
    if (formData.coupon === "JuJingyi") {
      totalAmount = totalAmount - (totalAmount * 20) / 100;
    } else if (formData.coupon === "ChengXiao") {
      totalAmount = totalAmount - (totalAmount * 40) / 100;
    } else {
      return getTotalAmount();
    }
    return totalAmount.toFixed(2);
  };

  const discountCoupon = () => {
    let discount = [];
    if (formData.coupon === "JuJingyi") {
      discount = "20";
    } else if (formData.coupon === "ChengXiao") {
      discount = "40";
    } else if (formData.coupon !== "ChengXiao") {
      discount = "0";
    } else if (formData.coupon !== "JuJingyi") {
      discount = "0";
    }
    return discount;
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });

    setShowCode(false);
  };

  const handleShow = () => {
    setShowCoupon(!showCoupon);
  };

  const unClick = (e) => {
    e.preventDefault(e);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <Navbar />
      <div className="checkout-content">
        <div className="checkout-container">
          <div className="content-area">
            <main className="site-main">
              <article className="checkout-box">
                <header className="entry-header">
                  <h1>Checkout</h1>
                  <div className="entry-content">
                    <div className="content-two-step-wrap">
                      <div className="content-step">
                        <ul className="content-embed-checkout-form-step">
                          <div
                            className={`step-one ${
                              showStep === false
                                ? "stepone-active"
                                : "steptwo-unactive"
                            }`}
                            onClick={handleSubmit}
                          >
                            <a href="/#customer-detail" onClick={unClick}>
                              <div className="step-number">1</div>
                              <div className="step-heading">
                                <div className="step-name">Shipping</div>
                                <div className="step-subname">
                                  Where to ship it?
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className={`step-two ${
                              showStep === true
                                ? "steptwo-active"
                                : "steptwo-unactive"
                            }`}
                            onClick={handleSubmit}
                          >
                            <a href="/#payment" onClick={unClick}>
                              <div className="step-number">2</div>
                              <div className="step-heading">
                                <div className="step-name">Payment</div>
                                <div className="step-subname">
                                  Of your order
                                </div>
                              </div>
                            </a>
                          </div>
                        </ul>
                      </div>
                      {showStep === false ? (
                        <div className="woocommerce">
                          <div className="woocommerce-notice-wrapper"></div>
                          {showCode ? (
                            <div className="code-msg">
                              {formData.coupon === "" ? (
                                <p>
                                  <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className="error-icon"
                                  />
                                  Please enter coupon code. 🤦‍♂️
                                </p>
                              ) : (
                                ""
                              )}
                              {formData.coupon !== "JuJingyi" &&
                              formData.coupon !== "ChengXiao" &&
                              formData.coupon !== "" ? (
                                <p>
                                  <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className="error-icon"
                                  />
                                  Coupon "{formData.coupon}" does not exist. 🤦‍♂️
                                </p>
                              ) : (
                                ""
                              )}
                              {formData.coupon === "JuJingyi" ||
                              formData.coupon === "ChengXiao" ? (
                                <p>
                                  <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className="check-icon"
                                  />
                                  Coupon was applied.&nbsp;
                                  <span>CONGRATULATION!</span>&nbsp;You got
                                  discount&nbsp;
                                  {discountCoupon()}%&nbsp;😜
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          ) : null}
                          <form
                            name="checkout"
                            method="post"
                            className="checkout_coupon"
                            onSubmit={handleSubmit}
                          >
                            <div className="checkout-field-wrapper">
                              <div className="customer-details">
                                <div className="col1">
                                  <div className="customer-info">
                                    <div className="customer-info__error"></div>
                                    <div className="checkout-billing-fields-custom">
                                      <div className="checkout-form-heading">
                                        <h3>Customer information</h3>
                                      </div>
                                      <div className="wrapper">
                                        <div className="custom-form-floating">
                                          <input
                                            id="test"
                                            className={`custom-form-input ${
                                              error.email && !error.focusEmail
                                                ? "instructions"
                                                : "offscreen"
                                            }`}
                                            placeholder="Username or Email Address *"
                                            onChange={handleChange}
                                            value={formData.email}
                                            autoComplete="off"
                                            type="text"
                                            name="email"
                                            required
                                            onBlur={() =>
                                              setFocus({
                                                ...focus,
                                                errEmail: true,
                                              })
                                            }
                                            onFocus={() =>
                                              setError({
                                                ...error,
                                                focusEmail: true,
                                              })
                                            }
                                            focus={focus.errEmail.toString()}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Username or Email Address *
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="woocommerce-billing-fields">
                                    <h3>Billing details</h3>
                                    <div className="billing-fields-wrapper">
                                      <div className="wrapper first-name">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            placeholder="First Name *"
                                            className={`custom-form-input ${
                                              error.fName && !error.focusfName
                                                ? "instructions"
                                                : "offscreen"
                                            }`}
                                            onChange={handleChange}
                                            value={formData.fName}
                                            autoComplete="off"
                                            type="text"
                                            name="fName"
                                            required
                                            onBlur={() =>
                                              setFocus({
                                                ...focus,
                                                errfName: true,
                                              })
                                            }
                                            onFocus={() =>
                                              setError({
                                                ...error,
                                                focusfName: true,
                                              })
                                            }
                                            focus={focus.errfName.toString()}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            First Name *
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper last-name">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            className={`custom-form-input ${
                                              error.lName && !error.focuslName
                                                ? "instructions"
                                                : "offscreen"
                                            }`}
                                            placeholder="Last Name *"
                                            onChange={handleChange}
                                            value={formData.lName}
                                            autoComplete="off"
                                            type="text"
                                            name="lName"
                                            required
                                            onBlur={() =>
                                              setFocus({
                                                ...focus,
                                                errlName: true,
                                              })
                                            }
                                            onFocus={() =>
                                              setError({
                                                ...error,
                                                focuslName: true,
                                              })
                                            }
                                            focus={focus.errlName.toString()}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Last Name *
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            className="custom-form-input"
                                            placeholder="Company Name"
                                            autoComplete="off"
                                            required={true}
                                            aria-required={true}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Company Name (optional)
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper">
                                        <div className="custom-form-floating custom-billing-floating search">
                                          <select
                                            id="country"
                                            className="custom-form-input custom-form-input_country"
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                          >
                                            {Country.map((item, idx) => (
                                              <option
                                                value={item.value}
                                                key={idx}
                                              >
                                                {item.value}
                                              </option>
                                            ))}
                                          </select>
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label country-floating country-label"
                                          >
                                            Country / Region&nbsp;*
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper st-name">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            className={`custom-form-input ${
                                              error.street && !error.focusStreet
                                                ? "instructions"
                                                : "offscreen"
                                            }`}
                                            placeholder="House number and street name"
                                            onChange={handleChange}
                                            value={formData.street}
                                            autoComplete="off"
                                            type="text"
                                            name="street"
                                            required
                                            onBlur={() =>
                                              setFocus({
                                                ...focus,
                                                errStreet: true,
                                              })
                                            }
                                            onFocus={() =>
                                              setError({
                                                ...error,
                                                focusStreet: true,
                                              })
                                            }
                                            focus={focus.errStreet.toString()}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Street address *
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper apartment">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            className="custom-form-input"
                                            placeholder="Apartment, suit, unit, etc. (optional)"
                                            required={true}
                                            aria-required={true}
                                            autoComplete="off"
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Apartment, suit, unit, etc.
                                            (optional)
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper town">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            className={`custom-form-input ${
                                              error.city && !error.focusCity
                                                ? "instructions"
                                                : "offscreen"
                                            }`}
                                            placeholder="Town / City *"
                                            onChange={handleChange}
                                            value={formData.city}
                                            autoComplete="off"
                                            type="text"
                                            name="city"
                                            required
                                            onBlur={() =>
                                              setFocus({
                                                ...focus,
                                                errCity: true,
                                              })
                                            }
                                            onFocus={() =>
                                              setError({
                                                ...error,
                                                focusCity: true,
                                              })
                                            }
                                            focus={focus.errCity.toString()}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Town / City *
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper postcode">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            className={`custom-form-input ${
                                              error.postcode &&
                                              !error.focuspCode
                                                ? "instructions"
                                                : "offscreen"
                                            }`}
                                            placeholder="Postcode / ZIP *"
                                            onChange={handleChange}
                                            value={formData.postcode}
                                            autoComplete="off"
                                            type="text"
                                            name="postcode"
                                            required
                                            onBlur={() =>
                                              setFocus({
                                                ...focus,
                                                errpCode: true,
                                              })
                                            }
                                            onFocus={() =>
                                              setError({
                                                ...error,
                                                focuspCode: true,
                                              })
                                            }
                                            focus={focus.errpCode.toString()}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Postcode / ZIP *
                                          </label>
                                        </div>
                                      </div>
                                      <div className="wrapper phone">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <input
                                            id="test"
                                            className={`custom-form-input ${
                                              error.phone && !error.focusPhone
                                                ? "instructions"
                                                : "offscreen"
                                            }`}
                                            placeholder="Phone *"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            autoComplete="off"
                                            type="text"
                                            name="phone"
                                            required
                                            onBlur={() =>
                                              setFocus({
                                                ...focus,
                                                errPhone: true,
                                              })
                                            }
                                            onFocus={() =>
                                              setError({
                                                ...error,
                                                focusPhone: true,
                                              })
                                            }
                                            focus={focus.errPhone.toString()}
                                          />
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Phone *
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="woocommerce-additional-fields">
                                    <h3>Additional information</h3>
                                    <div className="woocommerce-additional-fields__wrapper">
                                      <div className="wrapper phone">
                                        <div className="custom-form-floating custom-billing-floating">
                                          <textarea
                                            id="test"
                                            className="custom-form-input additional-textarea"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                            required={true}
                                            aria-required={true}
                                            autoComplete="off"
                                          ></textarea>
                                          <label
                                            htmlFor="test"
                                            className="custom-form-floating-label"
                                          >
                                            Order notes (optional)
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="coupon-code">
                                      {showCoupon ? (
                                        <p onClick={handleShow}>
                                          Have a coupon?
                                        </p>
                                      ) : (
                                        <div className="show-coupon">
                                          <input
                                            type="text"
                                            placeholder="Coupon code"
                                            onChange={handleChange}
                                            value={formData.coupon}
                                            autoComplete="off"
                                            name="coupon"
                                          />
                                          <button
                                            className="apply-coupon"
                                            onClick={applyCoupon}
                                            style={{
                                              display: visible
                                                ? "inline"
                                                : "none",
                                            }}
                                          >
                                            Apply
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              className="checkout-special-offer submit-detail"
                              type="submit"
                              onClick={handleSubmit}
                            >
                              <div className="next-btn">
                                <span className="next-btn-content">
                                  <span className="next-btn-icon-wrap">
                                    <span className="dashicon"></span>
                                    <span className="button-text">
                                      For Special Offer Click Here
                                    </span>
                                  </span>
                                  <span className="btn-sub-text">
                                    Yes! I want this offer!
                                  </span>
                                </span>
                              </div>
                            </button>
                          </form>
                        </div>
                      ) : null}
                      {showStep === true ? (
                        <div className="woocommerce-payment">
                          <div className="woocommerce-notice-wrapper"></div>
                          <CheckoutCart
                            getDiscount={getDiscount}
                            discountCoupon={discountCoupon}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </header>
              </article>
            </main>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
}
