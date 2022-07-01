import React from "react";
import register from "../../../image/register.png";
import "./Register.local.css";
import google from "../../../image/google.png";

const Register = () => {
  return (
    <div>
      <div
        class="modal fade position-absolute"
        style={{ top: 10 }}
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabe2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div class="modal-content position-relative">
            <button
              type="button"
              class="btn-close position-absolute bg-white p-2 rounded-circle"
              style={{ right: -20, top: -30 }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div class="modal-body p-0">
              <div
                style={{ backgroundColor: "rgba(25, 135, 84,0.2)" }}
                className="px-3 py-2"
              >
                <div className="text-success">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign Up Now.{" "}
                  <i class="fa fa-hand-horns"></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h1>Create Account</h1>
                <div className="input-group mx-3">
                  <div className="d-flex">
                    <input
                      className="bg-light border-1 py-1"
                      type="text"
                      style={{ width: "12vw" }}
                      placeholder="First Name"
                    />
                    <input
                      className="bg-light border-1 py-1"
                      type="text"
                      style={{ width: "12vw" }}
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
                <div className="btn border-1 border-primary text-primary rounded-pill d-block ms-3 mt-3">
                  <i class="fa-brands fa-facebook text-primary me-3"></i>
                  Continue With Facebook
                </div>
                <div className="btn border-1 border-success text-success rounded-pill d-block ms-3 mt-3">
                  <img className="me-3" src={google} alt="" />
                  Continue With Facebook
                </div>
              </div>
              <div className="col-6">
                <h5>
                  Already Have an Account?{" "}
                  <a
                    href="#"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Sign In
                  </a>
                </h5>
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
