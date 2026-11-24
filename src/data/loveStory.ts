export interface ChapterConfig {
  number: string;
  title: string;
  subtitle: string;
  quote?: string;
  footerNote?: string;
  paragraphs: string[];
}

export interface PolaroidPhoto {
  id: string;
  url: string;
  caption: string;
  dateTag?: string;
  locationTag?: string;
  rotation: number;
  category: 'college' | 'adventures' | 'little-moments' | 'celebrations';
}

export interface LoveStoryConfig {
  meta: {
    title: string;
    description: string;
  };
  names: {
    primaryName: string; // Tejjaaaa ❤️
    nickname: string;    // Nannaaaaa ❤️
    senderTitle: string; // Forever your girl ❤️
    senderSign: string;  // Your favourite girl.
  };
  invitation: {
    heading: string;
    salutation: string;
    messageParagraphs: string[];
    callToAction: string;
    openButtonText: string;
    waxSealText: string;
  };
  hero: {
    mainTitle: string;
    subTitle: string;
    supportingQuote: string;
    secondaryQuote: string;
    scrollIndicatorText: string;
    stampText: string;
  };
  chapter1: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    paragraphs: string[];
    footerNote: string;
    placeholders: {
      firstMeetingDate: { label: string; value: string; note: string };
      collegeName: { label: string; value: string; note: string };
      firstConversation: { label: string; value: string; note: string };
      firstMemorableMoment: { label: string; value: string; note: string };
    };
  };
  chapter2: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    paragraphs: string[];
    footerNote: string;
    photos: PolaroidPhoto[];
  };
  chapter3: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    paragraphs: string[];
    footerNote: string;
    pillars: { title: string; description: string; icon: string }[];
  };
  chapter4: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    paragraphs: string[];
    favoriteNotes: { id: string; text: string; handwrittenNote: string; tag: string }[];
  };
  chapter5: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    paragraphs: string[];
    wishes: { title: string; desc: string; icon: string }[];
  };
  birthdayLetter: {
    badge: string;
    title: string;
    subtitle: string;
    salutation: string;
    paragraphs: string[];
    birthdayGreeting1: string;
    loveDeclaration: string;
    signature: string;
    waxSealStamp: string;
  };
  finalPage: {
    badge: string;
    title: string;
    subtitle: string;
    moreItems: string[];
    coreAffirmation: string;
    centralGreeting: string;
    partingThought: string;
    signOff: string;
    replayButtonText: string;
    celebrateButtonText: string;
  };
  audio: {
    bgMusicUrl: string;
    defaultVolume: number;
    title: string;
    artist: string;
  };
}

