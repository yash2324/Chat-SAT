import React from "react";
import { Catamaran } from "next/font/google";
import MainCards from "./MainCards";
const catamaran = Catamaran({
  weight: "700",
  subsets: ["latin"],
});
const MainComponent = () => {
  return (
    <div className="relative mt-12 lg:mt-0 text-white w-9/12">
      <div className={catamaran.className}>
        <div className="px-0 md:px-24 py-12">
          <h2 className="text-4xl">
            Hey, <span className="text-[#ecff86]">Yash Gupta!</span>
          </h2>
          <h2 className="text-4xl">
            How{"'"}s your prep for the{" "}
            <span className="text-[#ecff86]">March SAT</span>
          </h2>
        </div>
      </div>
      <MainCards />
    </div>
  );
};

export default MainComponent;
