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
    <div className=" bg-[#e0c8ab]   mx-auto lg:px-[9rem] sm:px-[6rem] w-screen h-20 z-80 text-[292a4a] ">
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
              className="capitalize p-4 cursor-pointer hover:border-b-2 hover:border-gray-600 duration-300"
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
            ? "md:hidden fixed z-[500] left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "shadow-xl z-[500] fixed left-0 top-0 w-4/5 bg-[#383956] text-white h-full p-10 ease-in duration-300"
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
                <li className="p-4  text-xl  hover:bg-gradient-to-r hover:from-[#d09a58] hover:to-[#ebc597]">
                  Home
                </li>
              </a>
              <a href="#Transfers">
                <li className="p-4  text-xl  hover:bg-gradient-to-r hover:from-[#d09a58] hover:to-[#ebc597]">
                  What We Do
                </li>
              </a>
              <a href="#blog">
            
                <li className="p-4  text-xl  hover:bg-gradient-to-r hover:from-[#d09a58] hover:to-[#ebc597]">
                Our Team
                </li>
              </a>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
