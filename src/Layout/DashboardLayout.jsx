import React from "react";
import { Outlet,  } from "react-router-dom";

import LeftSideBar from "./LeftSideBar";


function DashboardLayout() {

  return (
    <>
      <div className="flex max-lg:flex-col text-grey-1 ">
        <LeftSideBar />
        <div className="flex-1 section-container my-12">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
