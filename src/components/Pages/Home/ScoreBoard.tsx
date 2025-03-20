import React from "react";
import { FaStar, FaGem } from "react-icons/fa";

interface ScoreBoardProps {
  ginxToken: number;
  totalStars: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ ginxToken, totalStars }) => {
  return (
    <div className="flex flex-col items-end p-4 text-white fixed right-0 top-0 z-10">
      {/* Star Icon for Total Stars */}
      <div className="flex items-center">
        <span className="mr-2 text-lg font-bold shadow-md">{totalStars}</span>
        <FaStar className="text-2xl text-yellow-400 shadow-md" />
      </div>

      {/* Diamond Icon for Ginx Token */}
      <div className="flex items-center">
        <span className="mr-2 text-lg font-bold shadow-md">{ginxToken}</span>
        <FaGem className="text-2xl text-blue-400 shadow-md" />
      </div>
    </div>
  );
};

export default ScoreBoard;
