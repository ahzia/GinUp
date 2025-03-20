import { MdClose } from "react-icons/md";
import { use, useEffect } from "react";

interface AIChatProps {
    aiChatOpen: boolean;
    setAiChatOpen: (open: boolean) => void;
    aiChatVideoId?: string;
    videosData?: { id: string; title: string; description: string }[];
}

export default function AIChat({ aiChatOpen, setAiChatOpen, aiChatVideoId, videosData }: AIChatProps) {
    const generateSessionId = (videoId: string) => {
        return `session-${videoId}`;
    };

    useEffect(() => {
        if (aiChatVideoId) {
            // Check if there's already a session for this video, otherwise create a new one
            let sessionId = sessionStorage.getItem(`df-session-${aiChatVideoId}`);
            if (!sessionId) {
                sessionId = generateSessionId(aiChatVideoId);
                sessionStorage.setItem(`df-session-${aiChatVideoId}`, sessionId);
            }
            sessionStorage.setItem('df-messenger-sessionID', sessionId); // Set for AI agent
        }
    }, [aiChatVideoId]);

    const sendMessageToAgent = (message: string) => {
        const sessionId = sessionStorage.getItem('df-messenger-sessionID');
        if (!sessionId) return;

        fetch(
            `https://dialogflow.cloud.google.com/v1/cx/integrations/messenger/webhook/projects/hey-buddy-425118/agents/565449f1-c5bd-40c2-8457-295ce6ae892d/sessions/${sessionId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    queryInput: {
                        text: {
                            text: message,
                        },
                        languageCode: 'en',
                    },
                    queryParams: {
                        channel: 'DF_MESSENGER',
                    },
                }),
            }
        )
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        if (aiChatVideoId && aiChatOpen && videosData) {
            const video = videosData.find((video) => video.id === aiChatVideoId);
            if (video) {
                sendMessageToAgent(`{agent="smileUp", userName: "Ahmad", projectName: "${video.title}", projectDescription: "${video.description}"}`);
            }
        }
    }, [aiChatVideoId, aiChatOpen, videosData]);

    if (!aiChatOpen) return null;

    return (
        <div className="w-full h-[850px] relative z-50">
            <button
                className="absolute top-4 right-4 z-20 bg-secondary p-2 rounded-full hover:bg-error transition-all duration-200"
                onClick={() => setAiChatOpen(false)}
                aria-label="Close Modal"
            >
                <MdClose size={28} className="text-textPrimary" />
            </button>
            <df-messenger
                project-id="hey-buddy-425118"
                agent-id="565449f1-c5bd-40c2-8457-295ce6ae892d"
                language-code="en"
                max-query-length="-1"
                allow-feedback="all"
                session-id={generateSessionId(aiChatVideoId)}
            >
                <df-messenger-chat chat-title="SmileUp AI"></df-messenger-chat>
            </df-messenger>
        </div>
    );
}
