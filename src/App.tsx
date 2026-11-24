import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PetalParticles } from './components/PetalParticles';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { MemoryAlbumSection } from './components/MemoryAlbumSection';
import { StormsWeCrossedSection } from './components/StormsWeCrossedSection';
import { LoveNotesSection } from './components/LoveNotesSection';
import { Chapter5BirthdaySection } from './components/Chapter5BirthdaySection';
import { BirthdayLetterSection } from './components/BirthdayLetterSection';
import { FinalDestinationSection } from './components/FinalDestinationSection';
import { Footer } from './components/Footer';
import { PersonalizationModal } from './components/PersonalizationModal';
import { loveStory } from './data/loveStory';
import { romanticAudio } from './utils/audioPlayer';

export const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [petalsActive, setPetalsActive] = useState(true);
  const [personalizeModalOpen, setPersonalizeModalOpen] = useState(false);

  useEffect(() => {
    // Initialize audio controller with loveStory config
    romanticAudio.init(loveStory.audio.bgMusicUrl, loveStory.audio.defaultVolume);
  }, []);

  const handleEnvelopeComplete = () => {
    setEnvelopeOpened(true);
    // Smooth scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayStory = () => {
    setEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans relative selection:bg-dustyrose selection:text-burgundy-950">
      {/* Falling Rose Petals & Golden Sparkle Particles */}
      <PetalParticles enabled={petalsActive} />

      {/* Opening Envelope Experience (Visible until opened) */}
      <OpeningEnvelope
        isOpenState={envelopeOpened}
        onComplete={handleEnvelopeComplete}
      />

      {/* Navigation Bar */}
      <Navbar
        onOpenPersonalizeModal={() => setPersonalizeModalOpen(true)}
        petalsActive={petalsActive}
        onTogglePetals={() => setPetalsActive(!petalsActive)}
      />

      {/* Main Website Sections */}
      <main className="relative z-10">
        {/* Hero: SOMEWHERE, IT'S ALWAYS YOU. */}
        <HeroSection />

        {/* Chapter 01 — THE BEGINNING: "And just like that, life had a plot twist." */}
        <OurStorySection onOpenPersonalizeModal={() => setPersonalizeModalOpen(true)} />

        {/* Chapter 02 — OUR LITTLE WORLD: "Some of my favourite memories have you in them." */}
        <MemoryAlbumSection onOpenPersonalizeModal={() => setPersonalizeModalOpen(true)} />

        {/* Chapter 03 — THE UNEXPECTED ROUTES: "Okay, let's be honest. We're not always cute." */}
        <StormsWeCrossedSection />

        {/* Chapter 04 — STILL MY FAVOURITE PERSON: "After all the chapters, it's still you." */}
        <LoveNotesSection />

        {/* Chapter 05 — IT'S YOUR DAY!: "Today, my favourite boy gets all the attention." */}
        <Chapter5BirthdaySection />

        {/* THE LETTER — FROM MY HEART TO YOURS: "A little something I wanted to say." */}
        <BirthdayLetterSection />

        {/* THE FINAL PAGE: "The journey is nowhere near over." */}
        <FinalDestinationSection onReplayStory={handleReplayStory} />
      </main>

      {/* Footer */}
      <Footer onOpenPersonalizeModal={() => setPersonalizeModalOpen(true)} />

      {/* Personalization Help Modal */}
      <PersonalizationModal
        isOpen={personalizeModalOpen}
        onClose={() => setPersonalizeModalOpen(false)}
      />
    </div>
  );
};

export default App;
