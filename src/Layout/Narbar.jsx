import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../libs/constants";

function Narbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItem = (
    <>
      {navLinks.map((item, idx) => (
        <Link
          to={item.url}
          key={idx}
          className={`hover:text-blue-3  max-lg:h-10 text-lg ${
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
      <nav className="sticky top-0 z-50 w-full px-12 md:px-24 py-2  bg-white shadow-md">
        <div className=" flex items-center justify-between">
          <Link to={"/"}>
            <img
              src="/images/LOGOArtboard.png"
              alt="logo "
              width={120}
              height={20}
            />
          </Link>

          {/*  menu lg */}
          <div className=" flex gap-12 max-lg:hidden ">{navItem}</div>
          {/* menu md */}
          <div className="lg:hidden">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
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
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-y-4">
                  {/* Sidebar content here */}
                  {navItem}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Narbar;
