"use client";

import { useState } from "react";
import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";
import { userData } from "../../../../lib/users";
import HubsCategories from "./HubsCategories";
import { hubs } from "../../../../lib/hubs";
import { FaUserPlus } from "react-icons/fa"; // Add Friend icon
import Modal from "@/components/common/Modal";
import MeetFriends from "./MeetFriends";
export default function MessagesPage() {
  const [isMeetModalOpen, setIsMeetModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="container mx-auto pb-14 relative">
      <div className="relative profile-background">
        <div className="relative z-10 p-5">
          <MyProfile user={userData} />
        </div>
        <div className="relative z-10 px-5 -mt-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="px-4 pt-5">
        <HubsCategories categories={hubs.categories} />
      </div>

      {/* Add Friend Icon - Opens Meet Friends Modal */}
      <button
        onClick={() => setIsMeetModalOpen(true)}
        className="fixed bottom-20 right-5 bg-highlight text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
      >
        <FaUserPlus className="text-2xl" />
      </button>

      {/* Meet Friends Modal */}
      <Modal isOpen={isMeetModalOpen} onClose={() => setIsMeetModalOpen(false)} className="h-full">
        <MeetFriends />
      </Modal>
    </div>
  );
}
