import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const NavHeader = () => {
  return (
    <nav>
      <Link to="/">Home</Link> {" "}
      <ActiveLink to="/friends">Friends</ActiveLink> {" "}
      <ActiveLink to="/posts">Posts</ActiveLink> {" "}
      <ActiveLink to="/todos">Todos</ActiveLink> {" "}
      <ActiveLink to="/contextAPI">ContextAPI</ActiveLink> {" "}
      <Link to="/about">About</Link> {" "}
      <Link to="/contact">Contact</Link> {" "}
    </nav>
  );
};

export default NavHeader;
