import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authentication";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

function LoginLayout() {
  const { token } = useContext(AuthContext);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-screen h-[90vh] container flex justify-center items-center">
      <Outlet />
    </div>
  );

}

export default LoginLayout;
