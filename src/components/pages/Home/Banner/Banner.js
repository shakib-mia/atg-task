import React from "react";
import banner from "../../../../image/banner.png";
import "./Banner.local.css";

const Banner = () => {
  const handleCheck = () => {
    const check = document.getElementById("check");
    const joinBtn = document.getElementById("join-btn");
    const leaveBtn = document.getElementById("leave-btn");

    if (check.checked) {
      joinBtn.style.display = "none";
      leaveBtn.style.display = "block";
    } else {
      joinBtn.style.display = "block";
      leaveBtn.style.display = "none";
    }
  };

  return (
    <div className="banner-container">
      <img src={banner} alt="Banner" />
      <div className="banner-text d-flex flex-column justify-content-between">
        <div className="d-flex d-md-none justify-content-between pt-3">
          <div>
            <i className="fa-solid fa-arrow-left" role="button"></i>
          </div>
          <div>
            <input
              onChange={handleCheck}
              type="checkbox"
              className="d-none"
              id="check"
            />
            <label
              htmlFor="check"
              type="button"
              className="btn btn-outline-light"
              id="join-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Join Group
            </label>
            <label
              htmlFor="check"
              type="button"
              className="btn btn-outline-light"
              style={{ display: "none" }}
              id="leave-btn"
            >
              Leave Group
            </label>
          </div>
        </div>
        <div>
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
