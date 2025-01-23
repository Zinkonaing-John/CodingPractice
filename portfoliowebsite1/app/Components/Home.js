import Image from "next/image";
import React from "react";
import { homeImage } from "../assets";

function Home() {
  return (
    <div className="mt-7  px-4 md:px-20 flex flex-col md:flex-row items-center">
      <div>
        <h1 className="text-black pl-7 text-[40px] font-bold">Hello;</h1>
        <h1 className="text-black pl-7 text-[40px] font-bold">
          I am <span className="text-purple-600 ">Zin Ko Naing</span>
        </h1>
        <h1 className="pl-7 text-gray-500 text-bold">
          I am Zin Ko Naing and I worked as a IT teacher and currently I am a
          Software Engineering Student of Jeonju Vision University.
        </h1>
        <button className="text-black m-7 mt-3 bg-purple-600 p-2 px-3 rounded-md transition-all ease-in-out hover:scale-110">
          Resume
        </button>
      </div>

      <Image src={homeImage} className="w-[300px] md:w-[400px]" />
    </div>
  );
}

export default Home;
