import React, { useState, useEffect } from "react";
import { initiatives as initiativesData } from "../../../../lib/initiatives"; // our initiatives data file
import VideoCard from "./VideoCard";
import ScoreBoard from "./ScoreBoard";
import AIChat from "./AIChat";

const GinUpVideoFeed = () => {
  // Transform initiatives data to add interactive fields (liked, saved)
  const [videos, setVideos] = useState<any[]>([]);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [ginxToken, setGinxToken] = useState(2000);
  const [totalStars, setTotalStars] = useState(10000);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatVideoId, setAiChatVideoId] = useState<string | null>(null);

  useEffect(() => {
    // Map initiatives to our video format.
    const transformedVideos = initiativesData.initiatives.map((initiative) => ({
      id: initiative.id,
      author: initiative.company,
      videoURL: `/videos/${initiative.videoFile}`, // Ensure your video files are in the public/videos folder
      title: initiative.initiative,
      description: initiative.description,
      liked: false,
      saved: false,
    }));
    setVideos(transformedVideos);
    setVideosLoaded(true);
  }, []);

  const handleLike = (id: string) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) => {
        if (video.id === id) {
          const newLikedStatus = !video.liked;
          // Update tokens and stars (you can adjust the logic as needed)
          setGinxToken((prev) => prev + (newLikedStatus ? -1 : 1));
          setTotalStars((prev) => prev + (newLikedStatus ? 200 : -200));
          return { ...video, liked: newLikedStatus };
        }
        return video;
      })
    );
  };

  const handleSave = (id: string) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) => {
        if (video.id === id) {
          return { ...video, saved: !video.saved };
        }
        return video;
      })
    );
  };

  return (
    <div className="bg-black h-[calc(100vh-60px)] relative">
      {/* AIChat is empty for now */}
      <AIChat
        aiChatOpen={aiChatOpen}
        setAiChatOpen={setAiChatOpen}
        aiChatVideoId={aiChatVideoId}
        videosData={videos}
      />
      <ScoreBoard ginxToken={ginxToken} totalStars={totalStars} />
      {videosLoaded && videos.length > 0 ? (
        <>
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              index={index}
              author={video.author}
              videoURL={video.videoURL}
              authorImg={null} // Replace with a company logo or a default image if needed
              lastVideoIndex={videos.length - 1}
              handleLike={handleLike}
              handleSave={handleSave}
              videoId={video.id}
              liked={video.liked}
              saved={video.saved}
              aiChatOpen={aiChatOpen}
              setAiChatOpen={setAiChatOpen}
              setAiChatVideoId={setAiChatVideoId}
            />
          ))}
        </>
      ) : (
        <div className="text-white p-4">Loading...</div>
      )}
    </div>
  );
};

export default GinUpVideoFeed;
