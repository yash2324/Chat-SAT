import { gray } from "@/utils/constants";
import React from "react";
import { PiSignOutBold } from "react-icons/pi";

const NameSignout = () => {
  return (
    <>
      <div className="flex items-center p-4 gap-2 mt-2">
        <img src={gray} className="w-16 h-16 rounded-full" />
        <h1 className="text-lg md:text-2xl">Yash Gupta</h1>
      </div>
      <button className="flex items-center pl-6">
        <PiSignOutBold color="white" style={{ transform: "rotate(180deg)" }} />
        <h2 className="text-sm">Sign Out</h2>
      </button>
    </>
  );
};

export default NameSignout;
