import React from "react";
import { AppText, socialNetwork } from "../Constants";
import Image from "next/image";
import { facebook, instagram, linkdin, youtube } from "../assets";

function Footer() {
  return (
    <div className="bg-gray-200 mt-10 p-20 items-center flex flex-col  px-10 md:px-80">
      <div className="flex gap-4">
        <div>
          <Image src={instagram} className="w-[40px]" />
        </div>
        <div>
          <Image src={youtube} className="w-[40px]" />
        </div>
        <div>
          <Image src={linkdin} className="w-[40px]" />
        </div>
        <div>
          <Image src={facebook} className="w-[40px]" />
        </div>
      </div>
      <h1 className="text-gray-500 text-[15px] mt-4">
        Copyright by Zin Ko Naing @2025
      </h1>
    </div>
  );
}

export default Footer;
