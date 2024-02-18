import React from "react";
import PropTypes from "prop-types";

interface ProgressProps {
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ percentage }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - percentage * circumference;

  return (
    <div className="">
      <svg className="w-40 h-40 " viewBox="0 0 240 240">
        <circle
          className="fill-none stroke-[#384540]"
          cx="120"
          cy="120"
          r={radius}
          strokeWidth={24}
          strokeLinecap="round"
        />
        <circle
          className="fill-none stroke-[#eeff87] stroke-dasharray"
          cx="120"
          cy="120"
          r={radius}
          strokeWidth={24}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
          strokeLinecap="round"
        />
        <text
          x="43%"
          y="50%"
          className="text-2xl font-bold text-center mr-auto px-auto text-white"
          style={{ fill: "#eeff87" }}
        >
          4/7
        </text>
        <text
          x="37%"
          y="60%"
          className="text-xl font-bold text-center text-white"
          style={{ fill: "white" }}
        >
          Streak
        </text>
      </svg>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
