import React from "react";
import { Outlet } from "react-router-dom";
import Narbar from "./Narbar";

function UserLayout() {
  return (
    <>
      <Narbar />
      <div className="section-container">
        <Outlet />
      </div>
      <footer>footer</footer>
    </>
  );
}

export default UserLayout;
