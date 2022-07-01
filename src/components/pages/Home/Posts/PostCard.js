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
    <div className="card my-3 col-12">
      <img src={img} className="card-img-top" alt="blank" />
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h6 className="ms-2">{category}</h6>
        </div>
        <div className="row">
          <div className="col-10">
            <h5 className="card-title">{title}</h5>
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
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img src={authorImage} className="img-responsive w-25" alt="" />
            <div>{author}</div>
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
  );
};

export default PostCard;
