export interface PhotoItem {
  url: string;
  caption: string;
  annotation?: string;
  alt: string;
  category?: string;
}

export interface LoveStoryConfig {
  meta: {
    title: string;
    description: string;
  };
  names: {
    primaryName: string; // Kannayaaa ❤️
    nickname: string;    // Nannaaaaa ❤️
    senderTitle: string; // Forever your girl ❤️
  };
  opening: {
    mainText: string;
    supportingText: string;
    recipientText: string;
    ctaText: string;
    photo: PhotoItem;
  };
  chapter1: {
    badge: string;
    headline: string;
    narrative: string[];
    quote: string;
    photos: PhotoItem[];
  };
  chapter2: {
    badge: string;
    headline: string;
    narrative: string[];
    quote: string;
    photos: PhotoItem[];
  };
  chapter3: {
    badge: string;
    headline: string;
    narrative: string[];
    quote: string;
    postscript: string;
    photos: PhotoItem[];
  };
  chapter4: {
    badge: string;
    headline: string;
    narrative: string[];
    quote: string;
    photos: PhotoItem[];
  };
  chapter5: {
    badge: string;
    headline: string;
    narrative: string[];
    quote: string;
    photos: PhotoItem[];
  };
  birthdayLetter: {
    heading: string;
    salutation: string;
    paragraphs: string[];
    birthdayGreeting: string; // Wishing you many more happy returns of the day Nannaaaaa ❤️
    loveDeclaration: string;
    signature: string;
    waxSealStamp: string;
    photo: PhotoItem;
  };
  finalDestination: {
    headline: string;
    supportingText: string;
    finalGreeting: string; // Wishing you many more happy returns of the day, Nannaaaaa ❤️
    closingAnnotation: string;
    replayText: string;
    photo: PhotoItem;
  };
  audio: {
    url: string;
    title: string;
    artist: string;
  };
}

