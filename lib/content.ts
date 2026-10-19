export type LoreChapter = {
  index: string;
  title: string;
  paragraphs: string[];
};

export type Meme = {
  file: string;
  width: number;
  height: number;
  caption: string;
  label: string;
};

export const lore: LoreChapter[] = [
  {
    index: "01",
    title: "A Raccoon With a Dream",
    paragraphs: [
      "Jimothy was an ordinary raccoon.\nHe had a trash can, a cowboy hat, and a perfectly acceptable life.\nThen he discovered cryptocurrency.",
      "One stranger on the internet promised him generational wealth.\nJimothy believed every word.\n\nHe bought the top.\nThen he bought the dip.\nThen he discovered the dip had another dip.\n\nAnd so began his financial education.",
    ],
  },
  {
    index: "02",
    title: "One More Candle",
    paragraphs: [
      "Jimothy promised himself he'd go to bed after one more candle.\nThat was eleven candles ago.",
      "The coffee went cold.\nHis wallet went colder.\nThe chart was red.\nHis eyes were red.\n\nBut Jimothy remained absolutely certain that the next candle would change everything.",
    ],
  },
  {
    index: "03",
    title: "The Professional Bagholder",
    paragraphs: [
      "His friends thought he was making money.\nHis family thought he worked in technology.\nHis bank thought something was terribly wrong.",
      "Jimothy had an explanation for everything.\n\n\"It's a long-term investment.\"\n\"This is healthy consolidation.\"\n\"The whales are accumulating.\"\n\nNobody asked for these explanations.\nHe gave them anyway.",
    ],
  },
  {
    index: "04",
    title: "The Market Called Him REKT",
    paragraphs: [
      "His portfolio fell.\nHis confidence followed.\n\nThe stop-loss never triggered.\nThe liquidation definitely did.",
      "The market gave him a new name:\nREKT.\n\nJimothy adjusted his cowboy hat.\nLit another cigarette.\nAnd checked the chart again.",
    ],
  },
  {
    index: "05",
    title: "Still Jimothy",
    paragraphs: [
      "The market took his portfolio.\nIt took his sleep.\nIt took the last remaining balance in his exchange account.\n\nBut it couldn't take his personality.",
      "Every night, somewhere in the city, another trader stares at a red candle.\nAnd whispers the same words:\n\n\"I'm fine.\"\n\nThat's how Jimothy knows he's not alone.",
    ],
  },
];

/** Natural pixel sizes from the asset pack, used to reserve layout space. */
export const memes: Meme[] = [
  { file: "meme-party.jpg", width: 1000, height: 978, caption: "Everyone is having the time of their life.", label: "01 / THE PARTY" },
  { file: "meme-roses.jpg", width: 800, height: 1000, caption: "Brought flowers. Got character development.", label: "02 / THE DATE" },
  { file: "meme-crying.jpg", width: 1000, height: 977, caption: "“Yeah, I’m good.”", label: "03 / THE ANSWER" },
  { file: "meme-doorway.jpg", width: 632, height: 1000, caption: "Just getting some air. For three hours.", label: "04 / THE BREAK" },
  { file: "meme-beach.jpg", width: 1000, height: 629, caption: "The group chat after one red candle.", label: "05 / THE GROUP CHAT" },
  { file: "meme-bar.jpg", width: 1000, height: 748, caption: "One drink. Then I’ll figure it out.", label: "06 / THE PLAN" },
  { file: "meme-driver.jpg", width: 1000, height: 666, caption: "Carrying the entire group project.", label: "07 / THE RESPONSIBLE ONE" },
  { file: "meme-waiting.jpg", width: 1000, height: 977, caption: "Waiting for life to make sense.", label: "08 / THE WAIT" },
  { file: "meme-photo.jpg", width: 684, height: 1000, caption: "Me looking at the old portfolio screenshot.", label: "09 / THE MEMORIES" },
  { file: "meme-sky.jpg", width: 1000, height: 523, caption: "The voice in my head at 3 AM.", label: "10 / THE SOUNDTRACK" },
  { file: "portfolio-v2.jpg", width: 1000, height: 1000, caption: "Portfolio down 80%.", label: "11 / FINANCIAL WELLNESS" },
  { file: "office-fine.jpg", width: 1000, height: 1000, caption: "Everything is under control.", label: "12 / THE OFFICE" },
  { file: "bus-stop.jpg", width: 1000, height: 1000, caption: "3 AM. Work at 7.", label: "13 / SLEEP SCHEDULE" },
  { file: "diner.jpg", width: 1000, height: 1000, caption: "Table for one. Again.", label: "14 / ONE MORE NIGHT" },
];

export const checkInReplies = [
  "JIMOTHY SAID THAT YESTERDAY.",
  "THE WALLET DISAGREES.",
  "THE HAT IS STILL BULLISH.",
  "ANOTHER DAY. ANOTHER COPING SESSION.",
  "FINANCIALLY REKT. EMOTIONALLY JIMOTHY.",
  "HE HAS SEEN WORSE. PROBABLY.",
] as const;

export const tickerLine =
  "BORN JIMOTHY. ✳ REKT BY CHOICE. ✳ JIMOTHY IS FINE. ✳ THE CHART IS NOT. ✳ ";
