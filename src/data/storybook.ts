export interface StorybookPhoto {
  url: string;
  caption: string;
  annotation?: string;
  alt: string;
  rotation?: number;
}

export interface StorybookPage {
  id: string;
  pageNumber: number;
  chapterBadge: string;
  title: string;
  subtitle?: string;
  narrative: string[];
  photos: StorybookPhoto[];
  quote?: string;
  annotation?: string;
  illustrationTheme: 'college' | 'world' | 'unexpected' | 'favourite' | 'birthday' | 'letter' | 'destination';
}

export interface StorybookConfig {
  meta: {
    title: string;
    description: string;
  };
  recipient: {
    name: string;
    nickname: string;
    signOff: string;
  };
  cover: {
    title: string;
    subtitle: string;
    dedication: string;
    openButtonText: string;
    ornamentText: string;
  };
  pages: StorybookPage[];
  theLetter: {
    chapterBadge: string;
    title: string;
    salutation: string;
    paragraphs: string[];
    birthdayGreeting: string;
    loveDeclaration: string;
    signature: string;
    waxSealStamp: string;
    photo: StorybookPhoto;
  };
  theFinalPage: {
    chapterBadge: string;
    title: string;
    supportingText: string;
    birthdayGreeting: string;
    closing: string;
    replayButtonText: string;
    photo: StorybookPhoto;
  };
  audio: {
    url: string;
    title: string;
    artist: string;
  };
}

