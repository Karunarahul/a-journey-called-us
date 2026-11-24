# A JOURNEY CALLED US — A Romantic Birthday Experience

> *"Places may change, but my favourite journey is us."*

A bespoke, handcrafted romantic digital gift created with genuine affection for **Nannaaaaa ❤️** on their birthday. 

Designed like an intimate vintage travel journal, scrapbook, and editorial love story, this website chronicles a relationship that began during college days, navigated misunderstandings and emotional storms with patience and forgiveness, and continues into an endless horizon of adventures together.

---

## ✨ Creative Direction & Aesthetic Philosophy

- **Concept**: A Journey Called Us — An editorial travel diary of love.
- **Color Palette**:
  - Warm Ivory (`#F7F0E6`)
  - Vintage Cream (`#EADCC8`)
  - Deep Burgundy (`#722F3E`)
  - Dusty Rose (`#D9A6A0`)
  - Muted Earth Brown (`#806B5A`)
  - Charcoal Typography (`#292522`)
  - Vintage Gold Accents (`#C8A97E`)
- **Typography**:
  - Emotional Headlines: *Playfair Display* & *Cormorant Garamond*
  - Handwritten Keepsake Notes & Signatures: *Caveat* & *Dancing Script*
  - Clean Editorial Body: *DM Sans*
- **Textures & Details**: Deckle paper grain, authentic wax seals with beating heart emblems, perforated boarding passes, washi tape strips, postal cancellations, and floating rose petals.

---

## 🌟 Interactive Features & Sections

1. **Opening Experience (The Love Letter & Wax Seal)**
   - Centered vintage envelope with textured cream paper, burgundy wax seal, and "To my favourite person...".
   - 3D opening animation: the wax seal yields, the triangular envelope flap folds open, and the handwritten letter emerges with floating rose petals.
   - Accessible "Skip to Website" option for immediate access.

2. **Hero Section (The Beginning of Everything)**
   - Full-screen cinematic greeting: *"Happy Birthday, Nannaaaaa ❤️"*.
   - Subtitle: *"To the boy who unknowingly became my favourite destination."*
   - Vintage travel stamps, compass marks, and animated paper textures.
   - Smooth scroll indicator guiding the user into the story.

3. **Our Story (Where It All Started — College Days)**
   - Editorial vintage journal entry recalling the initial college days.
   - Handwritten placeholders for **First Meeting Date**, **College Name**, **First Conversation**, and **First Memorable Moment**.

4. **Our Journey (Relationship Timeline)**
   - Interactive vintage travel itinerary connecting 7 key relationship milestones:
     - `01 — The First Hello`
     - `02 — College Days`
     - `03 — Getting Closer`
     - `04 — The Beautiful Chaos`
     - `05 — Choosing Each Other`
     - `06 — Still Us`
     - `07 — Forever Destination`
   - Styled as collectible boarding passes, perforated train tickets, and passport stamps.

5. **The Little Things (Love Notes)**
   - A scrapbook collection of miniature letters and postcards with washi tape and delicate tilt angles.
   - Interactive modal to read each handwritten whisper up close.

6. **The Storms We Crossed (Our Love Isn't Perfect, It's Real)**
   - Celebrates emotional maturity, forgiveness, and resilience.
   - Visual transition from stormy skies to a golden dawn sunrise.
   - Interactive perspectives exploring the disagreements we weathered and how love rose above them.

7. **Our Memory Album (Polaroid Scrapbook Gallery)**
   - Handcrafted Polaroid cards with authentic borders, film grain, washi tape, and handwritten captions.
   - Category filters (*All, College Days, Little Moments, Adventures, Cozy*).
   - High-resolution interactive lightbox with zoom, caption viewing, and next/prev photo controls.

8. **A Thousand Reasons (Why You?)**
   - An interactive card deck revealing why he is the one:
     - *"Because you make ordinary moments memorable."*
     - *"Because I can be myself around you."*
     - *"Because even after the toughest days, your smile matters."*
     - *"Because, simply, it's you."*
   - Concluding with: *"And if life gave me a thousand journeys, I'd still want to take every single one with you."*

9. **The Birthday Letter (The Heart of the Website)**
   - The full, long-form handwritten birthday epistle drafted on vintage stationery.
   - Interactive options: **Copy Letter Text** (with clipboard toast) and **Print Keepsake** (formatted for physical printing).

10. **Final Destination (The Endless Journey)**
    - Scenic sunset road to the horizon with glowing destination pin.
    - Central greeting: *"Wishing you many more happy returns of the day, Nannaaaaa ❤️"*.
    - **Shower Birthday Wishes 🎉** grand confetti celebration.
    - **Read our story again** replay button that resets smoothly to the opening envelope.

11. **Romantic Audio System**
    - Built-in Web Audio API romantic acoustic piano / music box synthesizer (zero external dependencies, never fails or breaks!).
    - Support for custom MP3 audio files.
    - Discrete floating music control with animated waveform and session persistence.

12. **Floating Rose Petals & Golden Sparkles**
    - High-performance canvas-based particles with an easy toggle button in the navbar.

---

## 🎨 How to Personalize (No Coding Needed!)

All memories, names, dates, photos, and music are stored in **ONE single configuration file**:

```
src/data/loveStory.ts
```

### 1. Update College Placeholders
Inside `ourStory.placeholders`:
```ts
placeholders: {
  firstMeetingDate: {
    label: "First Meeting Date",
    value: "14th September 2021", // Replace with your real date
    note: ""
  },
  collegeName: {
    label: "Our College Days",
    value: "St. Xavier's Campus", // Replace with your college name
    note: ""
  },
  firstConversation: {
    label: "First Conversation",
    value: "Borrowing notes after lecture", // Replace with your first chat
    note: ""
  },
  firstMemorableMoment: {
    label: "First Unforgettable Moment",
    value: "That rainy evening in the canteen", // Replace with your memory
    note: ""
  }
}
```

### 2. Replace Photographs
In `memoryAlbum.photos`:
1. Drop your images into the `public/photos/` folder.
2. Update the `url` and `caption`:
```ts
{
  id: "photo-1",
  url: "/photos/our-first-trip.jpg",
  caption: "The day we watched the sunset together.",
  dateTag: "Summer 2022",
  locationTag: "Lake View",
  rotation: -3,
  category: "adventures"
}
```

### 3. Add Your Favorite Song
1. Save your MP3 file as `public/music.mp3`.
2. In `src/data/loveStory.ts`, update:
```ts
audio: {
  bgMusicUrl: "/music.mp3",
  defaultVolume: 0.6,
  title: "Our Favorite Song",
  artist: "Artist Name"
}
```

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build
npm run preview
```

---

*Dedicated to **Nannaaaaa ❤️** with endless love.*
