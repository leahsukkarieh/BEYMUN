"use client"
import { useState, useRef } from 'react';

const CustomVideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Using ref instead of getElementById

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        setIsPlaying(true);
        toggleFullScreen(); // Call to go fullscreen when play is clicked
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
          videoRef.current.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) { /* Safari */
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) { /* IE11 */
          (document as any).msExitFullscreen();
        }
      }
    }
  };

  return (
    <div 
        className="relative mx-auto"
        style={{width:"65%", height:"60%"}}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support this content type.
      </video>
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-no-repeat bg-center bg-contain cursor-pointer"
          style={{ backgroundImage: `url('/images/playbutton.png')` }}
        ></button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
