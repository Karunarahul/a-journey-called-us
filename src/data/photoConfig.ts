import { assetUrl } from '../utils/assetPath';

export interface PhotoConfig {
  id: string;
  url: string;
  caption: string;
  annotation?: string;
  cuteNote?: string;          // e.g. "One of my favourite moments ❤️", "This one's special.", etc.
  alt: string;
  aspectRatio: string;        // e.g. 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[16/10]', etc.
  objectPosition: string;     // e.g. 'center 18%', 'center 22%', 'center 45%', etc.
  orientation: 'portrait' | 'landscape' | 'square';
  chapter: string;
}

export const photoRegistry: Record<string, PhotoConfig> = {
  // Opening / Hero Feature Photograph
  opening: {
    id: "photo-opening",
    url: assetUrl("/photos/couple-photo-14.webp"),
    caption: "Our quiet place, together.",
    annotation: "Where time always slows down",
    cuteNote: "My favourite human.",
    alt: "Quiet lakeside embrace together",
    aspectRatio: "aspect-[16/10]",
    objectPosition: "center 24%",
    orientation: "landscape",
    chapter: "opening",
  },

  // Chapter 01: College Grounds with Yellow Buses
  collegeGrounds: {
    id: "photo-01-college",
    url: assetUrl("/photos/couple-photo-10.webp"),
    caption: "College grounds, yellow buses, and the start of us.",
    annotation: "Where our paths first crossed",
    cuteNote: "This one's special.",
    alt: "College days together",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 18%", // Preserves heads and yellow bus in background
    orientation: "portrait",
    chapter: "chapter-1",
  },

  // Chapter 01: Festive Smiles
  collegeFestive: {
    id: "photo-01-festive",
    url: assetUrl("/photos/couple-photo-09.webp"),
    caption: "Festive smiles and ordinary days turning special.",
    annotation: "Early memories we cherish",
    cuteNote: "A little piece of us.",
    alt: "College celebrations together",
    aspectRatio: "aspect-[1/1]",
    objectPosition: "center 22%", // Keeps festive smiles and garland details
    orientation: "square",
    chapter: "chapter-1",
  },

  // Chapter 02: Beach Sand Tunnel
  beachSandTunnel: {
    id: "photo-02-beach",
    url: assetUrl("/photos/couple-photo-02.webp"),
    caption: "Looking at life through our own little lens.",
    annotation: "Beach sand tunnel magic",
    cuteNote: "One of my favourite moments ❤️",
    alt: "Beach sand perspective with you",
    aspectRatio: "aspect-[1/1]",
    objectPosition: "center 45%", // Perfect center alignment through the sand tunnel
    orientation: "square",
    chapter: "chapter-2",
  },

  // Chapter 02: Motorcycle Road Trip
  bikeRoadTrip: {
    id: "photo-02-bike",
    url: assetUrl("/photos/couple-photo-04.webp"),
    caption: "Mud on the tires, wind in our hair, you by my side.",
    annotation: "Bike road trip into the hills",
    cuteNote: "Would relive this one again.",
    alt: "Motorcycle trek through the rain",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 22%", // Preserves riders and bike context
    orientation: "portrait",
    chapter: "chapter-2",
  },

  // Chapter 02: Laughter Collage
  laughterCollage: {
    id: "photo-02-laughter",
    url: assetUrl("/photos/couple-photo-07.webp"),
    caption: "Three different times, the exact same contagious laugh.",
    annotation: "Ours deserve a thousand replays",
    cuteNote: "One of my favourite moments ❤️",
    alt: "Laughter collage",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center center",
    orientation: "portrait",
    chapter: "chapter-2",
  },

  // Chapter 02: Walking Arm in Arm
  walkingTrees: {
    id: "photo-02-walking",
    url: assetUrl("/photos/couple-photo-06.webp"),
    caption: "Walking through life arm in arm, laughing under the trees.",
    annotation: "Quiet afternoon stroll",
    cuteNote: "My favourite human.",
    alt: "Walking together",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 22%", // Keeps both figures centered and tree canopy
    orientation: "portrait",
    chapter: "chapter-2",
  },

  // Chapter 02: Theme Park Goofy Smiles
  themeParkJoy: {
    id: "photo-02-themepark",
    url: assetUrl("/photos/couple-photo-08.webp"),
    caption: "Our own share of madness—never a dull second with you.",
    annotation: "Pure goofy joy",
    cuteNote: "A little piece of us.",
    alt: "Theme park smiles",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 18%",
    orientation: "portrait",
    chapter: "chapter-2",
  },

  // Chapter 03: Raincoats in Mist
  raincoatsMist: {
    id: "photo-03-raincoats",
    url: assetUrl("/photos/couple-photo-19.webp"),
    caption: "Raincoats, swirling mist, and smiling through the storm.",
    annotation: "Even when things get messy, we smile",
    cuteNote: "Would relive this one again.",
    alt: "Raincoats in misty mountains",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 18%", // Preserves faces in raincoats
    orientation: "portrait",
    chapter: "chapter-3",
  },

  // Chapter 03: Summit Embrace
  summitEmbrace: {
    id: "photo-03-summit",
    url: assetUrl("/photos/couple-photo-11.webp"),
    caption: "Finding our smiles again at the summit.",
    annotation: "Always finding our way back to each other",
    cuteNote: "One of my favourite moments ❤️",
    alt: "Summit embrace in the breeze",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 22%",
    orientation: "portrait",
    chapter: "chapter-3",
  },

  // Chapter 03: Sacred Temple Blessings
  sacredBlessings: {
    id: "photo-03-temple",
    url: assetUrl("/photos/couple-photo-13.webp"),
    caption: "Seeking blessings for us and our journey ahead.",
    annotation: "Peace, prayers and promises",
    cuteNote: "This one's special.",
    alt: "Traditional temple visit together",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 20%",
    orientation: "portrait",
    chapter: "chapter-3",
  },

  // Chapter 03: Cloud Walk
  cloudWalk: {
    id: "photo-03-clouds",
    url: assetUrl("/photos/couple-photo-15.webp"),
    caption: "Above the clouds, standing on the edge of the world with you.",
    annotation: "Endless horizons",
    cuteNote: "Would relive this one again.",
    alt: "Standing above cloud line on mountain",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 20%",
    orientation: "portrait",
    chapter: "chapter-3",
  },

  // Chapter 04: Forehead Touch
  foreheadTouch: {
    id: "photo-04-forehead",
    url: assetUrl("/photos/couple-photo-16.webp"),
    caption: "Forehead touches that quiet the entire noisy world.",
    annotation: "My favourite kind of home",
    cuteNote: "This one's special.",
    alt: "Intimate forehead to forehead cuddle",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 22%", // Intimate focus on touching foreheads
    orientation: "portrait",
    chapter: "chapter-4",
  },

  // Chapter 04: Quiet Lakeside
  quietLakeside: {
    id: "photo-04-lakeside",
    url: assetUrl("/photos/couple-photo-14.webp"),
    caption: "Quiet lake shores, cloudy skies, and peaceful cuddles.",
    annotation: "Comfort in the quiet moments",
    cuteNote: "My favourite human.",
    alt: "Lakeside embrace",
    aspectRatio: "aspect-[16/10]",
    objectPosition: "center 26%",
    orientation: "portrait",
    chapter: "chapter-4",
  },

  // Chapter 04: Misty Ridge Trek
  mistyRidgeTrek: {
    id: "photo-04-ridge",
    url: assetUrl("/photos/couple-photo-17.webp"),
    caption: "Hiking sticks, swirling mist, and conquering peaks together.",
    annotation: "Through every terrain with you",
    cuteNote: "One of my favourite moments ❤️",
    alt: "Mountain hiking trek in mist",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 20%",
    orientation: "portrait",
    chapter: "chapter-4",
  },

  // Chapter 05: Sparkler Cake & Puppy
  sparklerCake: {
    id: "photo-05-sparkler",
    url: assetUrl("/photos/couple-photo-05.webp"),
    caption: "Sparkler candles, balloons, our puppy & the sweetest smile.",
    annotation: "Today my favourite boy gets all the attention!",
    cuteNote: "One of my favourite moments ❤️",
    alt: "Birthday celebration with sparkler cake",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 16%", // Captures birthday boy's smile, sparkler, and puppy
    orientation: "portrait",
    chapter: "chapter-5",
  },

  // Chapter 05: Car Bonnet Midnight Surprise
  carBonnetSurprise: {
    id: "photo-05-carbonnet",
    url: assetUrl("/photos/couple-photo-03.webp"),
    caption: "Midnight celebration on the car bonnet.",
    annotation: "Surprises made just for you",
    cuteNote: "This one's special.",
    alt: "Midnight birthday with puppy on car",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 20%",
    orientation: "portrait",
    chapter: "chapter-5",
  },

  // Chapter 05: Giant Blue Teddy Bear
  teddyBearRoom: {
    id: "photo-05-teddy",
    url: assetUrl("/photos/couple-photo-12.webp"),
    caption: "Giant blue teddy bear and fairy lights.",
    annotation: "May every year bring you magic",
    cuteNote: "A little piece of us.",
    alt: "Birthday room with teddy bear",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 22%",
    orientation: "portrait",
    chapter: "chapter-5",
  },

  // Chapter 05: Grand Temple Gopuram
  templeGopuram: {
    id: "photo-05-gopuram",
    url: assetUrl("/photos/couple-photo-20.webp"),
    caption: "Before the grand gopuram, smiling for everything we're blessed with.",
    annotation: "Grateful for our journey",
    cuteNote: "This one's special.",
    alt: "Standing before temple gopuram",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 22%",
    orientation: "portrait",
    chapter: "chapter-5",
  },

  // The Birthday Letter Keepsake Polaroid
  letterPolaroid: {
    id: "photo-letter-polaroid",
    url: assetUrl("/photos/couple-photo-01.webp"),
    caption: "Forever in my heart.",
    annotation: "Tucked inside this letter",
    cuteNote: "My favourite human.",
    alt: "Smiling selfie together",
    aspectRatio: "aspect-[3/4]",
    objectPosition: "center 20%", // Keeps both smiles clearly framed
    orientation: "portrait",
    chapter: "letter",
  },

  // Final Destination Mountain Ridge Panorama
  finalMountainRidge: {
    id: "photo-final-destination",
    url: assetUrl("/photos/couple-photo-18.webp"),
    caption: "Looking out into the endless horizon—together.",
    annotation: "Our favourite destination is us",
    cuteNote: "Would relive this one again.",
    alt: "Standing together on mountain ridge looking out over clouds",
    aspectRatio: "aspect-[16/10]",
    objectPosition: "center 24%", // Captures figures and wide mountain ridge
    orientation: "portrait",
    chapter: "destination",
  },
};

// Complete ordered collection of all 20 couple photos for the full-screen Lightbox
export const allStoryPhotos: PhotoConfig[] = [
  photoRegistry.opening,
  photoRegistry.collegeGrounds,
  photoRegistry.collegeFestive,
  photoRegistry.beachSandTunnel,
  photoRegistry.bikeRoadTrip,
  photoRegistry.laughterCollage,
  photoRegistry.walkingTrees,
  photoRegistry.themeParkJoy,
  photoRegistry.raincoatsMist,
  photoRegistry.summitEmbrace,
  photoRegistry.sacredBlessings,
  photoRegistry.cloudWalk,
  photoRegistry.foreheadTouch,
  photoRegistry.quietLakeside,
  photoRegistry.mistyRidgeTrek,
  photoRegistry.sparklerCake,
  photoRegistry.carBonnetSurprise,
  photoRegistry.teddyBearRoom,
  photoRegistry.templeGopuram,
  photoRegistry.letterPolaroid,
  photoRegistry.finalMountainRidge,
];
