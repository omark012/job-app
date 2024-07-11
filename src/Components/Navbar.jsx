import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClassName = ({ isActive }) =>
    isActive
      ? "bg-black hover:bg-gray-900 rounded-md px-3 py-2"
      : "hover:bg-gray-900 rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="logo flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink
              className="flex flex-shrink-0 items-center mr-4"
              to="/index.html"
            >
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto flex items-center text-white">
              <div className="flex space-x-4">
                <NavLink to="/" className={linkClassName}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClassName}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClassName}>
                  Add Jobs
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
