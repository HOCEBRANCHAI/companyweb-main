import React from 'react';
import { X } from 'lucide-react';
import { getVideoUrl } from '../utils/simpleImageUrls';

const videoSrc = getVideoUrl('hoc.mp4'); // Video from Supabase

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoPopup({ isOpen, onClose }: VideoPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        <video
          className="w-full aspect-video"
          controls
          autoPlay
          playsInline
          src={videoSrc}
          onError={(e) => console.error('Video Error:', e)}
        />
      </div>     </div>


  );
}