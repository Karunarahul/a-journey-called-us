export interface TimelineMilestone {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  dateOrEra?: string;
  location?: string;
  highlightQuote?: string;
  stampText?: string;
}

export interface LoveNote {
  id: string;
  text: string;
  handwrittenNote?: string;
  tag: string;
  rotation: number;
}

export interface ReasonItem {
  id: string;
  title: string;
  description: string;
  accent: string;
}

export interface PolaroidPhoto {
  id: string;
  url: string;
  caption: string;
  dateTag?: string;
  locationTag?: string;
  rotation: number;
  category: 'college' | 'adventures' | 'little-moments' | 'cozy';
}

export interface LoveStoryConfig {
  meta: {
    title: string;
    description: string;
  };
  recipient: {
    nickname: string;
    formalName?: string;
    relationshipTag: string;
    birthdayGreeting: string;
    subGreeting: string;
  };
  envelope: {
    recipientTag: string;
    subtitle: string;
    openButtonText: string;
    waxSealText: string;
    openingLetterSnippet: string;
  };
  hero: {
    mainHeadingPrefix: string;
    mainHeadingName: string;
    supportingText: string;
    secondaryText: string;
    scrollIndicatorText: string;
    stampText: string;
    destinationCity: string;
  };
  ourStory: {
    title: string;
    subtitle: string;
    journalDate: string;
    narrativeParagraphs: string[];
    placeholders: {
      firstMeetingDate: {
        label: string;
        value: string;
        note: string;
      };
      collegeName: {
        label: string;
        value: string;
        note: string;
      };
      firstConversation: {
        label: string;
        value: string;
        note: string;
      };
      firstMemorableMoment: {
        label: string;
        value: string;
        note: string;
      };
    };
    bottomSignature: string;
  };
  timeline: {
    title: string;
    subtitle: string;
    milestones: TimelineMilestone[];
  };
  loveNotes: {
    title: string;
    subtitle: string;
    notes: LoveNote[];
  };
  stormsWeCrossed: {
    title: string;
    subtitle: string;
    quote: string;
    paragraphs: string[];
    lessons: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  memoryAlbum: {
    title: string;
    subtitle: string;
    instructions: string;
    photos: PolaroidPhoto[];
  };
  reasons: {
    heading: string;
    subtitle: string;
    items: ReasonItem[];
    closingQuote: string;
  };
  birthdayLetter: {
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    waxSealStamp: string;
  };
  finalDestination: {
    heading: string;
    subheading: string;
    message: string;
    birthdayGreeting: string;
    replayButtonText: string;
    celebrateButtonText: string;
  };
  audio: {
    bgMusicUrl: string; // Replaceable URL or local file path
    defaultVolume: number;
    title: string;
    artist: string;
  };
}

export const loveStory: LoveStoryConfig = {
  meta: {
    title: "A Journey Called Us | Happy Birthday Nannaaaaa ❤️",
    description: "A romantic travel journal and digital celebration of our story, memories, and endless love.",
  },
  recipient: {
    nickname: "Nannaaaaa ❤️",
    relationshipTag: "The love of my life",
    birthdayGreeting: "Wishing you many more happy returns of the day, Nannaaaaa ❤️",
    subGreeting: "To the boy who unknowingly became my favourite destination.",
  },
  envelope: {
    recipientTag: "To my favourite person...",
    subtitle: "A little journey through us.",
    openButtonText: "Open your surprise ❤️",
    waxSealText: "US",
    openingLetterSnippet: "Before you scroll, I want you to know how grateful I am for every single step of this journey with you...",
  },
  hero: {
    mainHeadingPrefix: "Happy Birthday,",
    mainHeadingName: "Nannaaaaa ❤️",
    supportingText: "To the boy who unknowingly became my favourite destination.",
    secondaryText: "Some journeys are planned. Ours just happened, and I'm so glad it did.",
    scrollIndicatorText: "Let's revisit our journey",
    stampText: "COLLEGE DAYS ➔ FOREVER",
    destinationCity: "Wherever You Are",
  },
  ourStory: {
    title: "Every beautiful journey has a beginning...",
    subtitle: "Entry No. 01 — The Genesis of Us",
    journalDate: "Autumn of College Memories",
    narrativeParagraphs: [
      "Who knew that those ordinary college days would become the beginning of something so extraordinary?",
      "From those first conversations to the little moments we never thought we'd remember forever, somewhere between all the laughter, random talks and unexpected memories, you became someone incredibly special to me.",
      "And today, when I look back, I wouldn't change the beginning of our story for anything."
    ],
    placeholders: {
      firstMeetingDate: {
        label: "First Meeting Date",
        value: "[Editable: e.g. An unforgettable afternoon in college]",
        note: "Replace with your exact date in src/data/loveStory.ts"
      },
      collegeName: {
        label: "Our College Days",
        value: "[Editable: College Campus & Hallways]",
        note: "Replace with your campus/college name in src/data/loveStory.ts"
      },
      firstConversation: {
        label: "First Conversation",
        value: "[Editable: That first shy hello and nervous smile]",
        note: "Replace with your first chat or memory in src/data/loveStory.ts"
      },
      firstMemorableMoment: {
        label: "First Unforgettable Moment",
        value: "[Editable: That one glance where time slowed down]",
        note: "Replace with your personal memory in src/data/loveStory.ts"
      }
    },
    bottomSignature: "Written with all my heart • From the girl who loves you endlessly",
  },
  timeline: {
    title: "Places may change, but my favourite journey is us.",
    subtitle: "A vintage travel itinerary of the milestones that brought two souls together",
    milestones: [
      {
        id: "01",
        step: "01",
        title: "The First Hello",
        subtitle: "The spark in the ordinary",
        tag: "BOARDING PASS NO. 01",
        description: "The beginning of something neither of us knew would become so important. Just two strangers passing by in college corridors, until one quiet greeting changed everything.",
        dateOrEra: "College Beginning",
        location: "Campus Hallways",
        highlightQuote: "A single hello that rewrote our future.",
        stampText: "FIRST SIGHT",
      },
      {
        id: "02",
        step: "02",
        title: "College Days",
        subtitle: "Laughter, lectures & stolen glances",
        tag: "PASSPORT STAMP: CAMPUS",
        description: "The conversations, laughter, silly moments and memories that became ours. Sharing canteen snacks, walking between classes, and finding excuses just to see each other for five more minutes.",
        dateOrEra: "Golden College Era",
        location: "Canteen & Lecture Halls",
        highlightQuote: "Between lectures and exams, you were my favourite part of the day.",
        stampText: "CAMPUS ARCHIVE",
      },
      {
        id: "03",
        step: "03",
        title: "Getting Closer",
        subtitle: "You became my safe haven",
        tag: "WAYPOINT: COMFORT ZONE",
        description: "Little by little, you became my comfort person. Late night phone calls, talking about everything and nothing, sharing our fears, dreams, and realizing nobody understood me like you do.",
        dateOrEra: "The Turning Point",
        location: "Late Night Talks",
        highlightQuote: "You ceased being just someone I knew and became my safest shelter.",
        stampText: "HEART BOUND",
      },
      {
        id: "04",
        step: "04",
        title: "The Beautiful Chaos",
        subtitle: "When the skies turned grey",
        tag: "TRANSIT: TURBULENCE",
        description: "The disagreements, misunderstandings, emotional moments and everything that tested us. Days where feelings ran deep and words weren't easy, yet the thought of losing you was always unbearable.",
        dateOrEra: "The Testing Seasons",
        location: "The Silent Storms",
        highlightQuote: "Even through silence and tears, our hearts never let go.",
        stampText: "WEATHERED",
      },
      {
        id: "05",
        step: "05",
        title: "Choosing Each Other",
        subtitle: "Love in action, forgiveness & maturity",
        tag: "CROSSROADS: RESOLVE",
        description: "We talked, understood, forgave and worked things out. We learned that love isn't about never having problems; it's about not giving up on each other. We chose each other again and again.",
        dateOrEra: "Growth & Healing",
        location: "Heartfelt Conversations",
        highlightQuote: "True love isn't unbroken ease; it is two people refusing to give up.",
        stampText: "CHOSEN FOREVER",
      },
      {
        id: "06",
        step: "06",
        title: "Still Us",
        subtitle: "Stronger, gentler, deeply in love",
        tag: "WAYPOINT: HARMONY",
        description: "Through every season, we are still here, creating memories and loving each other. With every smile, shared inside joke, and quiet glance, I fall in love with you all over again.",
        dateOrEra: "Present Day",
        location: "Our Shared World",
        highlightQuote: "Through every turn and twist, my hand has always wanted yours.",
        stampText: "CONSTANT",
      },
      {
        id: "07",
        step: "07",
        title: "Forever Destination",
        subtitle: "The horizon is waiting for us",
        tag: "FINAL DESTINATION: ETERNITY",
        description: "The journey isn't complete. There are still countless places to visit, stories to create and birthdays to celebrate together. To all the tomorrows that belong to us.",
        dateOrEra: "Forever & Always",
        location: "Wherever Tomorrow Leads",
        highlightQuote: "As long as you are with me, anywhere is home.",
        stampText: "INFINITE LOVE",
      },
    ],
  },
  loveNotes: {
    title: "Little things I'll always carry with me.",
    subtitle: "Unfolded scraps, vintage postcards, and quiet whispers tucked inside my pocket",
    notes: [
      {
        id: "note-1",
        text: "You are still my favourite notification.",
        handwrittenNote: "Whenever your name lights up my screen, my whole day becomes better.",
        tag: "Postcard 01",
        rotation: -2,
      },
      {
        id: "note-2",
        text: "Even an ordinary day feels special when you're part of it.",
        handwrittenNote: "A cup of tea, a rainy drive, or sitting in silence—it's magic with you.",
        tag: "Note 02",
        rotation: 2.5,
      },
      {
        id: "note-3",
        text: "I love the way we can laugh about the smallest things.",
        handwrittenNote: "Those silly inside jokes that make zero sense to anyone else in the world.",
        tag: "Note 03",
        rotation: -1.5,
      },
      {
        id: "note-4",
        text: "Thank you for staying, understanding and trying.",
        handwrittenNote: "Even when things got hard, your effort to hold onto us never went unnoticed.",
        tag: "Postcard 04",
        rotation: 3,
      },
      {
        id: "note-5",
        text: "You are my favourite kind of home.",
        handwrittenNote: "Not a place with four walls, but a feeling of safe peace in your arms.",
        tag: "Note 05",
        rotation: -2.8,
      },
      {
        id: "note-6",
        text: "No matter how many places I travel to, my heart knows where it belongs.",
        handwrittenNote: "Beside you, today, tomorrow, and every single year to come.",
        tag: "Postcard 06",
        rotation: 1.8,
      },
    ],
  },
  stormsWeCrossed: {
    title: "Not every chapter was easy. But every chapter mattered.",
    subtitle: "A journey through the thunderclouds into the warm sunrise of understanding",
    quote: "Our bond isn't special because we never fought. It's special because we kept choosing each other through it all.",
    paragraphs: [
      "We've had our share of fights, misunderstandings, stubborn moments and days when things weren't easy.",
      "Sometimes we didn't understand each other. Sometimes emotions got the better of us. Sometimes a little thing became a big argument.",
      "But somewhere between the silence and the conversations, between the tears and the smiles, we found our way back to each other.",
      "We learned to listen, to understand, to forgive and to grow.",
      "And that's what makes our bond special. Not because we never fought, but because we kept choosing to understand each other.",
      "Thank you for growing with me, for sorting things out, and for being a part of this journey."
    ],
    lessons: [
      {
        icon: "HeartHandshake",
        title: "Learning to Listen",
        description: "Putting aside ego to truly hear what the other heart is whispering."
      },
      {
        icon: "ShieldAlert",
        title: "Weathering the Silence",
        description: "Knowing that distance and cold moments are only temporary seasons."
      },
      {
        icon: "SunMedium",
        title: "Choosing to Forgive",
        description: "Because what we have built is infinitely greater than any passing disagreement."
      },
      {
        icon: "Compass",
        title: "Growing Together",
        description: "Evolving into more patient, mature, and deeply understanding partners."
      }
    ]
  },
  memoryAlbum: {
    title: "Moments I'd relive a thousand times.",
    subtitle: "Photographs fade, but the way my heart beat in these moments never will.",
    instructions: "Tip: Click any polaroid to view it closely. You can easily replace these photos in src/data/loveStory.ts with your real snapshots!",
    photos: [
      {
        id: "photo-1",
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        caption: "Where our journey first took flight. That quiet afternoon.",
        dateTag: "College Memories",
        locationTag: "Old Campus Grounds",
        rotation: -3,
        category: "college"
      },
      {
        id: "photo-2",
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        caption: "Laughing until our stomachs hurt. Unfiltered joy with you.",
        dateTag: "Sunny Afternoon",
        locationTag: "Our Favourite Spot",
        rotation: 2,
        category: "little-moments"
      },
      {
        id: "photo-3",
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
        caption: "Holding hands and forgetting about the rest of the noisy world.",
        dateTag: "Golden Hour Walk",
        locationTag: "By the Lake",
        rotation: -2,
        category: "adventures"
      },
      {
        id: "photo-4",
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        caption: "Coffee dates, quiet glances, and conversations that lasted hours.",
        dateTag: "Rainy Evening",
        locationTag: "Corner Café",
        rotation: 3.5,
        category: "cozy"
      },
      {
        id: "photo-5",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        caption: "Every sunset with you feels like poetry written just for us.",
        dateTag: "Twilight Sky",
        locationTag: "Horizon Point",
        rotation: -1.5,
        category: "adventures"
      },
      {
        id: "photo-6",
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
        caption: "The boy who makes every place feel warm, safe and like home.",
        dateTag: "Forever In My Heart",
        locationTag: "With Nannaaaaa",
        rotation: 2.5,
        category: "little-moments"
      }
    ]
  },
  reasons: {
    heading: "If I had to choose again...",
    subtitle: "A collection of reasons why you are, and always will be, my only choice",
    items: [
      {
        id: "r1",
        title: "Ordinary to Extraordinary",
        description: "Because you make ordinary moments memorable with your laughter and kindness.",
        accent: "#722F3E"
      },
      {
        id: "r2",
        title: "Complete Freedom",
        description: "Because I can be myself around you—no filters, no pretending, just true peace.",
        accent: "#806B5A"
      },
      {
        id: "r3",
        title: "Your Smile",
        description: "Because even after the toughest and most exhausting days, your smile matters most.",
        accent: "#C8A97E"
      },
      {
        id: "r4",
        title: "Growing Together",
        description: "Because we keep learning, apologizing, forgiving, and growing together.",
        accent: "#D9A6A0"
      },
      {
        id: "r5",
        title: "My Favourite Tease",
        description: "Because you are my favourite person to annoy, and nobody reacts like you do.",
        accent: "#722F3E"
      },
      {
        id: "r6",
        title: "Our Unwritten Story",
        description: "Because out of every love story ever told, ours is still my absolute favourite.",
        accent: "#806B5A"
      },
      {
        id: "r7",
        title: "Simply You",
        description: "Because, simply, it's you. My heart never needed any other reason.",
        accent: "#722F3E"
      }
    ],
    closingQuote: "And if life gave me a thousand journeys, I'd still want to take every single one with you."
  },
  birthdayLetter: {
    salutation: "My dearest Nannaaaaa ❤️,",
    paragraphs: [
      "Happy Birthday to the person who has become such a beautiful part of my life.",
      "Sometimes I wonder how those initial college days turned into a journey filled with so many memories, emotions, laughter, silly fights and endless conversations.",
      "We have seen so many versions of each other. We've had our beautiful days and our difficult ones too. We've fought, misunderstood each other, made up, learned and grown.",
      "And through all of it, one thing remains special to me — us.",
      "I may not always express everything perfectly, but I hope you know how much you mean to me.",
      "I wish you endless happiness, success, good health, peace and everything your heart dreams of. I hope this new year of your life brings you closer to everything you've ever wished for.",
      "Keep smiling, keep dreaming and keep being the person I fell for.",
      "And here's to more adventures, more random photographs, more silly fights that end in laughter, more memories and countless birthdays together.",
      "If I could choose my favourite destination, it would always be wherever you are.",
      "Wishing you many more happy returns of the day, Nannaaaaa ❤️"
    ],
    closing: "With all my love,",
    signature: "Your favourite person ❤️",
    waxSealStamp: "SEALED WITH ENDLESS LOVE"
  },
  finalDestination: {
    heading: "The best part of our journey?",
    subheading: "We haven't reached the end yet.",
    message: "There are still so many places waiting for us, sunsets to watch, memories to make, dreams to chase and birthdays to celebrate.\n\nAnd I hope I get to be there for all of them.\n\nHere's to us. Always. ❤️",
    birthdayGreeting: "Wishing you many more happy returns of the day, Nannaaaaa ❤️",
    replayButtonText: "Read our story again",
    celebrateButtonText: "Shower Birthday Wishes 🎉"
  },
  audio: {
    bgMusicUrl: "", // Optional user custom MP3 path. If blank, our built-in romantic Web Audio piano/music box synthesizer plays!
    defaultVolume: 0.6,
    title: "A Journey Called Us (Romantic Melodies)",
    artist: "Acoustic Piano & Music Box"
  }
};
