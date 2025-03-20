'use client';
import React, { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { FaGem } from "react-icons/fa"; // Import the diamond icon

export default function MissionItem({ mission }) {
  const [showDescription, setShowDescription] = useState(false);

  // Calculate progress based on steps
  const progressPercent = mission.steps
    ? (mission.currentStep / mission.steps) * 100
    : 0;

  const isMissionCompleted = mission.progress === "Completed";
  const needsProgressBar = mission.steps && !isMissionCompleted;

  return (
    <div
      className={`flex flex-col items-start justify-between p-4 mb-4 border rounded-lg shadow-sm transition duration-200 ${isMissionCompleted ? "border-green-500" : "border-highlight"
        } hover:shadow-lg`}
      onClick={() => setShowDescription(!showDescription)}
    >
      <div className="flex items-start w-full gap-4">
        {/* Icon */}
        <div className="flex flex-col gap-3 items-start">
          <div className="text-3xl mr-4">{mission.icon}</div>
          <div className="flex items-center justify-center gap-1">
            <p className="font-semibold text-highlight">+{mission.reward}</p>
            <FaGem className={`text-lg font-bold text-blue-400`} />
          </div>
        </div>

        {/* Mission Details */}
        <div className="w-full">
          <h2 className={`text-xl font-semibold flex items-center`}>
            {mission.name}
            {/* Show tick mark for completed missions */}
            {isMissionCompleted && (
              <MdCheckCircle className="text-green-500 ml-2 text-2xl" />
            )}
          </h2>

          {showDescription && (
            <p className="text-textSecondary">{mission.description}</p>
          )}

          {/* Progress Bar or Completed Status */}
          {needsProgressBar ? (
            <div className="flex items-center w-full mt-2">
              <div className="w-full h-4 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-highlight rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="ml-2 text-textSecondary">
                {mission.currentStep}/{mission.steps}
              </p>
            </div>
          ) : isMissionCompleted ? (
            <p className="text-green-500 font-semibold">Mission Completed!</p>
          ) : (
            <p className="text-textSecondary mt-2">Not Started</p>
          )}
        </div>
      </div>
    </div>
  );
}
