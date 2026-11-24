/**
 * Audio Player utility with graceful fallback to synthesized romantic music box/piano chords
 * Ensures music works out of the box even without external audio files, while supporting custom MP3s!
 */

class RomanticAudioService {
  private audio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isSynthesizing = false;
  private synthInterval: any = null;
  private isPlaying = false;
  private volume = 0.5;
  private customUrl: string = '';

  constructor() {
    // Check session storage for preference
    const saved = sessionStorage.getItem('journey_music_pref');
    if (saved === 'true') {
      // User previously allowed music
    }
  }

  public init(customUrl: string = '', volume: number = 0.5) {
    this.customUrl = customUrl;
    this.volume = volume;

    if (customUrl) {
      try {
        this.audio = new Audio(customUrl);
        this.audio.loop = true;
        this.audio.volume = volume;
      } catch (e) {
        console.warn("Could not load custom audio file, falling back to ambient melody synth", e);
      }
    }
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      const success = await this.play();
      return success;
    }
  }

  public async play(): Promise<boolean> {
    try {
      if (this.customUrl && this.audio) {
        await this.audio.play();
        this.isPlaying = true;
        sessionStorage.setItem('journey_music_pref', 'true');
        return true;
      }
    } catch {
      // Audio playback failed (e.g. 404 or unsupported), fallback to Web Audio
    }

    // Fallback: Web Audio Romantic Ambient Melody
    try {
      this.startSynthesizer();
      this.isPlaying = true;
      sessionStorage.setItem('journey_music_pref', 'true');
      return true;
    } catch (e) {
      console.warn("Web audio playback error:", e);
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
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(vol: number) {
    this.volume = vol;
    if (this.audio) {
      this.audio.volume = vol;
    }
  }

  // Romantic ambient music box synthesizer
  private startSynthesizer() {
    if (this.isSynthesizing) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.audioCtx) {
      this.audioCtx = new AudioContextClass();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    this.isSynthesizing = true;

    // Romantic chord progression: Fmaj7 - G - Em7 - Am7 - Dm7 - G - C
    // Note frequencies in Hz:
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

      this.playChime(freq, 1.8);

      noteIdx++;
      if (noteIdx >= pattern.length) {
        noteIdx = 0;
        patternIdx = (patternIdx + 1) % melodyPatterns.length;
      }
    };

    // Play every 750ms for a gentle, slow romantic music box tempo
    playNextNote();
    this.synthInterval = setInterval(playNextNote, 850);
  }

  private playChime(frequency: number, duration: number) {
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;

      // Gentle sine oscillator
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      // Soft music-box warmth: mix a fundamental sine and very soft warm harmonic
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, now);

      gain.gain.setValueAtTime(0.001, now);
      // Gentle attack
      gain.gain.exponentialRampToValueAtTime(0.12 * this.volume, now + 0.08);
      // Gentle decay like a music box bell
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {
      // ignore
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
