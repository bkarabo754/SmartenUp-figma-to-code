import React, { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import newLogo from "../assets/newLogo.jpg";
import iconBag from "../assets/iconBag.png";
import { navLinks } from "../constants";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_links">
        <div className="navbar_logo">
          <img src={newLogo} alt="New Logo" />
        </div>
        <h1 className="flex justify-between absolute px-16 sm:px-16 mx-auto -mb-0 items-center font-extrabold text-[#ffffff] font-ondo-bold text-2xl">
          board
        </h1>
        <div className="navbar_container lg:flex gap-2 ml-72 uppercase">
          <p>
            <a
              href="#products"
              className="font-primary font-extrabold text-[#FFFFFF]"
            >
              Products
            </a>
          </p>
          <p>
            <a href="#app&games" className="text-gray-100">
              Apps & Games
            </a>
          </p>
          <p>
            <a href="#features" className="text-gray-100">
              Feature
            </a>
          </p>
          <p>
            <a href="#support" className="text-gray-100">
              Support
            </a>
          </p>
          <p>
            <a href="#about" className="text-gray-100">
              About
            </a>
          </p>
        </div>
      </div>
      <div className="navbar-icon cursor-pointer">
        <img src={iconBag} alt="" className="sm:block hidden " />
      </div>
      <div className="navbar-menu cursor-pointer">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links-sign">
              <p>
                <a href="#products">Products</a>
              </p>
              <p>
                <a href="#apps&games">Apps & Games</a>
              </p>
              <p>
                <a href="#possibility">Features</a>
              </p>
              <p>
                <a href="#features">Support</a>
              </p>
              <p>
                <a href="#blog">About</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
