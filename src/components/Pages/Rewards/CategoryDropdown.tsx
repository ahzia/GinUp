import { Reward } from '@/models/Rewards';
import RewardCard from './RewardCard';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface CategoryDropdownProps {
    title: string;
    items: Reward[];
}

export default function CategoryDropdown({ title, items }: CategoryDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-600 rounded-lg overflow-hidden shadow-lg bg-cardBg">
            <h2
                className="flex justify-between items-center bg-secondary text-xl font-semibold p-5 cursor-pointer hover:bg-highlight transition duration-300"
                onClick={() => setIsOpen(!isOpen)}
                role="button"
            >
                <span className="text-textPrimary">{title}</span>
                <FaChevronDown
                    className={`text-textPrimary transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </h2>

            {isOpen && (
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-cardBgLight">
                    {items.map((reward) => (
                        <RewardCard key={reward.rewardId} reward={reward} />
                    ))}
                </div>
            )}
        </div>
    );
}
