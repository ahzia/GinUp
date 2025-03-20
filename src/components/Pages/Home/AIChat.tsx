import React from "react";

interface AIChatProps {
  aiChatOpen: boolean;
  setAiChatOpen: (open: boolean) => void;
  aiChatVideoId: string | null;
  videosData: any[];
}

const AIChat: React.FC<AIChatProps> = ({
  aiChatOpen,
  setAiChatOpen,
  aiChatVideoId,
  videosData,
}) => {
  return (
    <div>
      {/* AI Chat component implementation will go here */}
    </div>
  );
};

export default AIChat;
