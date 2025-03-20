import { useState } from "react";
import Image from "next/image";
import { MdPeople } from "react-icons/md";
import HubModal from "./HubModal";
import { Hub } from "@/models/Hub";

interface HubCardProps {
  hub: Hub;
}

export default function HubCard({ hub }: HubCardProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div
        className="bg-cardBgLight p-4 rounded-lg shadow-md h-full flex flex-col justify-between transition-transform duration-200 hover:scale-105 cursor-pointer"
        onClick={openModal}
      >
        <div className="relative">
          <Image
            src={hub.image}
            alt={hub.name}
            className="w-full h-52 object-cover rounded-lg"
          />
        </div>
        <h3 className="text-lg font-bold text-textPrimary">{hub.name}</h3>
        <div className="flex justify-between text-textSecondary">
          <div className="flex items-center space-x-1">
            <MdPeople className="text-highlight" />
            <p className="text-sm">
              {hub.participants}/{hub.max_participants}
            </p>
          </div>
        </div>
      </div>
      <HubModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        hub={hub}
      />
    </>
  );
}
