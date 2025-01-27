import React from "react";
import {
  android,
  firebase,
  ionic,
  mysql,
  react,
  skill,
  typescript,
} from "../assets";
import Image from "next/image";
import tailwindConfig from "@/tailwind.config.mjs";

function Skills() {
  const workDetail = [
    {
      id: 1,
      year: "2021",
      companyName: "Wells Fargo",
      position: "Lead Software Developer",
    },
    {
      id: 1,
      year: "2020",
      companyName: "Empowered Benefits",
      position: "Full Stack Developer",
    },
    {
      id: 1,
      year: "2018",
      companyName: "Western Illinois University",
      position: "Full Stack Developer",
    },
    {
      id: 1,
      year: "2016",
      companyName: "Cognizant",
      position: "Programmer Analyst",
    },
  ];

  return (
    <div className="mt-10 ">
      <div className="flex flex-row justify-center items-center ">
        <Image src={skill} className="w-[70px] hover:animate-bounce" />
        <h1 className="text-black text-[50px] font-bold">
          Skills & <span className="text-purple-600">Expertise</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8">
        <div className="mt-10 space-y-10">
          <div className=" grid grid-cols-4 items-center justify-evenly space-x-5 ">
            <Image
              src={ionic}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={mysql}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={react}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={android}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
          </div>

          <div className="grid grid-cols-4  items-center justify-evenly space-x-5 ">
            <Image
              src={typescript}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={firebase}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={typescript}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={ionic}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
          </div>

          <div className="grid grid-cols-4  items-center justify-evenly space-x-5 ">
            <Image
              src={mysql}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={react}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={android}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
            <Image
              src={ionic}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            />
          </div>
        </div>

        <div className="flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0">
          {workDetail.map((work) => (
            <li key={work.id} className="flex flex-col sm:flex-row  p-4 ">
              <div className="flex space-x-20 items-center">
                <div className="text-sm text-gray-500">{work.year}</div>
                <div className="gird">
                  <div className="text-lg font-medium text-gray-800">
                    {work.position}{" "}
                  </div>
                  <div className="text-gray-600">{work.companyName}</div>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
