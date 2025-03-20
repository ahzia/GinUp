'use client';
import { RewardsData } from '@/models/Rewards';
import CategoryDropdown from './CategoryDropdown';
import { rewards } from '../../../../lib/rewards';
import { FaGift } from 'react-icons/fa';

export default function Rewards() {
  const rewardsData: RewardsData = rewards;

  return (
    <div className="container mx-auto px-6 py-10 text-textPrimary">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
          Rewards Hub <FaGift className="text-highlight" />
        </h1>
        <p className="text-lg text-textSecondary mt-3">
          Explore exclusive rewards and claim them with your GINX points!
        </p>
      </div>

      {/* Reward Sections */}
      <div className="space-y-10">
        {Object.entries(rewardsData.rewards).map(([key, rewardSection]) => (
          <CategoryDropdown
            key={key}
            title={rewardSection.title}
            items={rewardSection.items}
          />
        ))}
      </div>
    </div>
  );
}
