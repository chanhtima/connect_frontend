import React from "react";
import { Outlet } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import LeftSideBar from "./LeftSideBar";

function DashboardLayout() {
  return (
    <>
      <div className="flex max-lg:flex-col text-grey-1 ">
        <LeftSideBar />
        <div className="flex-1 section-container my-12 min-h-[55rem] ">
          <Outlet />
        </div>
      </div>
      <BackToTopButton />
    </>
  );
}

export default DashboardLayout;
