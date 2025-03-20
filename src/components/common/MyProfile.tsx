'use client';
import { User } from "@/models/User";
import Image from "next/image";
import classNames from "classnames";
import ProfileModal from "./ProfileModal";
import { useState } from "react";

export default function MyProfile({ user }: { user: User }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="container flex items-center justify-end mb-10 text-textPrimary">
        <div className="relative flex items-center flex-col">
          <div className="relative" onClick={() => setModalOpen(true)}>
            <div
              className={classNames(
                "absolute -top-1 -left-1 w-20 h-20 rounded-full z-0 bg-highlight shadow-lg",
              )}
            ></div>
            <Image
              src={user.profilePic}
              alt={`${user.name}'s profile picture`}
              className="rounded-full w-20 h-20 relative z-10"
            />
          </div>
        </div>
      </div>
      <ProfileModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} user={user} />
    </>
  );
}
