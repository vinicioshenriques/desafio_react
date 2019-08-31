import React from "react";
import Comment from "./Comment";

function Post({ post }) {
  return (
    <li>
      <div className="post-card">
        <div className="post-header">
          <div className="avatar-container">
            <img className="avatar" src={post.author.avatar} alt="Avatar"></img>
          </div>
          <div className="header-informations">
            <p className="poster-name">{post.author.name}</p>
            <p className="post-date">{post.date}</p>
          </div>
        </div>
        <div className="post-body">
          <p className="post-content">{post.content}</p>
        </div>
        <div className="post-footer">
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </li>
  );
}

export default Post;
