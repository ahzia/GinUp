"use client";

import MyProfile from "@/components/common/MyProfile";
import SearchBar from "@/components/common/SearchBar";
import { userData } from "../../../../lib/users";
import HubsCategories from "./HubsCategories";
import { hubs } from "../../../../lib/hubs";

export default function MessagesPage() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="container mx-auto pb-14">
      <div className='relative profile-background'>
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
    </div >
  );
}
