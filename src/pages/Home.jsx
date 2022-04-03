import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link to="/todos">Todos</Link> | <Link to="/blog">Blog</Link>
    </div>
  );
}
