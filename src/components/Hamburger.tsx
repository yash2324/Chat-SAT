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
    <div className="relative z-50 ">
      <div
        className={`xl:hidden ${isOpen ? "block" : "hidden"}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          overflowY: "auto",
          zIndex: 1000,
        }}
      >
        <button
          className="absolute top-0 right-0 m-4"
          onClick={toggleMenu}
          style={{ zIndex: 1100 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="sticky z-10 text-white w-[100%] border-r-[0.5px] border-t-[0.5px] border-black bg-gradient-to-br from-[#354641] to-35% to-[#2a2b2b] shadow-2xl h-screen ">
          <Head />
          <NewThreadCard />
          <QuizCard />
          <Leaderboard />
          <NameSignout />
          {/* Additional content goes here */}
        </div>
      </div>
      <button
        className="inline xl:hidden"
        onClick={toggleMenu}
        style={{ zIndex: 1100 }}
      >
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default HamburgerMenu;
