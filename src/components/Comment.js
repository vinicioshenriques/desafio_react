import React from "react";

// import { Container } from './styles';

function Comment({ comment }) {
  return (
    <div className="comment-container">
      <div className="avatar-container">
        <img className="avatar" src={comment.author.avatar} alt="Avatar"></img>
      </div>

      <div className="comment-details">
        <p className="comment-content">
          <span className="author-name">{comment.author.name}</span>
          {comment.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
