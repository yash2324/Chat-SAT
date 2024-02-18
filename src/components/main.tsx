import React from "react";
import { Catamaran } from "next/font/google";
import { FaArrowTrendUp } from "react-icons/fa6";
const catamaran = Catamaran({
  weight: "700",
  subsets: ["latin"],
});
const MainComponent = () => {
  return (
    <div className="relative text-white w-9/12">
      <div className={catamaran.className}>
        <div className="px-24 py-12">
          <h2 className="text-4xl">
            Hey, <span className="text-[#ecff86]">Yash Gupta!</span>
          </h2>
          <h2 className="text-4xl">
            How{"'"}s your prep for the{" "}
            <span className="text-[#ecff86]">March SAT</span>
          </h2>
        </div>
      </div>
      <div className="lg:-ml-60 md:grid md:grid-cols-2 flex flex-col gap-5">
        <div className="rounded-2xl w-[50%] border border-white/10 bg-white/10 flex justify-center ml-auto flex-col p-3">
          <div className="text-[#747575] text-sm">
            <p>Last Practice Linear etc etc</p>
            <p>28/02/23</p>
          </div>
          <FaArrowTrendUp color="white" size={85} />
          <h2 className="text-3xl font-semibold">Practice</h2>
          <span className="text-sm font-[200]">
            A description of the above parameter <br />
            goes here.
          </span>
        </div>
        <div className="rounded-2xl w-[50%] border border-white/10 bg-white/10 flex justify-center mr-auto flex-col p-3">
          <div className="text-[#747575] text-sm">
            <p>Last Practice Linear etc etc</p>
            <p>28/02/23</p>
          </div>
          <FaArrowTrendUp color="white" size={85} />
          <h2 className="text-3xl font-semibold">Mock</h2>
          <span className="text-sm font-[200]">
            A description of the above parameter <br />
            goes here.
          </span>
        </div>
        <div className="rounded-2xl w-[50%] border border-white/10 bg-white/10 flex justify-center ml-auto flex-col p-3">
          <div className="text-[#747575] text-sm">
            <p>Last Practice Linear etc etc</p>
            <p>28/02/23</p>
          </div>
          <FaArrowTrendUp color="white" size={85} />
          <h2 className="text-3xl font-semibold">Title Text here</h2>
          <span className="text-sm font-[200]">
            A description of the above parameter <br />
            goes here.
          </span>
        </div>
        <div className="rounded-2xl w-[50%] border border-white/10 bg-white/10 flex justify-center mr-auto flex-col p-3">
          <div className="text-[#747575] text-sm">
            <p>Last Practice Linear etc etc</p>
            <p>28/02/23</p>
          </div>
          <FaArrowTrendUp color="white" size={85} />
          <h2 className="text-3xl font-semibold">Title Text here</h2>
          <span className="text-sm font-[200]">
            A description of the above parameter <br />
            goes here.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