export const storybookData: StorybookConfig = {
  meta: {
    title: "SOMEWHERE, IT'S ALWAYS YOU. | A Storybook for Tejjaaaa ❤️",
    description: "An animated romantic storybook for Tejjaaaa ❤️ — A journey called us.",
  },
  recipient: {
    name: "Tejjaaaa ❤️",
    nickname: "Nannaaaaa ❤️",
    signOff: "Forever your girl ❤️",
  },
  cover: {
    title: "SOMEWHERE, IT'S ALWAYS YOU.",
    subtitle: "A little story about us.",
    dedication: "Made with love, for Tejjaaaa ❤️",
    openButtonText: "Open our story",
    ornamentText: "A JOURNEY CALLED US • VOLUME I",
  },
  pages: [
    // Page 01: The Beginning
    {
      id: "beginning",
      pageNumber: 1,
      chapterBadge: "PAGE 01",
      title: "Every beautiful story begins somewhere.",
      subtitle: "The Beginning",
      narrative: [
        "Remember those initial college days?",
        "We had absolutely no idea how many memories, conversations, smiles and emotions were waiting ahead of us.",
        "Somewhere between those ordinary days, our paths crossed, and life quietly started writing a different kind of story.",
        "Who knew that you would become such a special part of my life?",
        "And honestly, I'm so glad our story began."
      ],
      photos: [
        {
          url: "/photos/couple-photo-10.webp",
          caption: "College grounds, yellow buses, and the start of us.",
          annotation: "Where our paths first crossed",
          alt: "College days together",
          rotation: -1.5,
        },
        {
          url: "/photos/couple-photo-09.webp",
          caption: "Festive smiles and ordinary days turning special.",
          annotation: "Early memories we cherish",
          alt: "College celebrations",
          rotation: 2,
        }
      ],
      quote: "Who knew that ordinary college days would become the beginning of everything?",
      annotation: "Chapter I • The Beginning of Us",
      illustrationTheme: "college",
    },

    // Page 02: Our Little World
    {
      id: "world",
      pageNumber: 2,
      chapterBadge: "PAGE 02",
      title: "And then, we became our own little world.",
      subtitle: "Our Little World",
      narrative: [
        "From random conversations to silly laughs, from unexpected moments to memories that still make us smile...",
        "We've created something that belongs only to us.",
        "The little jokes, the madness, the photographs, the conversations and all those ordinary days that somehow became extraordinary.",
        "If I could keep a few moments forever, I'd choose so many of them with you."
      ],
      photos: [
        {
          url: "/photos/couple-photo-02.webp",
          caption: "Looking at life through our own little lens.",
          annotation: "Beach sand tunnel magic",
          alt: "Beach sand perspective",
          rotation: 2,
        },
        {
          url: "/photos/couple-photo-04.webp",
          caption: "Mud on the tires, wind in our hair, you by my side.",
          annotation: "Bike road trip into the hills",
          alt: "Motorcycle trek together",
          rotation: -2,
        },
        {
          url: "/photos/couple-photo-07.webp",
          caption: "Three different times, the exact same contagious laugh.",
          annotation: "Ours deserve a thousand replays",
          alt: "Laughter collage",
          rotation: 1,
        },
        {
          url: "/photos/couple-photo-06.webp",
          caption: "Walking through life arm in arm, laughing under the trees.",
          annotation: "Quiet afternoon stroll",
          alt: "Walking together",
          rotation: -1.5,
        },
        {
          url: "/photos/couple-photo-08.webp",
          caption: "Our own share of madness—never a dull second with you.",
          annotation: "Pure goofy joy",
          alt: "Wonderla theme park",
          rotation: 2.5,
        }
      ],
      quote: "Some moments deserve to be lived twice. Ours deserve a thousand replays.",
      annotation: "Chapter II • A World of Our Own",
      illustrationTheme: "world",
    },

    // Page 03: The Unexpected Routes
    {
      id: "routes",
      pageNumber: 3,
      chapterBadge: "PAGE 03",
      title: "Not every road was easy.",
      subtitle: "The Unexpected Routes",
      narrative: [
        "We've had our fights, misunderstandings, stubborn moments and days when neither of us knew exactly what to say.",
        "Sometimes things weren't easy.",
        "But we've also learned to talk, understand, forgive and find our way back to each other.",
        "We're not a perfect story, and that's okay.",
        "Every meaningful journey has unexpected turns.",
        "I'm just happy that we're still writing ours."
      ],
      photos: [
        {
          url: "/photos/couple-photo-19.webp",
          caption: "Raincoats, swirling mist, and smiling through the storm.",
          annotation: "Even when things get messy, we smile",
          alt: "Raincoats in misty mountains",
          rotation: -2,
        },
        {
          url: "/photos/couple-photo-11.webp",
          caption: "Finding our smiles again at the summit.",
          annotation: "Always finding our way back to each other",
          alt: "Summit embrace",
          rotation: 2,
        }
      ],
      quote: "Because even the most beautiful journeys have a few unexpected turns. And I'm glad we're still travelling together.",
      annotation: "Chapter III • Through Rain & Sunlight",
      illustrationTheme: "unexpected",
    },

    // Page 04: Still My Favourite Person
    {
      id: "favourite",
      pageNumber: 4,
      chapterBadge: "PAGE 04",
      title: "After all the chapters, it's still you.",
      subtitle: "Still My Favourite Person",
      narrative: [
        "Through all the laughter, chaos, little fights and beautiful memories, you've become such a special part of my life.",
        "I hope we never lose the random conversations, silly jokes, unexpected smiles and happiness of simply being together.",
        "I don't need every day to be perfect.",
        "I just hope we keep learning, laughing and creating beautiful memories.",
        "Because even after everything, you're still my favourite part of this journey."
      ],
      photos: [
        {
          url: "/photos/couple-photo-16.webp",
          caption: "Forehead touches that quiet the entire noisy world.",
          annotation: "My favourite kind of home",
          alt: "Intimate forehead to forehead cuddle",
          rotation: 1.5,
        },
        {
          url: "/photos/couple-photo-14.webp",
          caption: "Quiet lake shores, cloudy skies, and peaceful cuddles.",
          annotation: "Comfort in the quiet moments",
          alt: "Lakeside embrace",
          rotation: -1.5,
        }
      ],
      quote: "And if I had to choose a favourite part of this entire journey? It's getting to call you mine.",
      annotation: "Chapter IV • The Person I Choose",
      illustrationTheme: "favourite",
    },

    // Page 05: The Birthday Chapter
    {
      id: "birthday",
      pageNumber: 5,
      chapterBadge: "PAGE 05",
      title: "Today, the story celebrates YOU!",
      subtitle: "The Birthday Chapter",
      narrative: [
        "Happy Birthday, Tejjaaaa!",
        "Today is all about you.",
        "I hope this new year brings you happiness, good health, exciting adventures, success and everything your heart dreams about.",
        "Keep chasing your dreams. Keep smiling. Keep growing. And never stop being the wonderful person you are.",
        "You deserve so many beautiful things."
      ],
      photos: [
        {
          url: "/photos/couple-photo-05.webp",
          caption: "Sparkler candles, balloons, our puppy & the sweetest smile.",
          annotation: "Today my favourite boy gets all the attention!",
          alt: "Birthday celebration with sparkler cake",
          rotation: -2,
        },
        {
          url: "/photos/couple-photo-03.webp",
          caption: "Midnight celebration on the car bonnet.",
          annotation: "Surprises made just for you",
          alt: "Midnight birthday with puppy on car",
          rotation: 2,
        },
        {
          url: "/photos/couple-photo-12.webp",
          caption: "Giant blue teddy bear and fairy lights.",
          annotation: "May every year bring you magic",
          alt: "Birthday room with teddy bear",
          rotation: -1,
        }
      ],
      quote: "You have so many beautiful things waiting ahead of you. Go get them, birthday boy!",
      annotation: "Chapter V • Celebrating Tejjaaaa ❤️",
      illustrationTheme: "birthday",
    }
  ],

  // The Last Page: A Letter From My Heart
  theLetter: {
    chapterBadge: "THE LETTER",
    title: "A Letter From My Heart",
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
    birthdayGreeting: "Wishing you many more happy returns of the day, Nannaaaaa ❤️",
    loveDeclaration: "I LOVE YOUUU!",
    signature: "Forever your girl ❤️",
    waxSealStamp: "SEALED WITH ENDLESS LOVE",
    photo: {
      url: "/photos/couple-photo-01.webp",
      caption: "Forever in my heart.",
      annotation: "Tucked inside this letter",
      alt: "Smiling selfie together",
      rotation: -2,
    }
  },

  // The Final Page
  theFinalPage: {
    chapterBadge: "THE FINAL PAGE",
    title: "Our story is still going places.",
    supportingText: "And if there's one journey I never want to end, it's ours.",
    birthdayGreeting: "Wishing you many more happy returns of the day, Nannaaaaa ❤️",
    closing: "Until our next adventure.",
    replayButtonText: "Read our story again",
    photo: {
      url: "/photos/couple-photo-18.webp",
      caption: "Looking out into the endless horizon—together.",
      annotation: "Our favourite destination is us",
      alt: "Standing together on mountain ridge looking out over clouds",
      rotation: 0,
    }
  },

  audio: {
    url: "/audio/the-metro-proposal.mp3",
    title: "The Metro Proposal",
    artist: "Romantic Melody",
  }
};
