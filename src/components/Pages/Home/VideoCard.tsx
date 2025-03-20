import { useRef, useEffect } from "react";
import useIsInViewport from "../../../hooks/useIsInViewport";
import Sidebar from "./SideBar";
import SlideShowCard from "./SlideShowCard";

interface VideoCardProps {
  index: number;
  author: string;
  videoURL?: string | null;
  authorImg: string | null;
  lastVideoIndex: number;
  handleLike: (id: string) => void;
  handleSave: (id: string) => void;
  videoId: string;
  liked: boolean;
  saved: boolean;
  aiChatOpen: boolean;
  setAiChatOpen: (open: boolean) => void;
  setAiChatVideoId: (id: string | null) => void;
  logo?: string;
  title: string;
  description: string;
  challenge: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  index,
  author,
  videoURL,
  authorImg,
  lastVideoIndex,
  handleLike,
  handleSave,
  videoId,
  liked,
  saved,
  aiChatOpen,
  setAiChatOpen,
  setAiChatVideoId,
  logo,
  title,
  description,
  challenge,
}) => {
  const video = useRef<HTMLVideoElement>(null);
  const isInViewport = useIsInViewport(video);

  useEffect(() => {
    if (videoURL && isInViewport && video.current) {
      setTimeout(() => {
        video.current?.play();
      }, 1000);
    } else if (video.current) {
      video.current.pause();
    }
  }, [isInViewport, videoURL]);

  const togglePlay = () => {
    if (video.current) {
      if (video.current.paused) {
        video.current.play();
      } else {
        video.current.pause();
      }
    }
  };

  return (
    <div className="slider-children h-full relative">
      {!aiChatOpen && (
        <Sidebar
          handleLike={handleLike}
          videoId={videoId}
          liked={liked}
          saved={saved}
          handleSave={handleSave}
          aiChatOpen={aiChatOpen}
          setAiChatOpen={setAiChatOpen}
          setAiChatVideoId={setAiChatVideoId}
        />
      )}
      {videoURL ? (
        <video
          muted
          ref={video}
          onClick={togglePlay}
          id={String(index)}
          autoPlay={index === 0}
          className="video w-full h-full object-cover"
        >
          <source src={videoURL} type="video/mp4" />
        </video>
      ) : (
        <SlideShowCard logo={logo || ""} company={author} title={title} description={description} challenge={challenge} />
      )}
    </div>
  );
};

export default VideoCard;
