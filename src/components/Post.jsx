import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Post({ post }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* <Link to={`/blog/${post.id}`}>View</Link> */}
      <button
        onClick={() => {
          navigate(`/blog/${post.id}`);
        }}
      >
        View
      </button>
    </div>
  );
}
