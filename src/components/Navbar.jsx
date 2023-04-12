import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
     link:"What We Do",
    },
    {
      id: 3,
      link: "Our Team",
    },
    {
        id: 4,
        link: "Contact Us",
        },

  ];
  return (
    <div className=" bg-[#e0c8ab]   mx-auto lg:px-[9rem] sm:px-[6rem] w-screen h-20 z-20 text-[292a4a] ">
      <div className="px-3 flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <div>
            <img src={logo} alt="logo" className="h-10 w-10" />
          </div>
          <h4 className="text-xl p-4 font-semibold">
            <span className=" font-bold">
              {""}
              THE LAWYERS
            </span>
          </h4>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize p-4 cursor-pointer hover:text-black duration-300"
            >
              {link}
            </li>
          ))}
        </ul>

        {/**Burger icon */}
        <div className=" md:hidden">
          <div onClick={() => setNav(true)} className="cursor-pointer p-3">
            <FaBars size={30} />
          </div>
        </div>
      </div>
      {/**Mobile menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "shadow-xl fixed left-0 top-0 w-4/5 bg-gray-900 text-white h-full p-10 ease-in duration-300"
              : "fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full "
          }
        >
          <div className="flex w-full items-center justify-between text-white">
            <div className="flex items-center">
              <div>
                <img src={logo} alt="logo" className="h-10 w-10" />
              </div>
              <h4 className="text-xl p-4 font-semibold">
                <span className=" font-bold">
                  {""}
                  THE LAWYERS
                </span>
              </h4>
            </div>
            <div onClick={() => setNav(false)} className="p-3 cursor-pointer">
              <FaTimes size={30} />
            </div>
          </div>
          <div className=">">
            <ul className="pt-7 pb-6">
              <a href="#Home">
                <li className="p-4  text-xl  hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500">
                  Home
                </li>
              </a>
              <a href="#Transfers">
                <li className="p-4  text-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500">
                  Transfers
                </li>
              </a>
              <a href="#blog">
                {" "}
                <li className="p-4  text-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500">
                  Blogs
                </li>
              </a>
            </ul>
            <div className=" ml-4 ">
              <button
                type="button"
                className="py-2 w-full bg-blue-500 hover:bg-blue-800 rounded-lg"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
