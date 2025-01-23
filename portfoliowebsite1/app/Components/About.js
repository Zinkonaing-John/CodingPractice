import Image from "next/image";
import React from "react";
import { laptop, wave } from "../assets";

function About() {
  const aboutSection = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-vector/ui-ux-programmer-flat-design-vector-illustration-business-information-team-sharing-ideas-with-designer-coding-interface-software-app-development_2175-1809.jpg?w=2000",
      title: "UI/UX Designer",
      desc: "Expert in UI/UX designing software like figma",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=",
      title: "Frontend Developer",
      desc: "Expert in UI/UX designing software like figma",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000",
      title: "Back-end Developer",
      desc: "Expert in UI/UX designing software like figma",
    },
  ];
  return (
    <div className="mt-36 bg-white">
      <Image src={wave} className="w-screen absolute" />
      <Image
        src={laptop}
        className="absolute mt-[-130px] md:mt-[-180px] w-[220px] md:w-[300px]"
      />
      <div className="h-[300px] bg-purple-600 items-center w-full">
        <h2 className="text-white text-center text-[50px] pt-6 font-bold">
          About <span className="text-black">Me</span>
        </h2>
        <h2 className="text-white mt-10 text-center text-[20px] px-10 md:px-64 lg:px-80">
          I am a software Engineering Student for last 2 years as Full Stack
          Developer. Expert in UI/UX design, Front-end and Back-end Development.
        </h2>
      </div>
      <div
        className="flex flex-col md:flex-row 
      justify-around items-center px-32 mt-[-60px]"
      >
        {aboutSection.map((item) => (
          <div key={item.id}>
            <div className="group hover:bg-purple-600 mb-5 p-7 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[200px] object-cover rounded-lg"
              />

              <h2 className="group-hover:text-white font-bold  text-black text-center ">
                {item.title}
              </h2>
              <p className="group-hover:text-gray-300 text-black  text-gray-500 text-center">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
