import React, { useState } from "react";
import "./description.css";
import { CATEGORY } from "./descriptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Description = () => {
  const [active, setActive] = useState(1);

  const filter = (index) => {
    setActive(index);
  };

  const emptyvalue = CATEGORY.filter(
    (item) => item.p !== "" && item.p !== null
  );

  const emptyValues2 = CATEGORY.filter(
    (item) => item.console1 !== "" && item.console1 !== null,
    (item) => item.console2 !== "" && item.console2 !== null,
    (item) => item.console3 !== "" && item.console3 !== null,
    (item) => item.console4 !== "" && item.console4 !== null
  );

  const emptyValue3 = CATEGORY.filter(
    (item) => item.img !== "" && item.img !== null,
    (item) => item.console1 !== "" && item.console1 !== null,
    (item) => item.console2 !== "" && item.console2 !== null,
    (item) => item.console3 !== "" && item.console3 !== null,
    (item) => item.console4 !== "" && item.console4 !== null
  );

  return (
    <>
      <div className="description-container">
        <div className="description-list">
          <div className="description-option">
            <ul>
              <li
                onClick={() => filter(1)}
                className={active === 1 ? "filter filter-active" : "filter"}
              >
                Description
              </li>
              <li
                onClick={() => filter(2)}
                className={active === 2 ? "filter filter-active" : "filter"}
              >
                Additional information
              </li>
              <li
                onClick={() => filter(3)}
                className={active === 3 ? "filter filter-active" : "filter"}
              >
                Reviews (1)
              </li>
            </ul>
          </div>
          <div className="description">
            {emptyvalue.map((item, idx) => (
              <div
                className={
                  active === 1
                    ? "description-detail filter-content"
                    : "description-detail"
                }
                key={idx}
              >
                <p>{item.p}</p>
              </div>
            ))}
          </div>
          <div className="description-additional__container">
            {emptyValues2.map((info, idx) => (
              <div
                className={
                  active === 2
                    ? "description-additional filter-content"
                    : "description-additional"
                }
                key={idx}
              >
                <ul>
                  <li>
                    <span className="title">{info.title}</span>
                    <span className="child">{info.category}</span>
                  </li>
                  <li>
                    <span className="title">{info.onSale}</span>
                    <span>{info.answer}</span>
                  </li>
                  <li>
                    <span className="title">{info.available}</span>
                    <div className="console">
                      <ul>
                        <li>
                          <a href="/#">{info.console1}</a>
                        </li>
                        <li>
                          <a href="/#">{info.console2}</a>
                        </li>
                        <li>
                          <a href="/#">{info.console3}</a>
                        </li>
                        <li>
                          <a href="/#">{info.console4}</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="description-info__containter">
            {emptyValue3.map((review, idx) => (
              <div
                className={
                  active === 3
                    ? "description-info filter-content"
                    : "description-info"
                }
                key={idx}
              >
                <div className="description-info__list">
                  <div className="description-info__pf">
                    <img src={review.img} alt="jjy" />
                  </div>
                  <div className="description-info__item">
                    <div className="description-info__name">
                      <h5>{review.name}</h5>
                      <div className="description-info__rate">
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon
                          icon="fa-regular fa-star"
                          className="star"
                        />
                      </div>
                    </div>
                    <div className="description-info__about">
                      <p>{review.feedback}</p>
                    </div>
                  </div>
                </div>
                <div className="description-review">
                  <p>
                    Your email will not be published. Required fields are
                    market*
                  </p>
                  <div className="description-review__rating">
                    <h5>Your Raing</h5>
                    <form action="" method="post" className="description-form">
                      <p className="clasificacion">
                        <input
                          id="radio1"
                          type="radio"
                          name="estrellas"
                          value="5"
                        />
                        <label htmlFor="radio1">&#9733;</label>
                        <input
                          id="radio2"
                          type="radio"
                          name="estrellas"
                          value="4"
                        />
                        <label htmlFor="radio2">&#9733;</label>
                        <input
                          id="radio3"
                          type="radio"
                          name="estrellas"
                          value="3"
                        />
                        <label htmlFor="radio3">&#9733;</label>
                        <input
                          id="radio4"
                          type="radio"
                          name="estrellas"
                          value="2"
                        />
                        <label htmlFor="radio4">&#9733;</label>
                        <input
                          id="radio5"
                          type="radio"
                          name="estrellas"
                          value="1"
                        />
                        <label htmlFor="radio5">&#9733;</label>
                      </p>
                    </form>
                  </div>
                  <div className="description-inputbox__container">
                    <h5>Your review</h5>
                    <div className="description-email__input">
                      <form action="email">
                        <div className="description-comment__inputbox">
                          <textarea
                            name="cmt"
                            type="text"
                            required="required"
                          />
                        </div>
                        <div className="description-email__inputbox">
                          <div className="input-name">
                            <h5>Name</h5>
                            <input type="text" required="required" />
                          </div>
                          <div className="input-email">
                            <h5>Email</h5>
                            <input type="text" required="required" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="description-footer">
          <p>Sku: Jak-01</p>
          <p>Category: Kids and Family</p>
        </div>
      </div>
    </>
  );
};

export default Description;
