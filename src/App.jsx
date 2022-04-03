import { useState, useEffect } from "react";
import { Dashboard } from "./pages/Dashboard";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodosHome } from "./pages/TodosHome";
import { useTodos } from "./hooks/useTodos";
import { TodosContext, TodosProvider } from "./todosContext";
import { Blog } from "./pages/Blog";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ViewPost } from "./pages/ViewPost";
function App() {
  const todosApi = useTodos();
  const [username, setUserName] = useState("Salama");
  const [page, setPage] = useState("todos");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route
        path="todos"
        element={
          <TodosProvider value={{ ...todosApi, username }}>
            <TodosHome />
          </TodosProvider>
        }
      />
      <Route path="blog/:postId" element={<ViewPost />} />
    </Routes>
  );
}

export default App;
