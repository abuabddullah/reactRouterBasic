import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Todos = () => {
  const allTodos = useLoaderData();
  return (
    <div>
      <h1>all Todos : {allTodos.length}</h1>
      <ol>
        {allTodos.map((todo) => (
          <li key={todo.id}>
            <hr />
            Todo : {todo.title}
            <br />
            Completed : {todo.completed ? "Yes" : "No"}
            <br />
            <Link to={`/todoDetails/${todo.id}`}>
              Show the TodoDetails {todo.id}
              <small>এটা এখনো করা হয় নি</small>
            </Link>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
