"use client";
import React, { useEffect, useState } from "react";
import { BiSolidAward } from "react-icons/bi";
import GenerateMockLeaderboard from "./GenerateMockLeaderboard";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<
    { rank: number; name: string; xp: string; avatar: string }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GenerateMockLeaderboard();
      setLeaderboardData(data);
    };

    fetchData();
  }, []);

  const yourPosition = 54;
  return (
    <div className="mx-auto relative h-[35%] rounded-2xl border border-white/30 shadow-md shadow-black/70  w-11/12 bg-white/10 mt-2 overflow-y-scroll text-white ">
      <h2 className="w-full rounded-2xl border border-white/30 bg-white/15 p-4 px-5 text-left text-xl text-white  ">
        Leaderboard
      </h2>
      <div className=" ">
        {leaderboardData.map((user) => (
          <div
            key={user.rank}
            className={`rounded-md m-2 border border-white/10 bg-white/10 flex items-center justify-between hover:bg-transparent hover:bg-gradient-to-b from-[#6d795f] to-[#607972] hover:cursor-pointer ${
              user.rank === yourPosition
                ? "sticky bottom-1 bg-transparent bg-gradient-to-b from-[#6d795f] to-[#607972]"
                : ""
            }`}
          >
            <div className="text-[#ecff86] items-center flex text-lg px-2 p-1">
              <p>{user.rank < 10 ? `0${user.rank}.` : `${user.rank}.`}</p>
              <BiSolidAward color="#fedc87" />
              <img
                src={user.avatar}
                alt={`Avatar for ${user.name}`}
                className="rounded-full w-8 h-8"
              />
              <p className="text-white">{user.name}</p>
            </div>

            <h2 className="text-sm font-semibold px-2">
              {user.xp}
              <span className="text-[#ecff86]">XP</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
