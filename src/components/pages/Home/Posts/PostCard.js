import React from "react";

const PostCard = ({
  category,
  title,
  description,
  img,
  icon,
  author,
  authorImage,
}) => {
  return (
    <div class="card my-3 col-12">
      <img src={img} class="card-img-top" alt="blank" />
      <div class="card-body">
        <div className="d-flex align-items-center">
          <h6 className="ms-2">{category}</h6>
        </div>
        <div className="row">
          <div className="col-10">
            <h5 class="card-title">{title}</h5>
          </div>
          <div className="col-2 text-end">
            <div class="dropdown">
              <button
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="btn btn-default"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
              <ul
                class="dropdown-menu shadow border-0"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <button class="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Option 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img src={authorImage} className="img-responsive w-25" alt="" />
            <div>{author}</div>
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
  );
};

export default PostCard;
