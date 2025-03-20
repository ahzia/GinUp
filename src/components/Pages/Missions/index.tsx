'use client';
import { useState } from 'react';
import { FaTrophy } from 'react-icons/fa'; // Import the trophy icon
import MissionItem from './MissionItem';
import { missions } from '../../../../lib/missons';
import Modal from '@/components/common/Modal';
import Image from 'next/image';

export default function MissionsPage() {
  const [selectedTab, setSelectedTab] = useState('daily');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const openLeaderboard = () => {
    setIsModalOpen(true); // Open the modal when the leaderboard icon is clicked
  };

  const closeLeaderboard = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-highlight">Missions</h1>

      {/* Tabs for Daily, Weekly, and Virgin Red Missions */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg transition duration-200 ${selectedTab === 'daily' ? 'bg-highlight text-white' : 'bg-cardBg text-textSecondary'}`}
          onClick={() => handleTabChange('daily')}
        >
          Daily Missions
        </button>

        <button
          className={`px-4 py-2 rounded-t-lg ml-2 transition duration-200 ${selectedTab === 'weekly' ? 'bg-highlight text-white' : 'bg-cardBg text-textSecondary'}`}
          onClick={() => handleTabChange('weekly')}
        >
          Weekly Missions
        </button>

        <button
          className={`px-4 py-2 rounded-t-lg ml-2 transition duration-200 ${selectedTab === 'virginRed' ? 'bg-highlight text-white' : 'bg-cardBg text-textSecondary'}`}
          onClick={() => handleTabChange('virginRed')}
        >
          Virgin Red Missions
        </button>
      </div>

      {/* Mission Items */}
      <div className="shadow-md rounded-lg p-4">
        {selectedTab === 'daily' &&
          missions.missions.dailyMissions.items.map((mission) => (
            <MissionItem key={mission.missionId} mission={mission} />
          ))}

        {selectedTab === 'weekly' &&
          missions.missions.weeklyMissions.items.map((mission) => (
            <MissionItem key={mission.missionId} mission={mission} />
          ))}

        {selectedTab === 'virginRed' &&
          missions.missions.virginRedMissions.items.map((mission) => (
            <MissionItem key={mission.missionId} mission={mission} />
          ))}
      </div>

      {/* Fixed Leaderboard Icon */}
      <div className="fixed bottom-24 right-5 z-50">
        <button
          onClick={openLeaderboard}
          className="text-4xl p-3 bg-highlight rounded-full text-white transition duration-300 hover:bg-mainBg shadow-lg"
        >
          <FaTrophy />
        </button>
      </div>

      {/* Modal for Leaderboard */}
      <Modal isOpen={isModalOpen} onClose={closeLeaderboard}>
        <Image src="/images/leaderboard.png" width={800} height={600} alt='Leaderboard' />
      </Modal>
    </div>
  );
}
