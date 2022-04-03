import React from "react";
import { TodosConsumer } from "../todosContext";
export function Dashboard() {
  return (
    <TodosConsumer>{({ todos }) => <div>{todos.length}</div>}</TodosConsumer>
  );
}
