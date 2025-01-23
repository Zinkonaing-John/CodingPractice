"use client";
import React, { useState } from "react";
import { logo } from "../assets";
import Image from "next/image";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between p-5">
      <Image src={logo} className="h-10 w-40 p-1" />

      <div className="text-black hidden md:flex">
        <ul className="flex flex-row">
          <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
            Home
          </li>
          <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
            About Me
          </li>
          <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
            Skills
          </li>
          <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
            Portfolio
          </li>
          <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
            Companies
          </li>
          <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
            Contact Me
          </li>
        </ul>
      </div>
      <div className="text-black md:hidden lg:hidden">
        {!toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={() => setToggle(true)}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={() => setToggle(false)}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 cursor-pointer float-right"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
        {toggle ? (
          <ul className="flex flex-col mt-8 bg-gray-300 p-2 ">
            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Home
            </li>
            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              About Me
            </li>
            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Skills
            </li>
            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Portfolio
            </li>
            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Companies
            </li>
            <li className="p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Contact Me
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
