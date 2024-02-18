"use client";
import { useState } from "react";
import QuizCard from "./QuizCard";
import Leaderboard from "./Leaderboard";
import Head from "./Head";
import NewThreadCard from "./NewThreadCard";
import NameSignout from "./NameSignout";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="inline xl:hidden" onClick={toggleMenu}>
        <svg
          className="m-4 w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <div className={`xl:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="relative z-10 text-white w-[120%] border-r-[0.5px] border-black shadow-2xl h-screen">
          <Head />
          <NewThreadCard />
          <QuizCard />
          <Leaderboard />
          <NameSignout />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
