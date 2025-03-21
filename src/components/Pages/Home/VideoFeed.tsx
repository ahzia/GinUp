import React, { useState, useEffect, useMemo } from "react";
import { initiatives as initiativesData } from "../../../../lib/initiatives"; // your initiatives data file
import VideoCard from "./VideoCard";
import ScoreBoard from "./ScoreBoard";
import AIChat from "./AIChat";
import CompanyDetailsModal from "./CompanyDetailsModal";
import Modal from "../../common/Modal";

const GinUpVideoFeed = () => {
  // State for video initiatives
  const [videos, setVideos] = useState<any[]>([]);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [smiles, setSmiles] = useState(2000);
  const [totalStars, setTotalStars] = useState(10000);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatVideoId, setAiChatVideoId] = useState<string | null>(null);

  // State for company details modal (logo click)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInitiative, setSelectedInitiative] = useState<any>(null);

  useEffect(() => {
    // Map initiatives to our video format.
    const transformedVideos = initiativesData.initiatives.map((initiative) => ({
      id: initiative.id,
      author: initiative.company,
      videoURL: initiative.videoFile ? `/videos/${initiative.videoFile}` : null,
      title: initiative.initiative,
      description: initiative.description,
      logo: initiative.logo || null,
      challenge: initiative.challenge || "",
      callToAction: initiative.callToAction || [],
      links: initiative.links || [],
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
          setSmiles((prev) => prev + (newLikedStatus ? -1 : 1));
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

  // Callback when the logo is clicked (for company details)
  const handleLogoClick = (initiativeData: any) => {
    setSelectedInitiative(initiativeData);
    setIsModalOpen(true);
  };

  // Callback when the AI chat (Genie) button is clicked in Sidebar (via VideoCard)
  const handleChatClick = (videoId: string) => {
    setAiChatVideoId(videoId);
    setAiChatOpen(true);
  };

  // Memoize partitioned lists to avoid re-computation
  const videoInitiatives = useMemo(() => videos.filter((v) => v.videoURL), [videos]);
  const slideshowInitiatives = useMemo(() => videos.filter((v) => !v.videoURL), [videos]);

  if (!videosLoaded) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <>
      <div className="bg-black h-[calc(100vh-60px)] relative">
        <ScoreBoard smiles={smiles} totalStars={totalStars} />
        {/* Render initiatives with video first */}
        {videoInitiatives.map((video, index) => (
          <VideoCard
            key={video.id}
            index={index}
            author={video.author}
            videoURL={video.videoURL}
            authorImg={null} // Optionally a default image
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
            onLogoClick={handleLogoClick}
            callToAction={video.callToAction}
            links={video.links}
            onChatClick={handleChatClick}
          />
        ))}
        {/* Then render initiatives without video (slideshow) */}
        {slideshowInitiatives.map((video, index) => (
          <VideoCard
            key={video.id}
            index={videoInitiatives.length + index}
            author={video.author}
            videoURL={video.videoURL} // will be null so SlideShowCard renders
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
            onLogoClick={handleLogoClick}
            callToAction={video.callToAction}
            links={video.links}
            onChatClick={handleChatClick}
          />
        ))}
      </div>

      {/* Global AI Chat Modal */}
      <Modal isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} className="w-full max-w-2xl h-auto">
        <AIChat
          aiChatOpen={aiChatOpen}
          setAiChatOpen={setAiChatOpen}
          aiChatVideoId={aiChatVideoId}
          videosData={videos}
        />
      </Modal>

      {/* Company Details Modal */}
      {selectedInitiative && (
        <CompanyDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initiative={selectedInitiative}
        />
      )}
    </>
  );
};

export default GinUpVideoFeed;
