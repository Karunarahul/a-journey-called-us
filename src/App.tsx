import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { OpeningInvitation } from './components/OpeningInvitation';
import { Chapter1Beginning } from './components/Chapter1Beginning';
import { Chapter2Memories } from './components/Chapter2Memories';
import { Chapter3Journey } from './components/Chapter3Journey';
import { Chapter4Today } from './components/Chapter4Today';
import { Chapter5Birthday } from './components/Chapter5Birthday';
import { BirthdayLetter } from './components/BirthdayLetter';
import { FinalDestination } from './components/FinalDestination';
import { Footer } from './components/Footer';
import { RomanticBackground } from './components/RomanticBackground';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { AutoplayPrompt } from './components/AutoplayPrompt';
import { GalleryProvider } from './context/GalleryContext';
import { loveStory } from './data/loveStory';
import { romanticAudio } from './utils/audioPlayer';
import { assetUrl } from './utils/assetPath';

export const App: React.FC = () => {
  // Opening envelope appears every time website is opened or freshly reloaded
  const [showEnvelope, setShowEnvelope] = useState<boolean>(true);

  useEffect(() => {
    // Initialize gentle background music from replaceable local file
    romanticAudio.init(assetUrl('/music/our-song.mp3'), 0.45);

    // Attempt automatic playback; fallback to elegant prompt if blocked
    romanticAudio.attemptAutoplay();

    document.title = loveStory.meta.title;
  }, []);

  const handleBeginStory = () => {
    const chapter1 = document.getElementById('chapter-1');
    if (chapter1) {
      chapter1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayStory = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <GalleryProvider>
      <div className="min-h-screen bg-[#F7F4EE] text-[#242321] font-sans relative selection:bg-[#D7B8B1] selection:text-[#32151B] overflow-x-hidden">
        {/* Ambient Romantic Background (Falling Petals & Subtle Floating Love Symbols) */}
        <RomanticBackground />

        {/* Opening Envelope Popup — Displays on Every Fresh Visit/Reload */}
        {showEnvelope && (
          <OpeningEnvelope
            onDismiss={() => setShowEnvelope(false)}
          />
        )}

        {/* Discreet Autoplay Fallback Prompt ("Tap to play our song ♡") */}
        <AutoplayPrompt />

        {/* Top Editorial Navigation */}
        <Navbar onOpenEnvelope={() => setShowEnvelope(true)} />

        {/* Main Continuous Romantic Narrative */}
        <main className="relative z-10">
          {/* Opening — The Invitation */}
          <OpeningInvitation onBeginStory={handleBeginStory} />

          {/* Chapter 01 — The Beginning */}
          <Chapter1Beginning />

          {/* Chapter 02 — Our Little World */}
          <Chapter2Memories />

          {/* Chapter 03 — The Unexpected Routes */}
          <Chapter3Journey />

          {/* Chapter 04 — Still My Favourite Person */}
          <Chapter4Today />

          {/* Chapter 05 — It's Your Day! */}
          <Chapter5Birthday />

          {/* Chapter 06 — The Personal Birthday Letter */}
          <BirthdayLetter />

          {/* Chapter 07 — Final Destination */}
          <FinalDestination onReplayStory={handleReplayStory} />
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </GalleryProvider>
  );
};

export default App;
