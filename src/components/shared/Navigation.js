import React from "react";
import logo from "../../image/logo.png";

const Navigation = () => {
  return (
    <div className="bg-white sticky-top">
      <div className="container d-none d-md-block">
        <div className="row align-items-center py-4">
          <div className="col-4">
            <a className="navbar-brand" href="https://www.atg.world/">
              <img src={logo} alt="" className="w-50" />
            </a>
          </div>
          <div className="col-4">
            <div className="input-group rounded-pill bg-light">
              <span
                className="input-group-text bg-transparent border-0 ms-2"
                id="basic-addon1"
              >
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light rounded-pill"
                placeholder="Search For Your Favorite Groups in ATG"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="text-end">
              Create Account{" "}
              <span
                className="text-primary fw-bold"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                It's Free! <i className="fas fa-caret-down text-dark"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
