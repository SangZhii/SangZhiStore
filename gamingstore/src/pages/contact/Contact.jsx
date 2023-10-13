import React, { useState } from "react";
import style from "../contact/contact.module.css";
import "./contact.css";
import { CONTACT } from "./contactdata";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import MainFooter from "../../components/mainfooter/MainFooter";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClose = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <Navbar />
      <div className={style.actionContainer}>
        <div className="latest-blog">
          <div className={style.col12}>
            <div className={`glitch ${style.latestblogTitle}`}>
              <span aria-hidden="true">About Us</span>
              <span> About Us</span>
              <span aria-hidden="true">About Us</span>
            </div>
          </div>
        </div>
        <div className={style.mainSlide}>
          {CONTACT.map((contact, idx) => (
            <div className={style.slide} key={idx}>
              <img src={contact.img} alt="about" />
            </div>
          ))}
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-form__column">
            <div className="left-column">
              <h5>Send Us A Message</h5>
              <div className="contact-email">
                <form action="email">
                  <div className="email-input__box">
                    <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                    <input type="text" placeholder="Your Email Address" />
                  </div>
                  <div className="textarea-box">
                    <textarea
                      name="contact"
                      text="text"
                      required="required"
                      placeholder="How Can We Help?"
                    ></textarea>
                  </div>
                </form>
                <button onClick={handleClick}>Submit</button>
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
                        <div
                          className="swal-btn-container"
                          onClick={handleClose}
                        >
                          <button>Ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="right-column__container">
              <div className="right-column__item">
                <div className="contact-address">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                  />
                  <div className="contact-street">
                    <h5>Address</h5>
                    <p>1234 Park Street Avenue,NY City America</p>
                  </div>
                </div>
                <div className="contact-phone">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <div className="contact-phone__number">
                    <h5>Lets Talk</h5>
                    <p>+1 800 1236879</p>
                  </div>
                </div>
                <div className="contact-email__info">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <div className="contact-email__acc">
                    <h5>24/7 Support</h5>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="location">
        <iframe
          title="myLocation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994313.118958409!2d102.33866127252288!3d12.132912669198255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2skh!4v1693814341585!5m2!1sen!2skh"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <MainFooter />
    </>
  );
};

export default Contact;
