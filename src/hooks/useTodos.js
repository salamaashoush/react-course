import { useEffect, useState } from "react";
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [refreshCount, setRefresh] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setIsLoading(false);
      });
  }, [refreshCount]);

  return {
    todos,
    setTodos,
    refetch: () => setRefresh((count) => count + 1),
    isLoading,
  };
}
