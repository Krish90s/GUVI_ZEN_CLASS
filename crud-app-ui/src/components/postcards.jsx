import React from "react";

const PostCards = (props) => {
  return (
    <div className="card my-4">
      <h5 className="card-header">{props.title}</h5>
      <div className="card-body">
        <p className="card-text">{props.body}</p>
      </div>
    </div>
  );
};

export default PostCards;
