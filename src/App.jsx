import { useState } from "react";
import "./App.css";
import NavHeader from "./components/Shared/NavHeader";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <NavHeader />
      {navigation.state === "loading" && <small>LoadingComponent...</small>}
      <h2>this is src\App.jsx</h2>
      <Outlet />
    </>
  );
}

export default App;
