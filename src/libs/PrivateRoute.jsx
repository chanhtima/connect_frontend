import React, { useContext, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authentication";
import LeftSideBar from "../Layout/LeftSideBar";

function PrivateRoute() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
      navigate('/login')
    }
    },[token,navigate])

  return token ? (
    <div className="flex max-lg:flex-col text-grey-1 ">
      <LeftSideBar />
      <div className="flex-1 section-container my-12">
        <Outlet />
      </div>
    </div>
  ) : null;
}

export default PrivateRoute;
