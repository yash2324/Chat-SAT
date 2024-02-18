import { FaArrowTrendUp } from "react-icons/fa6";
import React from "react";

const MainCards = () => {
  return (
    <div className="xl:-ml-60 lg:grid lg:grid-cols-2 flex flex-col items-center gap-5">
      <div className="rounded-2xl lg:w-[50%] w-full border border-white/10 bg-white/10 flex justify-center lg:ml-auto flex-col p-3">
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
      <div className="rounded-2xl lg:w-[50%] w-full border border-white/10 bg-white/10 flex justify-center lg:mr-auto flex-col p-3">
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
      <div className="rounded-2xl lg:w-[50%] w-full border border-white/10 bg-white/10 flex justify-center lg:ml-auto flex-col p-3">
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
      <div className="rounded-2xl mb-5 lg:mb-0 lg:w-[50%] w-full border border-white/10 bg-white/10 flex justify-center lg:mr-auto flex-col p-3">
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
  );
};

export default MainCards;
