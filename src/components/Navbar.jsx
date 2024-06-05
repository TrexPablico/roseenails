import React, { useState } from "react";
import { RiMenuUnfold3Fill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white text-bold text-2xl z-20"></h1>
      <RiMenuUnfold3Fill
        onClick={handleNav}
        className="z-20 text-white cursor-pointer mt-2"
        size={25}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/95 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10"
        }
      >
        <ul className=" flex flex-col fixed w-full h-full items-center justify-center">
          <a
            onClick={handleNav}
            href="#Hero"
            className="font-bold text-4xl p-8"
          >
            Home
          </a>
          <a
            onClick={handleNav}
            href="#Slider"
            className="font-bold text-4xl p-8"
          >
            My Work
          </a>
          <a
            onClick={handleNav}
            href="#Cards"
            className="font-bold text-4xl p-8"
          >
            Services
          </a>
          <a
            onClick={handleNav}
            href="#Studio"
            className="font-bold text-4xl p-8"
          >
            About Me
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
