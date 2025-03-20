import { Reward } from "@/models/Rewards";
import Modal from "@/components/common/Modal";
import { MdEvent, MdLocationOn } from "react-icons/md";
import { FaScissors } from "react-icons/fa6";
import Image from "next/image";

interface RewardModalProps {
    isOpen: boolean;
    onClose: () => void;
    reward: Reward;
}

export default function RewardModal({ isOpen, onClose, reward }: RewardModalProps) {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-lg p-8 rounded-lg shadow-xl bg-white">
            <div className="relative w-full h-60 rounded-lg overflow-hidden">
                <Image src={`/images/${reward.imageUrl}`} alt={reward.name} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50"></div>
                <div className="absolute bottom-3 right-3">
                    <FaScissors className="text-2xl text-white opacity-80" />
                </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-gray-900">{reward.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{reward.description}</p>

            <div className="mt-4 text-gray-700">
                <p><strong>Provider:</strong> {reward.provider}</p>
            </div>

            <div className="flex justify-between items-center text-gray-800 mt-4">
                <div className="flex items-center">
                    <MdLocationOn className="text-yellow-400 mr-1" />
                    <span>{reward.type}</span>
                </div>
                <div className="flex items-center">
                    <MdEvent className="text-blue-400 mr-1" />
                    <span>{reward.validity}</span>
                </div>
            </div>

            <div className="flex items-center mt-6">
                <span className="text-3xl">{reward.emoji}</span>
                <p className="ml-2 text-lg font-semibold">{reward.ginxCost} GINX</p>
            </div>

            <button
                className="mt-6 w-full px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all"
            >
                Redeem Reward
            </button>
        </Modal>
    );
}
