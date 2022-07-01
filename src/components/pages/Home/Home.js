import React from "react";
import Banner from "./Banner/Banner";
import Posts from "./Posts/Posts";

const Home = () => {
  return (
    <div>
      <div className="fixed-bottom text-end d-md-none p-3">
        <i
          className="fa fa-pen p-4 rounded-circle"
          style={{ backgroundColor: "#FF6B6B" }}
        ></i>
      </div>
      <Banner></Banner>
      <Posts></Posts>
    </div>
  );
};

export default Home;
