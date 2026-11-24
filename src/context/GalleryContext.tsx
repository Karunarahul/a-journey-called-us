import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { allStoryPhotos, type PhotoConfig } from '../data/photoConfig';
import { MemoryLightbox } from '../components/MemoryLightbox';

interface GalleryContextType {
  openLightbox: (photo: PhotoConfig | string) => void;
  closeLightbox: () => void;
  currentPhoto: PhotoConfig | null;
  isOpen: boolean;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (target: PhotoConfig | string) => {
    let targetUrl = '';
    if (typeof target === 'string') {
      targetUrl = target;
    } else if (target && target.url) {
      targetUrl = target.url;
    }

    const index = allStoryPhotos.findIndex(
      (p) => p.url === targetUrl || (typeof target === 'object' && p.id === target.id)
    );

    if (index !== -1) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(0);
    }
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const currentPhoto = currentIndex !== null ? allStoryPhotos[currentIndex] : null;

  return (
    <GalleryContext.Provider
      value={{
        openLightbox,
        closeLightbox,
        currentPhoto,
        isOpen: currentIndex !== null,
      }}
    >
      {children}

      {/* Global Full-Screen Interactive Lightbox */}
      <MemoryLightbox
        photos={allStoryPhotos}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNavigate={(newIndex) => setCurrentIndex(newIndex)}
      />
    </GalleryContext.Provider>
  );
};

export const useGallery = (): GalleryContextType => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
