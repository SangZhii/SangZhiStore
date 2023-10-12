import React from "react";

const AboutItem = ({ about }) => {
  const { img, title, p1, p2, p3, infoStyle, pstyle } = about;
  return (
    <div className="about-item">
      <div className={`about-item__info ${infoStyle}`}>
        <div className="about-item__info__detail">
          <h4>{title}</h4>
          <p>{p1}</p>
          <div className={pstyle}>
            <p>{p2}</p>
            <p className="steve">{p3}</p>
          </div>
        </div>
        <div className="about-info__image">
          <div className="about-info__image__border">
            <img src={img} alt="aboutimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
