import { FaRobot, FaShare, FaBookmark } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";

export default function Sidebar({
  aiChatOpen,
  setAiChatOpen,
  videoId,
  handleLike,
  liked,
  saved,
  handleSave,
  setAiChatVideoId,
}: {
  aiChatOpen: boolean;
  setAiChatOpen: (open: boolean) => void;
  videoId: string;
  handleLike: (id: string) => void;
  liked: boolean;
  saved: boolean;
  handleSave: (id: string) => void;
  setAiChatVideoId: (id: string) => void;
}) {
  const handleAiChat = () => {
    // Set chat context with videoId and toggle AI chat panel
    setAiChatVideoId(videoId);
    setAiChatOpen(!aiChatOpen);
  };

  return (
    <div className="absolute right-0 h-screen z-20">
      <ul className="flex flex-col items-center h-full justify-end pb-32 gap-y-10 text-5xl p-2 text-white">
        <li className="flex flex-col items-center justify-center cursor-pointer">
          <MdEmojiEmotions
            className={liked ? "text-highlight" : ""}
            onClick={() => handleLike(videoId)}
          />
          <span className="text-xl">Smile</span>
        </li>
        <li className="flex flex-col items-center justify-center cursor-pointer">
          <FaRobot
            className={aiChatOpen ? "text-yellow-400" : ""}
            onClick={handleAiChat}
          />
          <span className="text-xl">Genie</span>
        </li>
        <li className="flex flex-col items-center justify-center cursor-pointer">
          <FaBookmark
            className={saved ? "text-yellow-400" : ""}
            onClick={() => handleSave(videoId)}
          />
          <span className="text-xl">Save</span>
        </li>
        <li className="flex flex-col items-center justify-center cursor-pointer">
          <FaShare onClick={() => console.log("Share action")} />
          <span className="text-xl">Share</span>
        </li>
      </ul>
    </div>
  );
}
