import { useState } from "react";
import { Reward } from "@/models/Rewards";
import { MdEvent } from "react-icons/md";
import RewardModal from "./RewardModal";

interface RewardCardProps {
    reward: Reward;
}

export default function RewardCard({ reward }: RewardCardProps) {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div
                className="p-6 rounded-lg shadow-lg border border-gray-500 bg-white hover:shadow-2xl transition-all cursor-pointer"
                onClick={openModal}
            >
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-300">
                    <img src={`/images/${reward.imageUrl}`} alt={reward.name} className="object-cover w-full h-full" />
                </div>

                <div className="mt-4 flex flex-col">
                    <h3 className="text-lg font-bold text-textPrimary">{reward.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                        <MdEvent className="text-blue-400" />
                        <span className="ml-1">{reward.validity}</span>
                    </div>
                    <div className="mt-3 text-lg font-semibold text-highlight">
                        {reward.ginxCost} GINX
                    </div>
                </div>
            </div>

            <RewardModal isOpen={isModalOpen} onClose={closeModal} reward={reward} />
        </>
    );
}
