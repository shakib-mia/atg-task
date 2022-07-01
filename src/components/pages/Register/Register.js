import React from "react";
import register from "../../../image/register.png";
import "./Register.local.css";
import google from "../../../image/google.png";

const Register = () => {
  const handleChange = () => {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
  };

  return (
    <div id="register">
      <div
        class="modal fade position-absolute"
        style={{ top: "8vw" }}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabe2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div class="modal-content position-relative mt-5">
            <button
              type="button"
              class="btn-close position-absolute bg-white p-2 rounded-circle"
              style={{ right: -15, top: -45 }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div class="modal-body p-0">
              <div
                style={{ backgroundColor: "rgba(25, 135, 84,0.2)" }}
                className="px-3 py-2"
              >
                <div className="text-success text-center">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </div>
              </div>
            </div>
            <div className="row p-4">
              <div className="col-6">
                <h1 className="ps-3">Create Account</h1>
                <div className="input-group mx-3">
                  <div className="d-flex">
                    <input
                      className="bg-light border-1 py-1"
                      style={{ marginLeft: -1, width: "11vw" }}
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="bg-light border-1 py-1"
                      style={{ marginRight: 0, width: "11.58vw" }}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    className="bg-light border-1 py-1"
                    style={{ width: "100vw", marginRight: 4 }}
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="bg-light border-1 py-1"
                    style={{ width: "100vw", marginRight: 4 }}
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="bg-light border-1 py-1"
                    style={{ width: "100vw", marginRight: 4 }}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="btn btn-primary rounded-pill d-block ms-3 mt-3">
                  Create Account
                </div>
                <div className="btn border-1 border-secondary rounded d-block ms-3 mt-3">
                  <i class="fa-brands fa-facebook me-3"></i>
                  Continue With Facebook
                </div>
                <div className="btn border-1 border-secondary rounded d-block ms-3 mt-3">
                  <img className="me-3" src={google} alt="" />
                  Continue With Facebook
                </div>
              </div>
              <div className="col-6">
                <h6 className="text-end">
                  Already Have an Account?{" "}
                  <span
                    role="button"
                    className="text-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Sign In
                  </span>
                </h6>
                <img src={register} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
