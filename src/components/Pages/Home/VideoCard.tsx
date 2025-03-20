import React, { useRef, useEffect } from "react";
import useIsInViewport from "../../../hooks/useIsInViewport";
import Sidebar from "./SideBar";
import SlideShowCard from "./SlideShowCard";
import Image from "next/image";

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
  onLogoClick: (initiativeData: any) => void;
  callToAction?: string[];
  links?: string[];
}

const VideoCard: React.FC<VideoCardProps> = React.memo(({
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
  onLogoClick,
  callToAction,
  links,
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

  // Called when logo is clicked
  const handleLogoClickInternal = () => {
    onLogoClick({
      id: videoId,
      company: author,
      initiative: title,
      challenge,
      description,
      callToAction,
      links,
      logo,
    });
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
          preload="metadata"
          ref={video}
          onClick={togglePlay}
          id={String(index)}
          autoPlay={index === 0}
          className="video w-full h-full object-cover"
        >
          <source src={videoURL} type="video/mp4" />
        </video>
      ) : (
        <SlideShowCard
          logo={logo || ""}
          company={author}
          title={title}
          description={description}
          challenge={challenge}
        />
      )}
      {/* Logo at the bottom center with click to open modal */}
      {logo && (
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 p-2 cursor-pointer drop-shadow-lg"
          onClick={handleLogoClickInternal}
        >
          <Image
            src={logo}
            alt={author}
            className="max-w-[130px] opacity-95"
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
});

export default VideoCard;
