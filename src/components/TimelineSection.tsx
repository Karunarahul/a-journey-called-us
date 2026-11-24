import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  MapPin,
  Ticket,
  Heart,
  Plane,
  Stamp
} from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const TimelineSection: React.FC = () => {
  const { timeline } = loveStory;
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cream/30">
      {/* Decorative route line background */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif uppercase tracking-widest text-burgundy bg-burgundy/10 border border-burgundy/20 mb-3"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Itinerary of Our Hearts</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant font-bold text-3xl sm:text-5xl text-charcoal tracking-tight leading-tight"
          >
            {timeline.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-mutedbrown mt-3"
          >
            {timeline.subtitle}
          </motion.p>
        </div>

        {/* Milestone Quick Navigation Tabs (Boarding Pass Selector) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {timeline.milestones.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveStep(m.id)}
              className={`px-4 py-2 rounded-full text-xs font-serif whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 border ${
                activeStep === m.id
                  ? 'bg-burgundy text-ivory border-burgundy shadow-sm font-semibold'
                  : 'bg-ivory text-mutedbrown border-cream hover:border-dustyrose hover:text-burgundy'
              }`}
            >
              <span>{m.step}.</span>
              <span>{m.title}</span>
            </button>
          ))}
        </div>

        {/* The Timeline Itinerary Line & Cards */}
        <div className="relative">
          {/* Vertical connecting route dashed line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 border-l-2 border-dashed border-dustyrose/60" />

          <div className="space-y-12 md:space-y-16">
            {timeline.milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isSelected = activeStep === milestone.id;

              return (
                <div
                  key={milestone.id}
                  id={`milestone-${milestone.id}`}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Pin */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ivory border-2 border-burgundy items-center justify-center text-burgundy shadow-sm z-20">
                    {milestone.id === '07' ? (
                      <Heart className="w-5 h-5 fill-burgundy text-burgundy" />
                    ) : (
                      <span className="font-cormorant font-bold text-sm">
                        {milestone.step}
                      </span>
                    )}
                  </div>

                  {/* Card Column (half-width) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:pl-4' : 'md:pr-4'
                    }`}
                  >
                    {/* Vintage Boarding Pass / Ticket Card */}
                    <div
                      onClick={() => setActiveStep(milestone.id)}
                      className={`relative bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border transition-all duration-300 shadow-journal cursor-pointer overflow-hidden ${
                        isSelected
                          ? 'border-burgundy ring-2 ring-burgundy/20 shadow-rose-glow'
                          : 'border-cream hover:border-dustyrose'
                      }`}
                    >
                      {/* Ticket Notch Cutouts */}
                      <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-ivory border-r border-cream -translate-y-1/2" />
                      <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-ivory border-l border-cream -translate-y-1/2" />

                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-cream/80 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-burgundy" />
                          <span className="text-[11px] font-mono tracking-widest text-dustyrose-dark font-semibold uppercase">
                            {milestone.tag}
                          </span>
                        </div>
                        <span className="text-xs px-2.5 py-0.5 rounded bg-cream/70 text-mutedbrown font-sans font-medium">
                          {milestone.dateOrEra}
                        </span>
                      </div>

                      {/* Step Number & Title */}
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-cormorant text-2xl sm:text-3xl font-bold text-burgundy">
                          {milestone.step}
                        </span>
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                            {milestone.title}
                          </h3>
                          <p className="font-handwriting text-base text-dustyrose-dark">
                            {milestone.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description Narrative */}
                      <p className="font-sans text-sm sm:text-base text-mutedbrown-dark leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Highlight Quote in Handwriting */}
                      {milestone.highlightQuote && (
                        <div className="p-3 bg-ivory rounded-lg border-l-2 border-burgundy mb-4">
                          <p className="font-handwriting text-lg text-charcoal leading-snug">
                            "{milestone.highlightQuote}"
                          </p>
                        </div>
                      )}

                      {/* Card Footer: Location & Vintage Stamp */}
                      <div className="pt-3 border-t border-cream/80 flex items-center justify-between text-xs text-mutedbrown">
                        <div className="flex items-center gap-1.5 font-sans">
                          <MapPin className="w-3.5 h-3.5 text-burgundy" />
                          <span>{milestone.location}</span>
                        </div>

                        {milestone.stampText && (
                          <div className="vintage-stamp text-[9px] uppercase tracking-wider text-burgundy font-serif font-bold rounded">
                            <Stamp className="w-3 h-3 mr-1" />
                            {milestone.stampText}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty side on desktop to balance the timeline */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom Marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ivory border border-dustyrose text-burgundy font-serif text-sm shadow-sm">
            <Plane className="w-4 h-4 transform -rotate-45" />
            <span>Next Destination: A Lifetime of Adventures with You</span>
            <Heart className="w-3.5 h-3.5 fill-burgundy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
