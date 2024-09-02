import React, { useState } from "react";
import Button from "./UI/Button";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/svg/liberty.svg";

function Header() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const HandleIsMenuOpen = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-borderBottom header text-redwhite-300 border-b ">
      <nav className="h-20 flex items-center justify-between mx-16 ">
        <div className="hidden lg:flex items-center justify-between w-full">
          <ul className="hidden lg:flex gap-9 text-base font-semibold headerColor ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? "text-black" : "headerColor"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/practice-area"
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? "text-black" : "headerColor"}`
                }
              >
                Practice Area
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? "text-black" : "headerColor"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? "text-black" : "headerColor"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sing-in"
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? "text-black" : "headerColor"}`
                }
              >
                Sing in
              </NavLink>
            </li>
          </ul>
          <Link to="/registration">
            <Button text="Registration" fontSize="19px" />
          </Link>
        </div>

        <div className=" lg:hidden flex items-center justify-between w-full">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-32" />
            </Link>
          </div>
          <div>
            <GiHamburgerMenu onClick={HandleIsMenuOpen} />
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden flex flex-col  w-full h-screen  bg-white ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" text-lg font-semibold headerColor">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "text-black" : "headerColor"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/practice-area"
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "text-black" : "headerColor"}`
              }
            >
              Practice Area
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "text-black" : "headerColor"}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "text-black" : "headerColor"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sing-in"
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "text-black" : "headerColor"}`
              }
            >
              Sing in
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