export const loveStory: LoveStoryConfig = {
  meta: {
    title: "SOMEWHERE, IT'S ALWAYS YOU. | A Birthday Story for Tejjaaaa ❤️",
    description: "A birthday story for Tejjaaaa ❤️ — Celebrating our college days, our little world, the unexpected turns, and endless love.",
  },
  names: {
    primaryName: "Tejjaaaa ❤️",
    nickname: "Nannaaaaa ❤️",
    senderTitle: "Forever your girl ❤️",
    senderSign: "Your favourite girl.",
  },
  invitation: {
    heading: "THE INVITATION",
    salutation: "To my favourite human,",
    messageParagraphs: [
      "I have a little something for you.",
      "It's not a big surprise wrapped in fancy paper, but it's filled with little pieces of us, a few memories, some feelings I don't always say out loud, and a whole lot of love.",
      "So, birthday boy, shall we?"
    ],
    callToAction: "Let's revisit our story ❤️",
    openButtonText: "Open your surprise ❤️",
    waxSealText: "FOR TEJJA",
  },
  hero: {
    mainTitle: "SOMEWHERE, IT'S ALWAYS YOU.",
    subTitle: "A birthday story for Tejjaaaa ❤️",
    supportingQuote: "To the boy who unknowingly became my favourite destination.",
    secondaryQuote: "Some journeys are planned. Ours just happened, and I'm so glad it did.",
    scrollIndicatorText: "Let's revisit our story",
    stampText: "COLLEGE DAYS ➔ FOREVER",
  },
  chapter1: {
    badge: "CHAPTER 01",
    title: "THE BEGINNING",
    subtitle: "And just like that, life had a plot twist.",
    quote: "Who knew that those ordinary college days would become the beginning of something so extraordinary?",
    paragraphs: [
      "Remember those initial college days?",
      "Back then, we had absolutely no idea how many memories, conversations, smiles and emotions were waiting ahead of us.",
      "Somewhere between those ordinary days, we started becoming something special.",
      "Who knew that a person who entered my life during college would become someone I'd want to celebrate, annoy, care for and love so much?",
      "Looking back, I'm just happy that our paths crossed.",
      "And honestly, I'm even happier that you're still here."
    ],
    footerNote: "Little did we know, this was just the first page.",
    placeholders: {
      firstMeetingDate: {
        label: "First Meeting Date",
        value: "[Editable: e.g. That unforgettable afternoon in college]",
        note: "Customize in src/data/loveStory.ts"
      },
      collegeName: {
        label: "Our College Days",
        value: "[Editable: College Campus & Corridors]",
        note: "Customize in src/data/loveStory.ts"
      },
      firstConversation: {
        label: "First Conversation",
        value: "[Editable: That first shy hello and nervous smile]",
        note: "Customize in src/data/loveStory.ts"
      },
      firstMemorableMoment: {
        label: "First Unforgettable Moment",
        value: "[Editable: That one glance where time slowed down]",
        note: "Customize in src/data/loveStory.ts"
      }
    }
  },
  chapter2: {
    badge: "CHAPTER 02",
    title: "OUR LITTLE WORLD",
    subtitle: "Some of my favourite memories have you in them.",
    quote: "If our memories were photographs, I'd probably never stop looking at them.",
    paragraphs: [
      "From the random conversations to the silly laughs, from the little moments to the memories that make us smile even today...",
      "We've created our own little world.",
      "A world with its own jokes, its own language, its own special moments and, of course, its own share of madness.",
      "I love how ordinary things can become special when they're shared with the right person.",
      "And you, Tejjaaaa, have somehow become part of so many of my favourite moments.",
      "If our memories were photographs, I'd probably never stop looking at them."
    ],
    footerNote: "Some moments deserve to be lived twice. Ours deserve a thousand replays.",
    photos: [
      {
        id: "photo-01",
        url: "/photos/couple-photo-01.webp",
        caption: "That smile that makes everything okay.",
        dateTag: "Always With You",
        locationTag: "Forever In My Heart",
        rotation: -2,
        category: "little-moments"
      },
      {
        id: "photo-02",
        url: "/photos/couple-photo-02.webp",
        caption: "Looking at life through our own little lens.",
        dateTag: "Beach Day Magic",
        locationTag: "Sunny Shoreline",
        rotation: 3,
        category: "little-moments"
      },
      {
        id: "photo-03",
        url: "/photos/couple-photo-03.webp",
        caption: "Midnight car-bonnet birthday surprise with our puppy.",
        dateTag: "Midnight Birthday",
        locationTag: "Car Bonnet Celebration",
        rotation: -2.5,
        category: "celebrations"
      },
      {
        id: "photo-04",
        url: "/photos/couple-photo-04.webp",
        caption: "Mud on the tires, wind in our hair, you by my side.",
        dateTag: "Bike Road Trip",
        locationTag: "Hill Country Trails",
        rotation: 2,
        category: "adventures"
      },
      {
        id: "photo-05",
        url: "/photos/couple-photo-05.webp",
        caption: "Sparklers, balloons, our little pup & my birthday boy.",
        dateTag: "Birthday Magic",
        locationTag: "Celebration Night",
        rotation: -3,
        category: "celebrations"
      },
      {
        id: "photo-06",
        url: "/photos/couple-photo-06.webp",
        caption: "Walking through life arm in arm, laughing under the trees.",
        dateTag: "Sunny Afternoon",
        locationTag: "Green Valley Walk",
        rotation: 2.5,
        category: "little-moments"
      },
      {
        id: "photo-07",
        url: "/photos/couple-photo-07.webp",
        caption: "Three different times, the exact same contagious laughter.",
        dateTag: "Endless Smiles",
        locationTag: "Our Shared Madness",
        rotation: -1.5,
        category: "little-moments"
      },
      {
        id: "photo-08",
        url: "/photos/couple-photo-08.webp",
        caption: "Our own share of madness—never a dull second with you.",
        dateTag: "Wonderla Vibes",
        locationTag: "Amusement Park Day",
        rotation: 3,
        category: "adventures"
      },
      {
        id: "photo-09",
        url: "/photos/couple-photo-09.webp",
        caption: "Traditional vibes and the sweetest smile.",
        dateTag: "Festive Vibes",
        locationTag: "College Celebrations",
        rotation: -2,
        category: "college"
      },
      {
        id: "photo-10",
        url: "/photos/couple-photo-10.webp",
        caption: "Where it all began. College grounds, yellow buses, and us.",
        dateTag: "College Days",
        locationTag: "The Beginning of Us",
        rotation: 1.5,
        category: "college"
      },
      {
        id: "photo-11",
        url: "/photos/couple-photo-11.webp",
        caption: "On top of the mountains, holding onto the boy I adore.",
        dateTag: "Summit Hug",
        locationTag: "High Altitude Peak",
        rotation: -2.5,
        category: "adventures"
      },
      {
        id: "photo-12",
        url: "/photos/couple-photo-12.webp",
        caption: "Giant blue teddy bear, fairy lights, and birthday magic.",
        dateTag: "Special Birthday",
        locationTag: "Party Room Surprise",
        rotation: 2,
        category: "celebrations"
      },
      {
        id: "photo-13",
        url: "/photos/couple-photo-13.webp",
        caption: "Seeking blessings for us and our journey ahead.",
        dateTag: "Sacred Temple",
        locationTag: "Temple Shrines",
        rotation: -3,
        category: "adventures"
      },
      {
        id: "photo-14",
        url: "/photos/couple-photo-14.webp",
        caption: "Quiet lake shores, cloudy skies, and peaceful cuddles.",
        dateTag: "Lakeside Breeze",
        locationTag: "Misty Lake Drive",
        rotation: 1.5,
        category: "adventures"
      },
      {
        id: "photo-15",
        url: "/photos/couple-photo-15.webp",
        caption: "Above the clouds, standing on the edge of the world with you.",
        dateTag: "Cloud Walk",
        locationTag: "Rocky Summit Vista",
        rotation: -2,
        category: "adventures"
      },
      {
        id: "photo-16",
        url: "/photos/couple-photo-16.webp",
        caption: "Forehead touches that quiet the entire noisy world.",
        dateTag: "Quiet Comfort",
        locationTag: "Just You and Me",
        rotation: 2.5,
        category: "little-moments"
      },
      {
        id: "photo-17",
        url: "/photos/couple-photo-17.webp",
        caption: "Hiking sticks, swirling mist, and conquering peaks together.",
        dateTag: "Misty Ridge",
        locationTag: "Mountain Top Clouds",
        rotation: -1.5,
        category: "adventures"
      },
      {
        id: "photo-18",
        url: "/photos/couple-photo-18.webp",
        caption: "Looking out into the horizon—no destination compares to you.",
        dateTag: "Endless Horizons",
        locationTag: "The Peak of Us",
        rotation: 2,
        category: "adventures"
      },
      {
        id: "photo-19",
        url: "/photos/couple-photo-19.webp",
        caption: "Raincoats and smiles. Choosing to dance even in the storms.",
        dateTag: "Monsoon Trek",
        locationTag: "Misty Valley Trails",
        rotation: -2.5,
        category: "adventures"
      },
      {
        id: "photo-20",
        url: "/photos/couple-photo-20.webp",
        caption: "Before the grand gopuram, smiling for everything we're blessed with.",
        dateTag: "Temple Gate",
        locationTag: "Sacred Sanctuary",
        rotation: 1.5,
        category: "adventures"
      }
    ]
  },
  chapter3: {
    badge: "CHAPTER 03",
    title: "THE UNEXPECTED ROUTES",
    subtitle: "Okay, let's be honest. We're not always cute.",
    quote: "Because even the most beautiful journeys have a few unexpected turns. And I'm glad we're still travelling together.",
    paragraphs: [
      "We've had our fights.",
      "Our misunderstandings, stubborn moments, little arguments and those times when neither of us wanted to agree.",
      "Sometimes we overthink. Sometimes we get annoyed. Sometimes we don't understand what the other person is trying to say.",
      "But here's the beautiful thing about us.",
      "We've also learned to talk things through, understand each other, forgive and find our way back to those smiles.",
      "We're not a perfect story, and I don't want us to pretend to be one.",
      "I just want us to keep learning, growing and choosing to make things better."
    ],
    footerNote: "P.S. You can still be annoying sometimes. But you're my favourite annoying person. ❤️",
    pillars: [
      {
        title: "Talking Things Through",
        description: "Breaking the silence and choosing honest conversations over bruised egos.",
        icon: "HeartHandshake"
      },
      {
        title: "Learning & Forgiving",
        description: "Understanding that love isn't never having problems; it's refusing to give up.",
        icon: "ShieldCheck"
      },
      {
        title: "Growing Together",
        description: "Maturing through every disagreement and building a deeper, stronger bond.",
        icon: "Compass"
      },
      {
        title: "Finding The Smiles",
        description: "Remembering that behind every stubborn moment is a heart that loves you deeply.",
        icon: "SunMedium"
      }
    ]
  },
  chapter4: {
    badge: "CHAPTER 04",
    title: "STILL MY FAVOURITE PERSON",
    subtitle: "After all the chapters, it's still you.",
    quote: "And if I had to choose a favourite part of this entire journey? It's getting to call you mine.",
    paragraphs: [
      "Through all the laughter, chaos, silly fights and beautiful memories, you've become such a special part of my life.",
      "I hope we never lose the little things.",
      "The random talks, the silly jokes, the unexpected smiles, the comfort of being ourselves and the happiness of sharing even the most ordinary days.",
      "I don't expect every day to be perfect.",
      "I just hope we keep finding reasons to laugh, opportunities to understand each other and new memories to add to our story.",
      "And if I had to choose a favourite part of this entire journey?",
      "It's getting to call you mine."
    ],
    favoriteNotes: [
      {
        id: "note-1",
        text: "You are still my favourite notification.",
        handwrittenNote: "Whenever your name lights up my screen, my whole day becomes better.",
        tag: "Whisper 01"
      },
      {
        id: "note-2",
        text: "Even an ordinary day feels special when you're part of it.",
        handwrittenNote: "A cup of tea, a quiet drive, or just sitting together—it's magic with you.",
        tag: "Postcard 02"
      },
      {
        id: "note-3",
        text: "I love the way we can laugh about the smallest things.",
        handwrittenNote: "Those silly inside jokes that make zero sense to anyone else in the world.",
        tag: "Note 03"
      },
      {
        id: "note-4",
        text: "Thank you for staying, understanding and trying.",
        handwrittenNote: "Even when things got hard, your effort to hold onto us never went unnoticed.",
        tag: "Postcard 04"
      },
      {
        id: "note-5",
        text: "You are my favourite kind of home.",
        handwrittenNote: "Not a place with four walls, but a feeling of safe peace in your arms.",
        tag: "Note 05"
      },
      {
        id: "note-6",
        text: "No matter how many places I travel to, my heart knows where it belongs.",
        handwrittenNote: "Beside you, today, tomorrow, and every single year to come.",
        tag: "Postcard 06"
      }
    ]
  },
  chapter5: {
    badge: "CHAPTER 05",
    title: "IT'S YOUR DAY!",
    subtitle: "Today, my favourite boy gets all the attention.",
    quote: "You have so many beautiful things waiting ahead of you. Go get them, birthday boy!",
    paragraphs: [
      "Happy Birthday, Tejjaaaa! ❤️",
      "Today is all about celebrating you.",
      "Your dreams, your ambitions, your smile, your little quirks and everything that makes you YOU.",
      "I hope this year brings you endless happiness, good health, exciting opportunities, success in everything you work towards and beautiful surprises you never saw coming.",
      "I hope you achieve every dream you've been quietly working for.",
      "I hope you laugh a little louder, smile a little more and never stop believing in yourself.",
      "And most importantly, I hope life treats you with all the kindness you deserve.",
      "You have so many beautiful things waiting ahead of you.",
      "Go get them, birthday boy!"
    ],
    wishes: [
      {
        title: "Your Dreams & Ambitions",
        desc: "May this year bring success to everything you've quietly worked so hard for.",
        icon: "Target"
      },
      {
        title: "Endless Health & Peace",
        desc: "A year full of vitality, sound sleep, gentle peace of mind, and good health.",
        icon: "Sparkles"
      },
      {
        title: "Louder Laughs & Smiles",
        desc: "May your days be filled with unstoppable laughter and reasons to grin.",
        icon: "Smile"
      },
      {
        title: "Kindness & Serendipity",
        desc: "May life surprise you with open doors, warmth, and all the kindness you deserve.",
        icon: "Gift"
      }
    ]
  },
  birthdayLetter: {
    badge: "THE LETTER",
    title: "FROM MY HEART TO YOURS",
    subtitle: "A little something I wanted to say.",
    salutation: "My dearest Tejjaaaa ❤️,",
    paragraphs: [
      "First of all, HAPPY BIRTHDAYYYYY!",
      "I wish I could put all my feelings into words, but you know how that goes. Sometimes I have a thousand things to say, and somehow the words just don't come out right.",
      "When I think about us, I think about those initial college days, all the memories we've made, the laughter, the random conversations, the silly fights and the countless little moments that have become a part of our story.",
      "We've had our ups and downs. We've annoyed each other, misunderstood each other and probably tested each other's patience more times than we can count.",
      "But we've also learned, forgiven, grown and made it through those moments together.",
      "And I wouldn't want our story to be anything other than real.",
      "I hope you know how special you are to me. I hope you never doubt how much I want to see you happy and how genuinely I wish the best for you.",
      "Keep chasing your dreams. Keep growing. Keep smiling that smile. Never settle for less than what you deserve.",
      "I want us to have more adventures, more photographs, more random plans, more laughter, more birthdays and more beautiful memories.",
      "There are so many places we haven't visited, so many sunsets we haven't watched and so many stories we haven't lived yet.",
      "And I hope we get to experience a whole lot of them together.",
      "Thank you for being you.",
      "Thank you for being part of my life.",
      "And thank you for being my Tejjaaaa."
    ],
    birthdayGreeting1: "Wishing you many more happy returns of the day, Nannaaaaa ❤️",
    loveDeclaration: "I LOVE YOUUUU!",
    signature: "Forever your girl ❤️",
    waxSealStamp: "SEALED WITH ENDLESS LOVE"
  },
  finalPage: {
    badge: "THE FINAL PAGE",
    title: "THE ENDLESS JOURNEY",
    subtitle: "The journey is nowhere near over.",
    moreItems: [
      "More birthdays.",
      "More adventures.",
      "More silly arguments.",
      "More making up.",
      "More photographs.",
      "More sunsets.",
      "More dreams.",
      "More memories."
    ],
    coreAffirmation: "If life is a journey, you're still my favourite destination.",
    centralGreeting: "Wishing you many more happy returns of the day, Tejjaaaa ❤️",
    partingThought: "Until our next adventure.",
    signOff: "With endless love,\nYour favourite girl.",
    replayButtonText: "Read our story again",
    celebrateButtonText: "Shower Birthday Wishes 🎉"
  },
  audio: {
    bgMusicUrl: "/audio/the-metro-proposal.mp3",
    defaultVolume: 0.65,
    title: "The Metro Proposal",
    artist: "Romantic Background Melody"
  }
};
