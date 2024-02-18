"use client";
import React from "react";
import QuizCard from "./QuizCard";
import Leaderboard from "./Leaderboard";
import Head from "./Head";
import NewThreadCard from "./NewThreadCard";
import NameSignout from "./NameSignout";

const Left = () => {
  return (
    <div className="relative hidden xl:inline-block z-10 text-white w-full md:w-3/12 border-r-[0.5px] border-black shadow-2xl h-screen">
      <Head />
      <NewThreadCard />
      <QuizCard />
      <Leaderboard />
      <NameSignout />
    </div>
  );
};

export default Left;
