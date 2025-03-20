'use client';
import { useState } from "react";
import { MdClose, MdCheck } from "react-icons/md";
import Image from "next/image";
import { users } from "../../../../lib/users";

const MeetFriends: React.FC = () => {
    const [currentUserIndex, setCurrentUserIndex] = useState(0);

    const currentUser = users[currentUserIndex];

    const handleNextUser = () => {
        setCurrentUserIndex((prev) => (prev + 1) % users.length);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-mainBg text-white p-6 h-full">
            <header className="mb-4 text-center">
                <h1 className="text-3xl font-bold text-highlight mb-1">Meet New Friends</h1>
                <p className="text-textSecondary text-md">Find people with similar interests!</p>
            </header>

            <div className="w-full max-w-md p-5 rounded-lg shadow-lg bg-cardBg relative">
                <div className="relative w-full h-64 mb-3 rounded-lg overflow-hidden">
                    <Image src={currentUser.profilePic} alt={currentUser.name} fill className="object-cover" />
                </div>

                <h3 className="text-2xl font-bold text-highlight mb-1">{currentUser.name}, {currentUser.age}</h3>
                <p className="text-sm text-textSecondary mb-3">{currentUser.bio}</p>

                <h5 className="text-lg font-semibold mb-1">Interests</h5>
                <ul className="flex space-x-2 mb-4">
                    {currentUser.interests.map((interest, idx) => (
                        <li key={idx} className="bg-secondary text-sm text-textPrimary py-1 px-2 rounded-lg">
                            {interest}
                        </li>
                    ))}
                </ul>

                <div className="flex justify-between w-full">
                    <button className="bg-error text-white p-3 rounded-full hover:bg-red-700 transition duration-300" onClick={handleNextUser}>
                        <MdClose className="text-xl" />
                    </button>
                    <button className="bg-highlight text-white p-3 rounded-full hover:bg-orange-600 transition duration-300" onClick={handleNextUser}>
                        <MdCheck className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MeetFriends;
