import { useEffect, useState } from "react";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
export function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return posts;
}
