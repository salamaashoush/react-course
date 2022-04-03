import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../components/Post";
import { usePosts } from "../hooks/usePosts";

export function Blog() {
  const posts = usePosts();

  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Hello</h1>
      <p>Here is you list of posts </p>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
