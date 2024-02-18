import { gray } from "@/utils/constants";
import React from "react";

const Head = () => {
  return (
    <div className="flex items-center gap-2 p-4">
      <img src={gray} alt="Logo" className="w-12 h-12 rounded-full bg-white" />
      <div>
        <span className="text-2xl">Chat</span>
        <span className="font-bold text-2xl">SAT</span>
      </div>
    </div>
  );
};

export default Head;
