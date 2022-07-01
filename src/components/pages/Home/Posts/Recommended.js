import React from "react";

const Recommended = ({ groupImage, title, width }) => {
  const followClick = () => {
    document.getElementById("followClick").innerText = "Following";
    document.getElementById("followClick").style.backgroundColor = "black";
    document.getElementById("followClick").style.color = "white";
  };
  return (
    <div className="row py-2 align-items-center">
      <div className="col-3">
        <img src={groupImage} alt="" />
      </div>
      <div className="col-5">{title}</div>
      <div className="col-4">
        <button
          className="btn rounded-pill px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          id="followClick"
          onClick={followClick}
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default Recommended;
