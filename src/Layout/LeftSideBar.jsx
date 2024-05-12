import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navAdminLinks } from "../libs/constants";

function LeftSideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const navItem = (
    <>
      {navAdminLinks.map((item, idx) => (
        <Link
          to={item.url}
          key={idx}
          className={`hover:text-blue-3  lg:h-16 text-xl ${
            location.pathname === item.url
              ? " text-blue-3 m:border-b md:border-blue-3"
              : ""
          }`}
        >
          <button>{item.label}</button>
        </Link>
      ))}
    </>
  );

  return (
    <>
      <div className="sticky top-0 z-50 w-full flex justify-between items-center px-8 py-4  shadow-xl lg:hidden bg-white">
        <img src="/images/LOGOArtboard.png" alt="logo " width={180} height={20} />
        <div className=" lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-white text-base-content gap-y-4">
                {/* Sidebar content here */}
                {navItem}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-h-full left-0 top-0 sticky p-10 flex flex-col gap-16  shadow-xl max-lg:hidden bg-white">
      <img src="/images/LOGOArtboard.png" alt="logo " width={180} height={20} />
        <div className="flex flex-col gep-12">{navItem}</div>
        <div className="  text-xl space-y-3">
          <div className="  text-xl line-clamp-1">
            {/* {user && (
                <>
                  <p className="line-clamp-1">{user.username}</p>
                </>
              )} */}
            <div
              className="text-xl flex justify-between items-center mt-6 cursor-pointer"
              onClick={handleLogout}
            >
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
