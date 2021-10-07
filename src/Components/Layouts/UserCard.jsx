import React from "react";

const UserCard = ({ image, username, url }) => {
  return (
    <React.Fragment>
      <div className="card card-shadow">
        <img src={image} className="img-fluid card-img" alt={username} />
        <div className="card-body">
          <h5 className="card-title text-center">{username}</h5>
          <a
            type="button"
            href="/user/:username"
            className="btn btn-custom-color"
          >
            View More
          </a>
          <a
            type="button"
            href={"https://www.github.com/" + username}
            target="_blank"
            rel="noopener noreferrer"
            className="btn github-button my-1"
          >
            View on Github
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCard;