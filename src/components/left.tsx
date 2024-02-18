import { gray } from "@/utils/constants";
import React from "react";
import { PiSignOutBold } from "react-icons/pi";
import QuizCard from "./QuizCard";

const Left = () => {
  return (
    <div className="relative z-10 text-white w-3/12 border-r-[0.5px] border-black shadow-2xl h-screen">
      <div className="flex items-center gap-2 p-4">
        <img src={gray} alt="Logo" className="w-8 h-8 rounded-full bg-white" />
        <div>
          <span className="text-2xl">Chat</span>
          <span className="font-bold text-2xl">SAT</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-11/12  mt-3 rounded-2xl border border-white/10 bg-white/10 from-[#67765c] to-[#5d7b77] p-4 px-5 text-left text-xl text-white transition-all hover:bg-transparent hover:bg-gradient-to-b">
          New Thread
        </button>
      </div>
      <QuizCard />
      <div className="flex items-center p-4 gap-2 mt-2">
        <img src={gray} className="w-12 h-12 rounded-full" />
        <h1 className="text-2xl">Yash Gupta</h1>
      </div>
      <button className="flex items-center pl-6">
        <PiSignOutBold color="white" style={{ transform: "rotate(180deg)" }} />
        <h2 className="text-sm">Sign Out</h2>
      </button>
    </div>
  );
};

export default Left;
