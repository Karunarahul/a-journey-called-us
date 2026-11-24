import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Heart } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';
import { loveStory } from '../data/loveStory';

export const Navbar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(romanticAudio.getIsPlaying());
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = async () => {
    const active = await romanticAudio.toggle();
    setIsPlaying(active);
  };

  const navLinks = [
    { label: "01 Beginning", href: "#chapter-1" },
    { label: "02 Memories", href: "#chapter-2" },
    { label: "03 Journey", href: "#chapter-3" },
    { label: "04 Today", href: "#chapter-4" },
    { label: "05 Birthday", href: "#chapter-5" },
    { label: "The Letter", href: "#letter" },
    { label: "Destination", href: "#destination" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F4EE]/95 backdrop-blur-md py-3 border-b border-[#E5DFD4] shadow-sm'
          : 'bg-[#F7F4EE]/80 backdrop-blur-sm py-4 border-b border-[#E5DFD4]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Title */}
        <a
          href="#opening"
          className="group flex flex-col cursor-pointer"
        >
          <span className="font-cormorant font-bold text-lg sm:text-xl tracking-tight text-[#783D48] group-hover:text-[#62313A] transition-colors">
            SOMEWHERE, IT'S ALWAYS YOU.
          </span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-[#A18F7E]">
            A little story about us • For {loveStory.names.primaryName}
          </span>
        </a>

        {/* Desktop Chapter Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-wider text-[#242321]/75 hover:text-[#783D48] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#783D48] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Audio Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          {/* Audio Player Pill */}
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${
              isPlaying
                ? 'bg-[#783D48] text-[#FCFAF6] border-[#783D48] shadow-sm'
                : 'bg-[#FCFAF6] text-[#A18F7E] border-[#E5DFD4] hover:text-[#783D48]'
            }`}
            title={isPlaying ? "Mute romantic melody" : "Play romantic melody"}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#D7B8B1]" />
                <span className="hidden sm:inline font-medium">The Metro Proposal</span>
                <span className="flex gap-0.5 items-end h-3 ml-1">
                  <span className="w-0.5 h-3 bg-[#FCFAF6] animate-pulse" />
                  <span className="w-0.5 h-2 bg-[#FCFAF6] animate-pulse delay-75" />
                  <span className="w-0.5 h-2.5 bg-[#FCFAF6] animate-pulse delay-150" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#A18F7E]" />
                <span className="hidden sm:inline font-medium">Play Melody</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-[#E5DFD4] text-[#242321] hover:text-[#783D48] lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EE] border-b border-[#E5DFD4] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 text-sm font-sans tracking-wide text-[#242321] hover:bg-[#EFEBE2] hover:text-[#783D48] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 text-center border-t border-[#E5DFD4]/60">
            <span className="font-handwriting text-base text-[#783D48] flex items-center justify-center gap-1">
              For my favourite boy, {loveStory.names.primaryName} <Heart className="w-3 h-3 fill-[#783D48]" />
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
