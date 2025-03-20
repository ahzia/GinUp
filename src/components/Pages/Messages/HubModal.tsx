'use client';
import Image from "next/image";
import {
  MdPeople,
  MdCategory,
  MdPerson,
} from "react-icons/md";
import Modal from "@/components/common/Modal";
import Members from "@/components/common/Members";
import { Hub } from "@/models/Hub";
import { useState } from "react";

import GroupChat from "./Chat";

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  hub: Hub;
}

const PlanModal: React.FC<PlanModalProps> = ({ isOpen, onClose, hub }) => {
  const [isGroupChatOpen, setGroupChatOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="relative flex flex-col h-full">
          <Image
            src={hub.image}
            alt={hub.name}
            className="w-full h-80 object-cover"
          />

          {/* Modal Content */}
          <div className="p-6 flex-1 overflow-y-auto bg-mainBg text-textPrimary">
            <h3 className="text-2xl font-bold mb-4">{hub.name}</h3>

            {/* Description */}
            <section className="mb-6">
              <p className="text-textSecondary">{hub.description}</p>
            </section>

            {/* Participants */}
            <section className="mb-6">
              <Members participants={hub.participants} />
            </section>

            {/* Hub Details */}
            <section className="mb-6">
              <div className="grid grid-cols-2 gap-4">

                {/* Created by */}
                <div className="flex items-center space-x-2">
                  <MdPerson className="text-orange-400 text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold">Created by</h5>
                    <p className="text-textSecondary">{hub.created_by}</p>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center space-x-2">
                  <MdCategory className="text-purple-400 text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold">Category</h5>
                    <p className="text-textSecondary">{hub.category}</p>
                  </div>
                </div>

                {/* Participants */}
                <div className="flex items-center space-x-2">
                  <MdPeople className="text-highlight text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold">Participants</h5>
                    <p className="text-textSecondary">
                      {hub.participants}/{hub.max_participants}
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Join/Leave Buttons */}
            <div className="bg-cardBg p-4 sticky bottom-0 flex justify-center">
              <button
                className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-[#FF5500] transition-all duration-200"
                onClick={() => setGroupChatOpen(true)}
              >
                View Chat
              </button>
              <button
                className="bg-error text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200 ml-4"
              >
                Leave Hub
              </button>
              <button
                className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-[#FF5500] transition-all duration-200"
              >
                Join Hub
              </button>
            </div>
          </div>
        </div>

      </Modal>

      {isGroupChatOpen && (
        <GroupChat
          isOpen={isGroupChatOpen}
          onClose={() => setGroupChatOpen(false)}
          hub={hub}
        />
      )}
    </>
  );
};

export default PlanModal;
