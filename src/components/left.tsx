import { gray } from "@/utils/constants";
import React from "react";
import { PiSignOutBold } from "react-icons/pi";
import Progress from "./Progress";
import { BiSolidAward } from "react-icons/bi";

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
        <button className="w-11/12  mt-3 rounded-2xl border border-white/10 bg-white/10 from-[#67765c] to-[#5d7b77] p-4 px-5 text-left text-xl text-white transition-all hover:bg-transparent hover:bg-gradient-to-b">
          New Thread
        </button>
      </div>
      <div className="flex items-center justify-center w-11/12  mt-3 rounded-2xl border border-white/10 bg-white/10 shadow-md mx-auto">
        <Progress percentage={4 / 7} />
        <div>
          <div className="flex items-center">
            <BiSolidAward color="#eeff87" size={60} />
            <h2>
              0/223 <span>XP</span>
            </h2>
          </div>
          <button className="  mt-3 mx-auto rounded-lg py-2 border border-white/10 bg-white/10 from-[#67765c] to-[#5d7b77] px-5 text-left text-sm text-[#eeff87] transition-all hover:bg-transparent hover:bg-gradient-to-b">
            Take a Quiz
          </button>
        </div>
      </div>
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
