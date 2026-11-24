import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Heart, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';
import { loveStory } from '../data/loveStory';

interface NavbarProps {
  onOpenPersonalizeModal?: () => void;
  petalsActive: boolean;
  onTogglePetals: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPersonalizeModal,
  petalsActive,
  onTogglePetals
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check initial audio state
    setIsPlaying(romanticAudio.getIsPlaying());

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = async () => {
    const newState = await romanticAudio.toggle();
    setIsPlaying(newState);
  };

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Love Notes', href: '#notes' },
    { name: 'Resilience', href: '#storms' },
    { name: 'Photo Album', href: '#album' },
    { name: 'Reasons Why', href: '#reasons' },
    { name: 'Birthday Letter', href: '#letter' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-sm border-b border-cream py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-burgundy flex items-center justify-center text-ivory shadow-wax border border-white/20">
              <Heart className="w-4 h-4 fill-ivory text-ivory group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-cormorant text-xl tracking-wider font-semibold text-burgundy group-hover:text-burgundy-800 transition-colors">
              A Journey Called Us
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-mutedbrown">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-burgundy transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-burgundy hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Music & Effects */}
          <div className="flex items-center gap-3">
            {/* Music Toggle */}
            <button
              onClick={handleAudioToggle}
              title={isPlaying ? 'Pause romantic music' : 'Play romantic acoustic music'}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 shadow-sm ${
                isPlaying
                  ? 'bg-burgundy text-ivory border-burgundy shadow-rose-glow'
                  : 'bg-ivory/80 text-mutedbrown border-cream hover:border-dustyrose hover:text-burgundy'
              }`}
            >
              {isPlaying ? (
                <>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-ivory animate-pulse" />
                    <span className="w-0.5 h-3 bg-ivory animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-ivory animate-pulse delay-150" />
                  </div>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Melody Playing</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Play Melody</span>
                </>
              )}
            </button>

            {/* Petals Toggle */}
            <button
              onClick={onTogglePetals}
              title={petalsActive ? 'Hide falling petals' : 'Show falling petals'}
              className={`p-2 rounded-full border text-xs transition-colors ${
                petalsActive
                  ? 'bg-dustyrose/20 text-burgundy border-dustyrose'
                  : 'bg-ivory/80 text-mutedbrown border-cream hover:border-dustyrose'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-charcoal hover:text-burgundy transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-charcoal/40 backdrop-blur-sm">
          <div className="fixed top-16 right-4 left-4 bg-ivory rounded-2xl shadow-xl p-6 border border-cream space-y-4 paper-texture">
            <div className="text-xs uppercase tracking-widest text-dustyrose-dark font-semibold">
              Travel Chapters
            </div>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-charcoal hover:text-burgundy hover:bg-cream/40 rounded-lg transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-cream flex items-center justify-between text-xs text-mutedbrown">
              <span>Dedicated to {loveStory.recipient.nickname}</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPersonalizeModal?.();
                }}
                className="text-burgundy hover:underline font-semibold"
              >
                Personalization Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
