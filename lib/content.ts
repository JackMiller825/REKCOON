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
    title: "I'm fine.",
    paragraphs: [
      "He bought the top.\nThen he bought the dip.\nThen the dip found another dip.",
      "He looked at his empty wallet, adjusted his cowboy hat, and whispered:\n\"I'm fine.\"",
    ],
  },
  {
    index: "02",
    title: "One more candle.",
    paragraphs: [
      "Rekt Raccoon promised himself he would go to bed after one more candle. That was eleven candles ago.",
      "The coffee is cold.\nThe market is red.\nTomorrow, he'll finally become a responsible adult.\nProbably.",
    ],
  },
  {
    index: "03",
    title: "Nobody needs to know.",
    paragraphs: [
      "His friends think he is making money. His family thinks he works in technology. His bank thinks something is terribly wrong.",
      "He watches the rain, checks the chart, and tells absolutely nobody.",
    ],
  },
  {
    index: "04",
    title: "Still standing.",
    paragraphs: [
      "The stop-loss never triggered.\nThe liquidation definitely did.",
      "His account balance disappeared faster than his last relationship.\n\nBut somehow, Rekt Raccoon is still here.\nStill checking. Still coping.\nStill wearing that hat.",
    ],
  },
  {
    index: "05",
    title: "We are all Rekt Raccoon.",
    paragraphs: [
      "Everyone has that trade. The one they never mention. The one that seemed like guaranteed generational wealth at 2:47 AM.",
      "Somewhere out there, another trader is staring at a red chart and saying:\n\"I'm fine.\"\n\nThat's how you know you've met another raccoon.",
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
  "YOU SAID THAT YESTERDAY.",
  "THE WALLET DISAGREES.",
  "DENIAL LEVEL: PROFESSIONAL.",
  "ANOTHER DAY. ANOTHER COPING SESSION.",
  "THE HAT IS STILL BULLISH.",
] as const;

export const tickerLine =
  "REKCOON IS FINE. ✳ THE CHART IS NOT. ✳ REKCOON IS FINE. ✳ TOMORROW WILL FIX IT. ✳ ";
