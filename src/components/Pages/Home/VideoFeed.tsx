import React, { useState, useEffect } from "react";
import { initiatives as initiativesData } from "../../../../lib/initiatives"; // your initiatives data file
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
      videoURL: initiative.videoFile ? `/videos/${initiative.videoFile}` : null,
      title: initiative.initiative,
      description: initiative.description,
      logo: initiative.logo || null,
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
          // Update tokens and stars (adjust logic as needed)
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

  if (!videosLoaded) {
    return <div className="text-white p-4">Loading...</div>;
  }

  // Partition initiatives: first with video, then without video.
  const videoInitiatives = videos.filter((v) => v.videoURL);
  const slideshowInitiatives = videos.filter((v) => !v.videoURL);

  return (
    <div className="bg-black h-[calc(100vh-60px)] relative">
      <AIChat
        aiChatOpen={aiChatOpen}
        setAiChatOpen={setAiChatOpen}
        aiChatVideoId={aiChatVideoId}
        videosData={videos}
      />
      <ScoreBoard ginxToken={ginxToken} totalStars={totalStars} />
      {/* Render initiatives with video first */}
      {videoInitiatives.map((video, index) => (
        <VideoCard
          key={video.id}
          index={index}
          author={video.author}
          videoURL={video.videoURL}
          authorImg={null} // Optionally replace with a default image
          lastVideoIndex={videos.length - 1}
          handleLike={handleLike}
          handleSave={handleSave}
          videoId={video.id}
          liked={video.liked}
          saved={video.saved}
          aiChatOpen={aiChatOpen}
          setAiChatOpen={setAiChatOpen}
          setAiChatVideoId={setAiChatVideoId}
          logo={`/images/${video.logo}`}
          title={video.title}
          description={video.description}
        />
      ))}
      {/* Then render initiatives without video (which will show a slideshow) */}
      {slideshowInitiatives.map((video, index) => (
        <VideoCard
          key={video.id}
          index={videoInitiatives.length + index}
          author={video.author}
          videoURL={video.videoURL} // will be null so VideoCard renders a slideshow card
          authorImg={null}
          lastVideoIndex={videos.length - 1}
          handleLike={handleLike}
          handleSave={handleSave}
          videoId={video.id}
          liked={video.liked}
          saved={video.saved}
          aiChatOpen={aiChatOpen}
          setAiChatOpen={setAiChatOpen}
          setAiChatVideoId={setAiChatVideoId}
          logo={`/images/${video.logo}`}
          title={video.title}
          description={video.description}
          challenge={video.challenge}
        />
      ))}
    </div>
  );
};

export default GinUpVideoFeed;
