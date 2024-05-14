import React from "react";
import { Outlet } from "react-router-dom";
import Narbar from "./Narbar";
import Footer from "./Footer";
import BackToTopButton from "../components/BackToTopButton";

function UserLayout() {
  return (
    <div className=" h-screen flex flex-col justify-between">
      <Narbar />
      <div className="section-container">
        <Outlet />
      </div>
     <Footer/>
     <BackToTopButton/>
    </div>
  );
}

export default UserLayout;
