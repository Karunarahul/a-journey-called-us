/**
 * Robust Romantic Audio Service with Browser Autoplay Detection and Fallbacks
 * Supports /music/our-song.mp3 with graceful fallback to synthesized music box chords.
 * Avoids multiple audio instances, maintains state across navigation, and handles autoplay blocks gracefully.
 */

import { assetUrl } from './assetPath';

export interface AudioState {
  isPlaying: boolean;
  autoplayBlocked: boolean;
  volume: number;
}

type AudioListener = (state: AudioState) => void;

class RomanticAudioService {
  private audio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isSynthesizing = false;
  private synthInterval: any = null;
  private isPlaying = false;
  private autoplayBlocked = false;
  private volume = 0.45; // Gentle background listening level
  private audioUrl: string = assetUrl('/music/our-song.mp3');
  private listeners: Set<AudioListener> = new Set();
  private initialized = false;

  constructor() {
    // Check if user explicitly muted during current session
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('journey_music_pref');
      if (saved === 'false') {
        this.isPlaying = false;
      }
    }
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((listener) => listener(state));
  }

  public getState(): AudioState {
    return {
      isPlaying: this.isPlaying,
      autoplayBlocked: this.autoplayBlocked,
      volume: this.volume,
    };
  }

  public init(customUrl: string = assetUrl('/music/our-song.mp3'), volume: number = 0.45) {
    if (this.initialized && this.audio) return;
    this.audioUrl = customUrl;
    this.volume = volume;

    if (typeof window !== 'undefined') {
      try {
        this.audio = new Audio(customUrl);
        this.audio.loop = true;
        this.audio.volume = volume;
        this.audio.preload = 'auto';

        // Error handler: gracefully disable or fallback to synth if file doesn't exist
        this.audio.addEventListener('error', () => {
          console.warn(`Local audio file at "${customUrl}" could not be loaded; enabling romantic ambient synthesizer fallback.`);
        });

        this.initialized = true;
      } catch (e) {
        console.warn("Could not instantiate audio element:", e);
      }
    }
  }

  /**
   * Attempt automatic playback when website loads.
   * If browser blocks unmuted autoplay, sets autoplayBlocked = true so an elegant prompt can be shown.
   */
  public async attemptAutoplay(): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    // Respect explicit session mute choice
    if (sessionStorage.getItem('journey_music_pref') === 'false') {
      this.isPlaying = false;
      this.autoplayBlocked = false;
      this.notify();
      return false;
    }

    try {
      if (!this.initialized) {
        this.init();
      }

      if (this.audio) {
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          this.isPlaying = true;
          this.autoplayBlocked = false;
          sessionStorage.setItem('journey_music_pref', 'true');
          this.notify();
          return true;
        }
      }
      return false;
    } catch {
      // Autoplay blocked by browser policy (NotAllowedError)
      this.isPlaying = false;
      this.autoplayBlocked = true;
      this.notify();
      return false;
    }
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      return await this.play();
    }
  }

  public async play(): Promise<boolean> {
    this.autoplayBlocked = false;

    // Try playing the MP3 file first
    try {
      if (!this.audio) {
        this.init(this.audioUrl, this.volume);
      }

      if (this.audio) {
        await this.audio.play();
        this.isPlaying = true;
        sessionStorage.setItem('journey_music_pref', 'true');
        this.notify();
        return true;
      }
    } catch (e) {
      console.warn("Audio element play error, trying Web Audio synth fallback:", e);
    }

    // Fallback: Web Audio Romantic Ambient Melody Box
    try {
      this.startSynthesizer();
      this.isPlaying = true;
      sessionStorage.setItem('journey_music_pref', 'true');
      this.notify();
      return true;
    } catch (e) {
      console.warn("Web Audio playback failed:", e);
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  public pause() {
    this.isPlaying = false;
    sessionStorage.setItem('journey_music_pref', 'false');

    if (this.audio) {
      this.audio.pause();
    }
    this.stopSynthesizer();
    this.notify();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public isBlocked(): boolean {
    return this.autoplayBlocked;
  }

  public setVolume(vol: number) {
    this.volume = vol;
    if (this.audio) {
      this.audio.volume = vol;
    }
    this.notify();
  }

  // Gentle, romantic ambient music box synthesizer
  private startSynthesizer() {
    if (this.isSynthesizing) return;
    const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.audioCtx) {
      this.audioCtx = new AudioContextClass();
    }

    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    this.isSynthesizing = true;

    // Romantic music box chord progression
    const notes: { [key: string]: number } = {
      'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
      'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00,
    };

    const melodyPatterns = [
      ['C4', 'E4', 'G4', 'C5'],
      ['A4', 'C5', 'E5', 'A5'],
      ['F4', 'A4', 'C5', 'E5'],
      ['G4', 'B4', 'D5', 'G5'],
      ['E4', 'G4', 'B4', 'E5'],
      ['F4', 'C5', 'E5', 'G5'],
    ];

    let patternIdx = 0;
    let noteIdx = 0;

    const playNextNote = () => {
      if (!this.isSynthesizing || !this.audioCtx) return;

      const pattern = melodyPatterns[patternIdx];
      const noteName = pattern[noteIdx];
      const freq = notes[noteName] || 440;

      this.playChime(freq, 2.0);

      noteIdx++;
      if (noteIdx >= pattern.length) {
        noteIdx = 0;
        patternIdx = (patternIdx + 1) % melodyPatterns.length;
      }
    };

    playNextNote();
    this.synthInterval = setInterval(playNextNote, 900);
  }

  private playChime(frequency: number, duration: number) {
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.08 * this.volume, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {
      // Audio context may be closed
    }
  }

  private stopSynthesizer() {
    this.isSynthesizing = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

export const romanticAudio = new RomanticAudioService();
