import React, { useState } from "react";
import "../mainfooter/footer.css";
import logo from "../../assets/logo-02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { COMPANY, FOOTER, FOOTERIMAGE, SOCIAL } from "./footer";

const MainFooter = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClose = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="footer-container">
      <img src={logo} alt="logo" />
      <div className="store-information__container">
        <div className="store-information__lists">
          <h4>Store Information</h4>
          <div className="store-information__items">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <span>1234 Park Street Avenue,NY City America</span>
          </div>
          <div className="store-information__items">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span> +88 014 386 969143,+88 014 419 67683</span>
          </div>
          <div className="store-information__items">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>info@example.com</span>
          </div>

          <div className="payment-method-container">
            {FOOTERIMAGE.map((pay, idx) => (
              <div className="payment-method-items" key={idx}>
                <img src={pay.image} alt="payment" />
              </div>
            ))}
          </div>
        </div>

        <div className="useful-links__container">
          {FOOTER.map((footer, idx) => (
            <div className="useful-links__lists" key={idx}>
              <h3>{footer.main}</h3>
              <div className="useful-links__items">
                <ul>
                  <li className={footer.className}>{footer.list}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="company__container">
          {COMPANY.map((footer, idx) => (
            <div className="company__lists" key={idx}>
              <h5>{footer.main2}</h5>
              <div className="company__items">
                <ul>
                  <li className={footer.className}>{footer.list2}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="newsletter__container">
          <h2>Newsletter</h2>
          <div className="newsletter__email">
            <form action="input">
              <div className="inputBox">
                <input type="text" required="required" />
                <span>email@example.com</span>
                <i></i>
              </div>
            </form>
            <div className="paper-plane">
              <button onClick={handleClick}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>

          <div className="social__container">
            <h4>Get Social</h4>
            <div className="social__icon">
              {SOCIAL.map((social, idx) => (
                <div className="social__icon-items" key={idx}>
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
          {isClicked && (
            <div className="show-overlay">
              <div className="show-modal">
                <div className="swal-success__icon">
                  <span className="swal-icon--success-long"></span>
                  <span className="swal--icon--sucess-tip"></span>
                  <div className="swal-icon--success__ring"></div>
                  <div className="swal-icon--success__hide-corners"></div>
                </div>
                <div className="swal__title">Sent Successfully</div>
                <div className="swal__text">Done</div>
                <div className="swal__footer">
                  <div className="swal-btn-container" onClick={handleClose}>
                    <button>Ok</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © All rights reserved | Made by <span>Eng Bunseu</span>
        </p>
      </div>
    </div>
  );
};

export default MainFooter;
