import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PetalParticles } from './components/PetalParticles';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { TimelineSection } from './components/TimelineSection';
import { LoveNotesSection } from './components/LoveNotesSection';
import { StormsWeCrossedSection } from './components/StormsWeCrossedSection';
import { MemoryAlbumSection } from './components/MemoryAlbumSection';
import { ReasonsSection } from './components/ReasonsSection';
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
        {/* Section 3: Hero */}
        <HeroSection />

        {/* Section 4: Our Story - Where It All Started */}
        <OurStorySection onOpenPersonalizeModal={() => setPersonalizeModalOpen(true)} />

        {/* Section 5: Our Journey - Relationship Timeline */}
        <TimelineSection />

        {/* Section 6: The Little Things - Love Notes */}
        <LoveNotesSection />

        {/* Section 7: The Storms We Crossed - Our Love Isn't Perfect, It's Real */}
        <StormsWeCrossedSection />

        {/* Section 8: Our Memory Album - Polaroid Gallery */}
        <MemoryAlbumSection onOpenPersonalizeModal={() => setPersonalizeModalOpen(true)} />

        {/* Section 9: A Thousand Reasons - Why You? */}
        <ReasonsSection />

        {/* Section 10: The Birthday Letter - The Heart of the Website */}
        <BirthdayLetterSection />

        {/* Section 11: Final Destination - The Endless Journey */}
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
