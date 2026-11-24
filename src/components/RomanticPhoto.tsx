import React from 'react';
import { Heart } from 'lucide-react';
import type { PhotoConfig } from '../data/photoConfig';
import { useGallery } from '../context/GalleryContext';

interface RomanticPhotoProps {
  photo: PhotoConfig;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
  showCaption?: boolean;
  showCuteNote?: boolean;
  showTape?: boolean;
  showCorners?: boolean;
}

export const RomanticPhoto: React.FC<RomanticPhotoProps> = ({
  photo,
  onClick,
  className = '',
  imageClassName = '',
  showCaption = true,
  showCuteNote = true,
  showTape = false,
  showCorners = true,
}) => {
  const { openLightbox } = useGallery();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openLightbox(photo);
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className={`group relative flex flex-col cursor-pointer ${className}`}
      title="Click to view in full screen with notes"
    >
      {/* Photo Frame Wrapper with Hover Lift & Shadow */}
      <div className="relative overflow-hidden rounded-2xl bg-[#EFEBE2] shadow-md group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-300 border border-[#E5DFD4]">
        {/* Optional Vintage Washi Tape Top Center */}
        {showTape && (
          <div className="washi-tape top-2 left-1/2 -translate-x-1/2 w-16 -rotate-1 rounded-sm bg-[#C8A97E]/30" />
        )}

        {/* Optional Editorial Corner Brackets */}
        {showCorners && (
          <>
            <div className="photo-mount-corner tl" />
            <div className="photo-mount-corner tr" />
            <div className="photo-mount-corner bl" />
            <div className="photo-mount-corner br" />
          </>
        )}

        {/* The Image with Preserved Proportions and Custom Focal Point */}
        <div className={`w-full overflow-hidden ${photo.aspectRatio || 'aspect-[3/4]'}`}>
          <img
            src={photo.url}
            alt={photo.alt || photo.caption}
            loading="lazy"
            style={{ objectPosition: photo.objectPosition || 'center 20%' }}
            className={`w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out ${imageClassName}`}
          />
        </div>

        {/* Interactive Cute Heart Badge on Hover */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF5EE]/95 border border-[#D7B8B1] shadow-md text-[#783D48] backdrop-blur-xs">
            <Heart className="w-3.5 h-3.5 fill-[#783D48]" />
            <span className="font-sans text-[11px] font-medium tracking-wide">View ♡</span>
          </div>
        </div>
      </div>

      {/* Caption & Cute Handwritten Detail Beneath Photo */}
      {(showCaption || showCuteNote) && (
        <div className="mt-3 text-center sm:text-left px-1">
          {showCuteNote && photo.cuteNote && (
            <div className="flex items-center justify-center sm:justify-start gap-1 font-handwriting text-base sm:text-lg text-[#783D48]">
              <Heart className="w-3 h-3 fill-[#783D48]" />
              <span>{photo.cuteNote}</span>
            </div>
          )}

          {showCaption && (
            <p className="font-cormorant text-sm sm:text-base text-[#242321]/80 leading-snug mt-0.5">
              {photo.caption}
            </p>
          )}

          {photo.annotation && (
            <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A18F7E] mt-0.5">
              {photo.annotation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
