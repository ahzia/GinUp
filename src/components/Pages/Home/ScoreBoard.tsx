import React from "react";
import { FaGem } from "react-icons/fa";
import rewardIcon from "../../../../public/images/Virgin-Red-logo.png";
import Image from "next/image";

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
        <div className="flex items-center rounded-full bg-white p-[1px] border-2 border-highlight">
          <Image
            src={rewardIcon}
            alt="Virgin Red Logo"
            width={30}  // Increased size to make it more visible
            height={30}  // Increased size to make it more visible
            className="transform scale-110 shadow-lg contrast-125" // Added scale and shadow to make the logo bolder
          />
        </div>
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
