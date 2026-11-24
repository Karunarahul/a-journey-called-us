import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin, MessageCircleHeart, Sparkles, Feather, Bookmark } from 'lucide-react';
import { loveStory } from '../data/loveStory';

interface OurStorySectionProps {
  onOpenPersonalizeModal?: () => void;
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ onOpenPersonalizeModal }) => {
  const { ourStory } = loveStory;

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-dustyrose/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-vintagegold/15 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Chapter One • The Genesis</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-3xl sm:text-5xl text-charcoal tracking-tight leading-tight"
          >
            {ourStory.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-mutedbrown mt-2"
          >
            {ourStory.subtitle}
          </motion.p>
        </div>

        {/* Vintage Journal Entry Book Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-2xl shadow-journal border border-[#DEC7AA] paper-texture p-6 sm:p-10 md:p-14 overflow-hidden"
        >
          {/* Top Washi Tape Decoration */}
          <div className="washi-tape -top-3 left-12" />
          <div className="washi-tape -top-3 right-12 transform rotate-2 bg-vintagegold/30" />

          {/* Book Bookmark Ribbon */}
          <div className="hidden sm:block absolute top-0 right-28 w-6 h-24 bg-burgundy shadow-md rounded-b-sm">
            <div className="absolute bottom-0 left-0 right-0 border-b-8 border-transparent border-t-8 border-t-burgundy border-x-4 border-x-[#FFFDF9]" />
          </div>

          {/* Journal Header Bar */}
          <div className="border-b border-[#E8DFC8] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy border border-dustyrose">
                <Feather className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xs uppercase tracking-widest text-mutedbrown block">
                  TRAVEL JOURNAL DIARY
                </span>
                <span className="font-cormorant italic text-lg sm:text-xl font-bold text-burgundy">
                  From College Corridors to Forever
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="text-xs px-3 py-1 rounded-md bg-cream/70 border border-[#D9C6AE] text-mutedbrown-dark font-sans flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-dustyrose-dark" />
                {ourStory.journalDate}
              </span>
            </div>
          </div>

          {/* Main Journal Narrative */}
          <div className="space-y-6 text-charcoal/90 leading-relaxed font-serif text-lg sm:text-xl max-w-3xl">
            {ourStory.narrativeParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:text-5xl first-letter:font-cormorant first-letter:text-burgundy first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Handcrafted Memory Placeholders Grid */}
          <div className="mt-12 pt-8 border-t border-[#E8DFC8]/80">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-burgundy" />
                <h3 className="font-serif text-xs uppercase tracking-widest text-charcoal font-semibold">
                  Personal Milestones & Memories
                </h3>
              </div>
              {onOpenPersonalizeModal && (
                <button
                  onClick={onOpenPersonalizeModal}
                  className="text-xs text-burgundy hover:text-burgundy-800 font-medium underline flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-vintagegold" />
                  <span>How to personalize these details</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Milestone 1: First Meeting Date */}
              <div className="p-4 rounded-xl bg-ivory/60 border border-cream hover:border-dustyrose transition-colors relative group">
                <div className="flex items-center gap-2 text-xs font-serif text-mutedbrown uppercase tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5 text-burgundy" />
                  <span>{ourStory.placeholders.firstMeetingDate.label}</span>
                </div>
                <div className="font-handwriting text-xl text-burgundy font-semibold">
                  {ourStory.placeholders.firstMeetingDate.value}
                </div>
                <div className="text-[10px] text-mutedbrown/70 mt-1 italic">
                  {ourStory.placeholders.firstMeetingDate.note}
                </div>
              </div>

              {/* Milestone 2: College Campus */}
              <div className="p-4 rounded-xl bg-ivory/60 border border-cream hover:border-dustyrose transition-colors relative group">
                <div className="flex items-center gap-2 text-xs font-serif text-mutedbrown uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-burgundy" />
                  <span>{ourStory.placeholders.collegeName.label}</span>
                </div>
                <div className="font-handwriting text-xl text-burgundy font-semibold">
                  {ourStory.placeholders.collegeName.value}
                </div>
                <div className="text-[10px] text-mutedbrown/70 mt-1 italic">
                  {ourStory.placeholders.collegeName.note}
                </div>
              </div>

              {/* Milestone 3: First Conversation */}
              <div className="p-4 rounded-xl bg-ivory/60 border border-cream hover:border-dustyrose transition-colors relative group">
                <div className="flex items-center gap-2 text-xs font-serif text-mutedbrown uppercase tracking-wider mb-1">
                  <MessageCircleHeart className="w-3.5 h-3.5 text-burgundy" />
                  <span>{ourStory.placeholders.firstConversation.label}</span>
                </div>
                <div className="font-handwriting text-xl text-burgundy font-semibold">
                  {ourStory.placeholders.firstConversation.value}
                </div>
                <div className="text-[10px] text-mutedbrown/70 mt-1 italic">
                  {ourStory.placeholders.firstConversation.note}
                </div>
              </div>

              {/* Milestone 4: First Memorable Moment */}
              <div className="p-4 rounded-xl bg-ivory/60 border border-cream hover:border-dustyrose transition-colors relative group">
                <div className="flex items-center gap-2 text-xs font-serif text-mutedbrown uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-burgundy" />
                  <span>{ourStory.placeholders.firstMemorableMoment.label}</span>
                </div>
                <div className="font-handwriting text-xl text-burgundy font-semibold">
                  {ourStory.placeholders.firstMemorableMoment.value}
                </div>
                <div className="text-[10px] text-mutedbrown/70 mt-1 italic">
                  {ourStory.placeholders.firstMemorableMoment.note}
                </div>
              </div>
            </div>
          </div>

          {/* Journal Footer Signature */}
          <div className="mt-10 pt-6 border-t border-[#E8DFC8]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-mutedbrown gap-3">
            <span className="font-serif italic">
              {ourStory.bottomSignature}
            </span>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-burgundy" />
              <span className="font-handwriting text-base text-charcoal">
                Dedicated to Nannaaaaa ❤️
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
