import React from "react";
import Progress from "./Progress";
import { BiSolidAward } from "react-icons/bi";

const QuizCard = () => {
  return (
    <div className="flex items-center justify-center w-11/12  mt-3 rounded-2xl border border-white/10 bg-white/10 shadow-md mx-auto">
      <Progress percentage={4 / 7} />
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <BiSolidAward color="#eeff87" size={60} />
          <h2 className="text-xl font-semibold">
            0/223 <span className="text-[#eeff87] font-bold">XP</span>
          </h2>
        </div>
        <button className="  mt-3 text-center rounded-lg py-2 border border-white/10 bg-white/10 from-[#67765c] to-[#5d7b77] px-5  text-sm text-[#eeff87] transition-all hover:bg-transparent hover:bg-gradient-to-b">
          Take a Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
