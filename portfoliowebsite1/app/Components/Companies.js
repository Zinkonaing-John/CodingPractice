import React from "react";
import { AppText, CompanyImage } from "../Constants";
import "./../assets";
import Image from "next/image";
import { aflacLogo, cognizantLogo, wellsLogo, wiuLogo } from "./../assets";

function Companies() {
  return (
    <div className="bg-purple-200 p-5 mt-5">
      <h1 className="text-[50px] text-black font-bold justify-center text-center">
        Companies I <span className="text-purple-600">Worked For</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-3">
        <div className="m-3 transition-all ease-in-out hover:scale-110">
          <Image src={cognizantLogo} className="h-[150px] w-[200px]" />
        </div>
        <div className="m-3 transition-all ease-in-out hover:scale-110">
          <Image src={wellsLogo} className="h-[150px]  w-[200px]" />
        </div>

        <div className="m-3 transition-all ease-in-out hover:scale-110">
          <Image src={aflacLogo} className="h-[100px]  w-[200px]" />
        </div>
        <div className="m-3 transition-all ease-in-out hover:scale-110">
          <Image src={wiuLogo} className="h-[150px]  w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
