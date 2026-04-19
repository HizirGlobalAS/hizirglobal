"use client";

import React, { useState } from "react";
import { useAudio } from "@/context/AudioContext";
import { Play, Pause, Volume2, VolumeX, SkipForward, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayerWidget() {
  const { isPlaying, isMuted, currentTrack, togglePlay, toggleMute, playNext } = useAudio();
  const [isExpanded, setIsExpanded] = useState(true);
  const [hasManuallyToggled, setHasManuallyToggled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!hasManuallyToggled) {
        if (window.scrollY > 150) {
          setIsExpanded(false);
        } else {
          setIsExpanded(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasManuallyToggled]);

  // If we're not mounted yet, to avoid hydration mismatch, returning early could be done, 
  // but AudioContext already returns children without error. 
  // We can safely render the client component visual.

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex items-center gap-4 py-3 px-5 rounded-full shadow-2xl bg-white/80 dark:bg-black/60 backdrop-blur-md border border-gray-200/50 dark:border-white/10"
          >
            {/* Now Playing Info */}
            <div className="flex flex-col mr-2 min-w-[120px] max-w-[150px]">
              <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                Now Playing
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                {currentTrack?.title || "Müzik Bekleniyor..."}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 border-l border-gray-300 dark:border-white/20 pl-4">
              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1eab7f] hover:bg-[#178a66] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1eab7f] focus:ring-offset-2 dark:focus:ring-offset-black"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
              </button>

              <button
                onClick={playNext}
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Next track"
              >
                <SkipForward size={16} />
              </button>

              <button
                onClick={toggleMute}
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors ml-1"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            {/* Collapse Button */}
            <button
              onClick={() => {
                setIsExpanded(false);
                setHasManuallyToggled(true);
              }}
              className="ml-2 w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Collapse player"
            >
              <span className="text-xl leading-none mt-[-2px]">×</span>
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => {
                setIsExpanded(true);
                setHasManuallyToggled(true);
            }}
            className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl bg-white/90 dark:bg-black/80 backdrop-blur-md border border-gray-200/50 dark:border-white/10 text-gray-800 dark:text-white hover:scale-105 transition-transform"
            aria-label="Open audio player"
          >
            {isPlaying ? (
              <div className="flex items-center gap-[3px] h-5 justify-center">
                <span className="w-1 bg-[#1eab7f] rounded-full animate-[bounce_1s_infinite_100ms] h-3"></span>
                <span className="w-1 bg-[#1eab7f] rounded-full animate-[bounce_1.2s_infinite_300ms] h-5"></span>
                <span className="w-1 bg-[#1eab7f] rounded-full animate-[bounce_0.9s_infinite_200ms] h-4"></span>
                <span className="w-1 bg-[#1eab7f] rounded-full animate-[bounce_1.1s_infinite_400ms] h-3"></span>
              </div>
            ) : (
              <Music2 size={24} className="text-gray-600 dark:text-gray-300" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
