import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
// import ginxIcon from "../assets/ginx-icon.png"; // update with your asset

interface ScoreBoardProps {
  ginxToken: number;
  totalStars: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ ginxToken, totalStars }) => {
  return (
    <div className="flex flex-col items-end p-4 text-white fixed right-0 top-0 z-10">
      <div className="flex items-center">
        <span className="mr-2 text-lg font-bold shadow-md">{totalStars}</span>
        <FaStar className="text-2xl text-yellow-400 shadow-md" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <div className="bg-[#20C997] rounded-full text-white p-1 mr-1 shadow-md">
            <FaPlus className="text-xl" />
          </div>
          <span className="mr-2 text-lg font-bold shadow-md">{ginxToken}</span>
        </div>
        {/* <img src={ginxIcon} alt="ginx token" className="w-6 h-6 shadow-md" /> */}
      </div>
    </div>
  );
};

export default ScoreBoard;
