import React, { useEffect, useRef, useState } from "react";
import Footbath from "../../images/Footbath-v13.webm";
import "./VideoComponent.css";

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoEnded, setVideoEnded] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const playAgain = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Video play failed: ", error);
        });
      }
    }, 2000); // 2-second delay before autoplay

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="video-container" aria-label="Video presentation of React Pro Solutions">
      <video 
        ref={videoRef} 
        className="home-video" 
        muted={isMuted} 
        loop={false}
        onEnded={() => setVideoEnded(true)}
        tabIndex="0"
      >
        <source src={Footbath} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <button 
        onClick={toggleMute} 
        className="mute-button"
        aria-label="Mute or Unmute Video"
        tabIndex="0"
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      {isVideoEnded && (
        <button 
          onClick={playAgain} 
          className="play-again-button"
          aria-label="Play Video Again"
          tabIndex="0"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default VideoComponent;
