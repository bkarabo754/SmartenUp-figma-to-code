import React, { useState } from "react";
import IconBag from "../assets/iconbag.png";
import NewLogo from "../assets/newLogo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="top-0 left-0 right-0 p-5 z-10">
      <div className="flex items-center justify-between">
        <img
          src={NewLogo}
          alt="SmartUp Logo"
          className="w-10 h-10 rounded-full ml-20 mt-8 object-contain"
        />
        <h1 className=" text-white text-3xl font-extrabold font-['Ondo'] leading-[34.03px] tracking-wider mr-[1445px] mt-8">
          board
        </h1>
      </div>

      <ul className="hidden lg:flex gap-4 items-center lg:gap-10 -mt-8 ml-[450px] lg:mr-48 font-primary">
        <li className="font-extrabold cursor-pointer text-white uppercase">
          products
        </li>
        <li className="text-white text-lg cursor-pointer font-['Lato'] uppercase leading-tight tracking-wide">
          app & games
        </li>
        <li className=" text-gray-200 text-lg cursor-pointer font-['Lato'] uppercase leading-tight tracking-wide">
          features
        </li>
        <li className="text-white text-lg cursor-pointer font-['Lato'] uppercase leading-tight tracking-wide">
          support
        </li>
        <li className="text-white text-lg cursor-pointer font-['Lato'] uppercase leading-tight tracking-wide">
          about
        </li>
      </ul>
      <div className="flex justify-end -mt-6 mr-20 ">
        <img
          src={IconBag}
          alt="Icon Bag"
          className="sm:block hidden cursor-pointer"
        />
      </div>

      <div className="mr-10 flex md:hidden justify-end -mt-3">
        <button
          type="button"
          onClick={handleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400"
        >
          <span className="sr-only">Open Main Menu</span>
          {open === true ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open ? (
        <div className="md:hidden">
          <div className="list-none px-80 pt-3 pb-3 space-y-1 sm:px-3 sm:py-3">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white leading-normal block px-3 py-2 text-base font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
