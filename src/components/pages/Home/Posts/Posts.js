import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./Posts.local.css";
import meetup from "../../../../image/meetup.png";
import ronal from "../../../../image/ronal-jones.png";
import joseph from "../../../../image/joseph.png";
import Recommended from "./Recommended";
import leisure from "../../../../image/leisure.png";
import activism from "../../../../image/activisim.png";
import mba from "../../../../image/mba.png";
import Philosophy from "../../../../image/pl=hilosophy.png";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    fetch("Posts.json")
      .then((res) => res.json())
      .then((data) => getPosts(data));
  }, []);

  const checkbox = document.getElementById("check");
  const joinBtn = document.getElementById("joinBtn");

  const handleCheck = () => {
    console.log(checkbox.checked);
    if (checkbox.checked) {
      joinBtn.innerHTML = `<span><i className="fa-solid fa-user-plus"></i> Leave Group</span>`;
      joinBtn.classList.remove("btn-primary");
      document.getElementById("recommended").style.display = "block";
    } else {
      joinBtn.innerHTML = `<span><i className="fa-solid fa-user-plus"></i>  Join Group</span>`;
      document.getElementById("recommended").style.display = "none";
    }
  };

  return (
    <div className="container">
      <div className="post-container pt-lg-5">
        <div
          className="nav nav-tabs sticky-top bg-white"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="nav-all-posts-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-all-posts"
            type="button"
            role="tab"
            aria-controls="nav-all-posts"
            aria-selected="true"
          >
            All Posts(32)
          </button>
          <button
            className="nav-link"
            id="nav-article-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-article"
            type="button"
            role="tab"
            aria-controls="nav-article"
            aria-selected="false"
          >
            Article
          </button>
          <button
            className="nav-link"
            id="nav-event-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-event"
            type="button"
            role="tab"
            aria-controls="nav-event"
            aria-selected="false"
          >
            Event
          </button>
          <button
            className="nav-link"
            id="nav-education-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-education"
            type="button"
            role="tab"
            aria-controls="nav-education"
            aria-selected="false"
          >
            Education
          </button>
          <button
            className="nav-link"
            id="nav-job-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-job"
            type="button"
            role="tab"
            aria-controls="nav-job"
            aria-selected="false"
          >
            Job
          </button>
          <div className="ms-auto my-auto">
            <button className="btn btn-light">
              Write a Post <i className="fas fa-caret-down text-dark"></i>
            </button>
            <label htmlFor="check" className="btn btn-primary text-white mx-2">
              <input
                type="checkbox"
                className="d-none"
                id="check"
                onChange={handleCheck}
              />
              <span id="joinBtn">
                <i className="fa-solid fa-user-plus"></i> Join Group
              </span>
            </label>
          </div>
        </div>

        <div className="tab-content container" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-all-posts"
            role="tabpanel"
            aria-labelledby="nav-all-posts-tab"
          >
            <div className="row mt-3">
              <div className="col-12 col-lg-8 px-0">
                {posts.map((post) => (
                  <PostCard
                    img={post.img}
                    description={post.description}
                    category={post.category}
                    title={post.title}
                    icon={post.icon}
                    author={post.author}
                    authorImage={post.authorImage}
                  ></PostCard>
                ))}

                <div className="card my-3 col-12">
                  <img src={meetup} className="card-img-top" alt="blank" />
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <i class="fa-solid fa-calendar"></i>
                      <h6 className="ms-2 mt-2">Meetup</h6>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <h5 className="card-title">
                          Finance & Investment Elite Social Mixer @Lujiazui{" "}
                        </h5>
                        <div className="d-flex justify-content-between">
                          <div>
                            {" "}
                            <i className="fa fa-calendar"></i>
                            <span className="ms-2">Fri, 12 Oct, 2018</span>
                          </div>
                          <div>
                            <i className="fa fa-location-dot"></i>
                            <span className="ms-2">Ahmedabad, India</span>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div className="col-2 text-end">
                        <div className="dropdown">
                          <button
                            id="dropdownMenu2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="btn btn-default"
                          >
                            <i className="fa-solid fa-ellipsis"></i>
                          </button>
                          <ul
                            className="dropdown-menu shadow border-0"
                            aria-labelledby="dropdownMenu2"
                          >
                            <li>
                              <button className="dropdown-item" type="button">
                                Edit
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item" type="button">
                                Report
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item" type="button">
                                Option 3
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p className="card-text">
                      <a
                        href="#"
                        className="d-block border text-center py-2 text-decoration-none text-danger rounded-3 mt-3"
                      >
                        Visit Website
                      </a>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={ronal}
                          className="img-responsive w-25"
                          alt=""
                        />
                        <h6>Ronal Jones</h6>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="d-flex align-items-center gap-1">
                          <i className="fa fa-eye"></i>
                          <span>1.4k Views</span>
                        </div>
                        <i className="fa-solid fa-share-nodes"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card p-3">
                  <div>
                    <i class="fas fa-briefcase"></i>
                  </div>
                  <h4>Software Development</h4>
                  <div className="row row-cols-2">
                    <div className="col">
                      <i class="fas fa-briefcase "></i>
                      <span className="ms-2">
                        Innovaccer Analytics Private Ltd.
                      </span>
                    </div>
                    <div className="col">
                      <i class="fa fa-location-dot"></i>
                      <span className="ms-2">Noida, India</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="d-block border text-center py-2 text-decoration-none text-success rounded-3 mt-3"
                  >
                    Visit Website
                  </a>
                  <div className="d-flex align-items-center justify-content-between gap-2 py-3">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={joseph}
                        className="img-responsive"
                        width="50px"
                        alt=""
                      />
                      <h6>Joseph Gray</h6>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-1">
                        <i class="fa fa-eye"></i>
                        <span>1.4k Views</span>
                      </div>
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 px-0 mt-3 ps-4">
                <div class="input-group mb-3">
                  <span
                    class="input-group-text bg-white border-start-0 border-end-0 border-top-0"
                    id="basic-addon1"
                  >
                    <i class="fa fa-location-dot"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control border-start-0 border-end-0 border-top-0"
                    placeholder="Enter Your Location"
                    aria-describedby="basic-addon1"
                  />
                  <span
                    class="input-group-text bg-white border-start-0 border-end-0 border-top-0"
                    id="basic-addon1"
                  >
                    <i class="fa-solid fa-pen"></i>
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2 my-5">
                  <i class="fas fa-circle-exclamation"></i>
                  <span>
                    Your location will help us serve better and extend a
                    personalised experience.
                  </span>
                </div>

                <div id="recommended">
                  <h3 className="text-uppercase">
                    <i class="fa fa-thumbs-up me-3"></i>Recommended Groups
                  </h3>
                  <Recommended
                    groupImage={leisure}
                    title="Leisure"
                  ></Recommended>
                  <Recommended
                    groupImage={activism}
                    title="Activism"
                  ></Recommended>
                  <Recommended groupImage={mba} title="MBA"></Recommended>
                  <Recommended
                    groupImage={Philosophy}
                    title="Philosophy"
                  ></Recommended>
                  <div className="text-end pt-4">
                    <a className="mt-5 text-decoration-none" href="#">
                      See More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-article"
            role="tabpanel"
            aria-labelledby="nav-article-tab"
          >
            Articles
          </div>
          <div
            className="tab-pane fade"
            id="nav-event"
            role="tabpanel"
            aria-labelledby="nav-event-tab"
          >
            Events
          </div>
          <div
            className="tab-pane fade"
            id="nav-education"
            role="tabpanel"
            aria-labelledby="nav-education-tab"
          >
            Education
          </div>
          <div
            className="tab-pane fade"
            id="nav-job"
            role="tabpanel"
            aria-labelledby="nav-job-tab"
          >
            Jobs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
