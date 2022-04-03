import { createContext } from "react";

// Context (value)
// -- Provider (value)
// -- Consumer (value)

export const TodosContext = createContext({
  todos: [],
  refetch: () => {},
  setTodos: () => {},
  username: "",
  isLoading: false,
});

const { Provider, Consumer } = TodosContext;
export const TodosProvider = Provider;
export const TodosConsumer = Consumer;
