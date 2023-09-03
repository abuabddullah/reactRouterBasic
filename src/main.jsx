import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ErrorPage from "./error-page.jsx";
import "./index.css";
import AppIndex from "./components/AppIndex.jsx";
import Friends from "./components/Friends/Friends.jsx";
import FriendDetails from "./components/Friends/FriendDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/Posts/PostDetails.jsx";
import Todos from "./components/Todos/Todos.jsx";
import customTodoLoader from "./loaders/customTodoLoader.js";
import GrandpaContext from "./components/learnContextApi/GrandpaContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AppIndex />,
      },
      {
        path: "/friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: ({ params }) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/postDetails/:id",
        element: <PostDetails />,
        loader: ({ params }) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: customTodoLoader,
      },
      {
        path: "/contextAPI",
        element: <GrandpaContext />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <div>Not Found 404!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