export const loveStory: LoveStoryConfig = {
  meta: {
    title: "SOMEWHERE, IT'S ALWAYS YOU. | A Birthday Story for Kannayaaa ❤️",
    description: "A birthday story for Kannayaaa ❤️ — A journey called us, from our college days to forever. Wishing you many more happy returns of the day, Nannaaaaa ❤️",
  },
  names: {
    primaryName: "Kannayaaa ❤️",
    nickname: "Nannaaaaa ❤️",
    senderTitle: "Forever your girl ❤️",
  },
  opening: {
    mainText: "To my favourite person.",
    supportingText: "There's a little story I want you to revisit today.",
    recipientText: "Kannayaaa ❤️",
    ctaText: "Begin our story",
    photo: {
      url: "/photos/couple-photo-14.webp",
      caption: "Our quiet place, together.",
      annotation: "Where time always slows down",
      alt: "Quiet lakeside embrace together",
    },
  },
  chapter1: {
    badge: "01 / THE BEGINNING",
    headline: "Somewhere between those college days, I found you.",
    narrative: [
      "Remember those initial college days?",
      "We had absolutely no idea how many memories, conversations, smiles and emotions were waiting ahead of us.",
      "Somewhere between those ordinary days, our paths crossed, and life quietly started writing a different kind of story.",
      "Who knew that you would become such a special part of my life?",
      "And honestly, I'm so glad our story began."
    ],
    quote: "Who knew that ordinary college days would become the beginning of everything?",
    photos: [
      {
        url: "/photos/couple-photo-10.webp",
        caption: "College grounds, yellow buses, and the start of us.",
        annotation: "Where our paths first crossed",
        alt: "College days together",
      },
      {
        url: "/photos/couple-photo-09.webp",
        caption: "Festive smiles and ordinary days turning special.",
        annotation: "Early memories we cherish",
        alt: "College celebrations together",
      }
    ],
  },
  chapter2: {
    badge: "02 / THE MEMORIES",
    headline: "Some of my favourite memories have you in them.",
    narrative: [
      "From the random conversations to the silly laughs, from unexpected moments to memories that still make us smile...",
      "We've created something that belongs only to us.",
      "The little jokes, the madness, the photographs, the conversations and all those ordinary days that somehow became extraordinary.",
      "If I could keep a few moments forever, I'd choose so many of them with you."
    ],
    quote: "Some moments deserve to be lived twice. Ours deserve a thousand replays.",
    photos: [
      {
        url: "/photos/couple-photo-02.webp",
        caption: "Looking at life through our own little lens.",
        annotation: "Beach sand tunnel magic",
        alt: "Beach sand perspective with you",
      },
      {
        url: "/photos/couple-photo-04.webp",
        caption: "Mud on the tires, wind in our hair, you by my side.",
        annotation: "Bike road trip into the hills",
        alt: "Motorcycle trek through the rain",
      },
      {
        url: "/photos/couple-photo-07.webp",
        caption: "Three different times, the exact same contagious laugh.",
        annotation: "Ours deserve a thousand replays",
        alt: "Laughter collage",
      },
      {
        url: "/photos/couple-photo-06.webp",
        caption: "Walking through life arm in arm, laughing under the trees.",
        annotation: "Quiet afternoon stroll",
        alt: "Walking together",
      },
      {
        url: "/photos/couple-photo-08.webp",
        caption: "Our own share of madness—never a dull second with you.",
        annotation: "Pure goofy joy",
        alt: "Theme park smiles",
      }
    ],
  },
  chapter3: {
    badge: "03 / THE JOURNEY",
    headline: "Not every road was easy. But we kept finding our way.",
    narrative: [
      "We've had our fights, misunderstandings, stubborn moments and days when neither of us knew exactly what to say.",
      "Sometimes things weren't easy.",
      "But we've also learned to talk, understand, forgive and find our way back to each other.",
      "We're not a perfect story, and that's okay.",
      "Every meaningful journey has unexpected turns.",
      "I'm just happy that we're still writing ours."
    ],
    quote: "Because even the most beautiful journeys have a few unexpected turns. And I'm glad we're still travelling together.",
    postscript: "P.S. You can still be annoying sometimes. But you're my favourite annoying person. ❤️",
    photos: [
      {
        url: "/photos/couple-photo-19.webp",
        caption: "Raincoats, swirling mist, and smiling through the storm.",
        annotation: "Even when things get messy, we smile",
        alt: "Raincoats in misty mountains",
      },
      {
        url: "/photos/couple-photo-11.webp",
        caption: "Finding our smiles again at the summit.",
        annotation: "Always finding our way back to each other",
        alt: "Summit embrace in the breeze",
      }
    ],
  },
  chapter4: {
    badge: "04 / TODAY",
    headline: "After all the chapters, it's still you.",
    narrative: [
      "Through all the laughter, chaos, little fights and beautiful memories, you've become such a special part of my life.",
      "I hope we never lose the random conversations, silly jokes, unexpected smiles and happiness of simply being together.",
      "I don't need every day to be perfect.",
      "I just hope we keep learning, laughing and creating beautiful memories.",
      "Because even after everything, you're still my favourite part of this journey."
    ],
    quote: "And if I had to choose a favourite part of this entire journey? It's getting to call you mine.",
    photos: [
      {
        url: "/photos/couple-photo-16.webp",
        caption: "Forehead touches that quiet the entire noisy world.",
        annotation: "My favourite kind of home",
        alt: "Intimate forehead to forehead cuddle",
      },
      {
        url: "/photos/couple-photo-14.webp",
        caption: "Quiet lake shores, cloudy skies, and peaceful cuddles.",
        annotation: "Comfort in the quiet moments",
        alt: "Lakeside embrace",
      }
    ],
  },
  chapter5: {
    badge: "05 / YOUR BIRTHDAY",
    headline: "Today, my favourite boy gets all the attention.",
    narrative: [
      "Happy Birthday, Kannayaaa!",
      "Today is all about you.",
      "Your dreams, your ambitions, your smile, your little quirks and everything that makes you YOU.",
      "I hope this year brings you endless happiness, good health, exciting opportunities, success in everything you work towards and beautiful surprises you never saw coming.",
      "Keep chasing your dreams.",
      "Keep growing.",
      "Keep smiling.",
      "You deserve so many beautiful things, birthday boy!"
    ],
    quote: "You have so many beautiful things waiting ahead of you. Go get them, birthday boy!",
    photos: [
      {
        url: "/photos/couple-photo-05.webp",
        caption: "Sparkler candles, balloons, our puppy & the sweetest smile.",
        annotation: "Today my favourite boy gets all the attention!",
        alt: "Birthday celebration with sparkler cake",
      },
      {
        url: "/photos/couple-photo-03.webp",
        caption: "Midnight celebration on the car bonnet.",
        annotation: "Surprises made just for you",
        alt: "Midnight birthday with puppy on car",
      },
      {
        url: "/photos/couple-photo-12.webp",
        caption: "Giant blue teddy bear and fairy lights.",
        annotation: "May every year bring you magic",
        alt: "Birthday room with teddy bear",
      }
    ],
  },
  birthdayLetter: {
    heading: "A little something from my heart.",
    salutation: "My dearest Kannayaaa ❤️,",
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
      "And thank you for being my Kannayaaa."
    ],
    birthdayGreeting: "Wishing you many more happy returns of the day Nannaaaaa ❤️",
    loveDeclaration: "I LOVE YOUUU!",
    signature: "Forever your girl ❤️",
    waxSealStamp: "SEALED WITH ENDLESS LOVE",
    photo: {
      url: "/photos/couple-photo-01.webp",
      caption: "Forever in my heart.",
      annotation: "Tucked inside this letter",
      alt: "Smiling selfie together",
    },
  },
  finalDestination: {
    headline: "Our story is still going places.",
    supportingText: "And if there's one journey I never want to end, it's ours.",
    finalGreeting: "Wishing you many more happy returns of the day, Nannaaaaa ❤️",
    closingAnnotation: "Until our next adventure.",
    replayText: "Read our story again",
    photo: {
      url: "/photos/couple-photo-18.webp",
      caption: "Looking out into the endless horizon—together.",
      annotation: "Our favourite destination is us",
      alt: "Standing together on mountain ridge looking out over clouds",
    },
  },
  audio: {
    url: "/audio/the-metro-proposal.mp3",
    title: "The Metro Proposal",
    artist: "Romantic Melody",
  },
};
