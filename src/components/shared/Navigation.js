import React from "react";
import logo from "../../image/logo.png";

const Navigation = () => {
  return (
    <div className="bg-white sticky-top">
      <div className="container d-none d-lg-block">
        <div className="row align-items-center py-4">
          <div className="col-4">
            <a className="navbar-brand" href="javascript.void(0)">
              <img src={logo} alt="" className="w-50" />
            </a>
          </div>
          <div className="col-4">
            <div class="input-group rounded-pill bg-light">
              <span
                class="input-group-text bg-transparent border-0 ms-2"
                id="basic-addon1"
              >
                <i class="fa fa-search"></i>
              </span>
              <input
                type="text"
                class="form-control border-0 bg-light rounded-pill"
                placeholder="Search For Your Favorite Groups in ATG"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="text-end">
              Create Account{" "}
              <a
                className="text-decoration-none fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                It's Free! <i class="fas fa-caret-down text-dark"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
