"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
// react-youtube default export
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";

export interface RadioTrack {
  id: string;
  title: string;
  youtubeId: string;
}

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  currentTrack: RadioTrack | null;
  togglePlay: () => void;
  toggleMute: () => void;
  playNext: () => void;
  setTracks: (tracks: RadioTrack[]) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children, initialTracks = [] }: { children: React.ReactNode, initialTracks?: RadioTrack[] }) {
  const [tracks, setTracksState] = useState<RadioTrack[]>(initialTracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); 
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const playerRef = useRef<YouTubePlayer | null>(null);

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);
    // Restore mute preference
    const savedPrefs = localStorage.getItem("hizir_audio_prefs");
    if (savedPrefs) {
      try {
        const parsed = JSON.parse(savedPrefs);
        if (typeof parsed.isMuted === "boolean") {
          setIsMuted(parsed.isMuted);
        }
      } catch (e) {
        console.error("Failed to parse audio prefs", e);
      }
    }
  }, []);

  // Sync mute state to player and local storage
  useEffect(() => {
    if (playerRef.current && isPlayerReady) {
      if (isMuted) {
         playerRef.current.mute();
      } else {
         playerRef.current.unMute();
      }
    }
    if (isClient) {
      localStorage.setItem("hizir_audio_prefs", JSON.stringify({ isMuted }));
    }
  }, [isMuted, isClient, isPlayerReady]);

  const currentTrack = tracks.length > 0 ? tracks[currentTrackIndex] : null;

  const togglePlay = () => {
    if (!playerRef.current || !isPlayerReady) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const playNext = () => {
    if (tracks.length > 0) {
      setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
      setIsPlaying(true); // Ensure it starts playing when skipped
    }
  };

  // Handle auto-playing next track when one finishes
  const handleEnded = () => {
    playNext();
  };

  const setTracks = (newTracks: RadioTrack[]) => {
      setTracksState(newTracks);
  }

  const onPlayerReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    setIsPlayerReady(true);
    if (isMuted) {
        event.target.mute();
    }
    if (isPlaying) {
        event.target.playVideo();
    }
  };

  const onPlayerStateChange = (event: YouTubeEvent) => {
     // 1 = playing, 2 = paused, 0 = ended
     if (event.data === 1) setIsPlaying(true);
     else if (event.data === 2) setIsPlaying(false);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isMuted, currentTrack, togglePlay, toggleMute, playNext, setTracks }}>
      {isClient && currentTrack && (
        <div style={{ display: 'none' }}>
           <YouTube
              videoId={currentTrack.youtubeId}
              opts={{
                 height: '0',
                 width: '0',
                 playerVars: {
                     autoplay: isPlaying ? 1 : 0,
                     controls: 0,
                     disablekb: 1,
                     fs: 0,
                     iv_load_policy: 3,
                     modestbranding: 1,
                     playsinline: 1,
                     rel: 0
                 }
              }}
              onReady={onPlayerReady}
              onStateChange={onPlayerStateChange}
              onEnd={handleEnded}
              onError={() => playNext()} // auto skip if video broken
           />
        </div>
      )}
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
