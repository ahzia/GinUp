'use client';

import React from 'react';
import { activities } from '../../../../lib/Activities';
import { FaClock, FaSmile } from 'react-icons/fa';

const effortLevelColors: Record<string, string> = {
  Low: 'bg-green-500',
  Medium: 'bg-yellow-500',
  High: 'bg-red-500',
};

const getEffortEmoji = (level: string) => {
  switch (level) {
    case 'Low':
      return '😊';
    case 'Medium':
      return '💪';
    case 'High':
      return '🔥';
    default:
      return '⚡';
  }
};

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-5 py-14">
      <h1 className="text-3xl font-bold text-center text-highlight mb-6">
        🚀 Exciting Activities for You!
      </h1>
      <p className="text-lg text-textSecondary text-center mb-6">
        🌟 Take on exciting activities, earn Smiles 😃, and use them to grow, give, and make an impact!
        The more you do, the more you shine! ✨🔥
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.activityId}
            className="bg-cardBg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              {getEffortEmoji(activity.effortLevel)} {activity.name}
            </h2>
            <p className="text-textSecondary mt-2">{activity.description}</p>

            <div className="flex items-center justify-between mt-4">
              <span className="flex items-center gap-1 text-textSecondary">
                <FaClock className="text-highlight" /> {activity.requiredTime}
              </span>

              <span
                className={`px-3 py-1 text-white text-sm rounded-full ${effortLevelColors[activity.effortLevel]}`}
              >
                {activity.effortLevel} Effort
              </span>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-highlight text-lg font-bold flex items-center gap-1">
                +{activity.reward} <FaSmile />
              </span>
              <button className="bg-highlight text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300">
                Join 🚀
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
