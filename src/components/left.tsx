import { gray } from "@/utils/constants";
import React from "react";

const Left = () => {
  return (
    <div className="text-white w-3/12 border-r-[0.5px] border-black shadow-2xl h-screen">
      <div className="flex items-center gap-2 p-4">
        <img src={gray} alt="Logo" className="w-8 h-8 rounded-full bg-white" />
        <div>
          <span className="text-2xl">Chat</span>
          <span className="font-bold text-2xl">SAT</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-11/12  mt-3 rounded-2xl border border-white/30 bg-white/15 from-[#6d795f] to-[#607972] p-4 px-5 text-left text-xl text-white transition-all hover:bg-transparent hover:bg-gradient-to-b">
          New Thread
        </button>
      </div>
    </div>
  );
};

export default Left;
