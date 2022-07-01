import React from "react";
import banner from "../../../../image/banner.png";
import "./Banner.local.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt="Banner" />
      <div className="banner-text">
        <div>
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
