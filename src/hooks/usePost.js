import { useEffect, useState } from "react";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
export function usePost(postId) {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${postsUrl}/${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        setIsLoading(false);
      });
  }, [postId]);

  return { post, isLoading };
}
