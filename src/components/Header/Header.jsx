import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

const Header = () => {
 
  return (
    <>
      <div className="flex justify-between shadow-sm">
        <div className="flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* dropdown manu start */}
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink>Item 1</NavLink>
              </li>
              <li>
                <NavLink>Item 2</NavLink>
              </li>
              <li>
                <NavLink>Item 3</NavLink>
              </li>
              <li>
                <NavLink>Item 4</NavLink>
              </li>
              <li>
                <NavLink>Item 5</NavLink>
              </li>
              <li>
                <NavLink>Item 6</NavLink>
              </li>
            </ul>
            {/* dropdown manu end */}
          </div>
          <div>
            <a className="btn btn-ghost text-xl p-0">daisyUI</a>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <div className=" hidden lg:flex">
            <ul className=" menu-horizontal gap-6 px-1">
              <li>
                <NavLink>Item 1</NavLink>
              </li>
              <li>
                <NavLink>Item 2</NavLink>
              </li>
              <li>
                <NavLink>Item 3</NavLink>
              </li>
              <li>
                <NavLink>Item 4</NavLink>
              </li>
              <li>
                <NavLink>Item 5</NavLink>
              </li>
              <li>
                <NavLink>Item 6</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <div className="">
              <a className="btn">Button</a>
            </div>
              <ThemeSelector />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
