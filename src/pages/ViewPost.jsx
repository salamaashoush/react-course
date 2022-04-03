import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";

export function ViewPost() {
  const { postId } = useParams();
  const { post, isLoading } = usePost(postId);
  return (
    <div>
      ViewPost {postId}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        post && (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      )}
    </div>
  );
}
