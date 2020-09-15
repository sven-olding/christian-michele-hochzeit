export interface SongPart {
  startTime: number;
  endTime: number;
  text: string;
}

const songParts: SongPart[] = [
  { startTime: 0.0, endTime: 7.0, text: "" },
  {
    startTime: 7,
    endTime: 11,
    text: "Da wo Sie herkommen wohnen 30.000 Menschen",
  },
  {
    startTime: 11,
    endTime: 17,
    text: "Im Ort daneben vielleicht genauso viel",
  },
  {
    startTime: 17,
    endTime: 20,
    text: "100.000 in der nächsten Großstadt",
  },
  {
    startTime: 20,
    endTime: 24,
    text: "Doch das ist egal weil ihnen Neuenkirchen gefiel",
  },
  {
    startTime: 24,
    endTime: 28,
    text: "Sie sind seit 4 Jahren jetzt schon zusammen",
  },
  {
    startTime: 28,
    endTime: 32,
    text: "Haben sich dank Tinder kennengelernt",
  },
  {
    startTime: 32,
    endTime: 37,
    text: "Haben sich getroffen und Vieles beschlossen",
  },
  { startTime: 37, endTime: 41, text: "bis ihnen auffiel: sie sind ein Team" },
  { startTime: 41, endTime: 45, text: "Konzerte besucht und New York gesehen" },
  {
    startTime: 45,
    endTime: 50,
    text: "So viel passiert, dass ihr heut hier steht",
  },
  {
    startTime: 50,
    endTime: 53,
    text: "Egal was kommt, denn ihr meistert das schon",
  },
  {
    startTime: 53,
    endTime: 56,
    text: "Ja, ihr habt euch gefunden!",
  },
  {
    startTime: 56,
    endTime: 60,
    text: "Ein Pärchen von 80 Million",
  },
  {
    startTime: 67,
    endTime: 71,
    text: "Die Tiki-Bar, der Ort eurer Begegnung",
  },
  {
    startTime: 71,
    endTime: 75,
    text: "Ihr wart schon draußen und kamt nochmal zurück",
  },
  {
    startTime: 72,
    endTime: 80,
    text: "Christian sagt 'Hey!' und Mi fehlten die Worte",
  },
  {
    startTime: 81,
    endTime: 83,
    text: "War alles anders in einem Augenblick",
  },
  {
    startTime: 84,
    endTime: 88,
    text: "Ihr wart nie gut in Wahrscheinlichkeitsrechnung",
  },
  {
    startTime: 89,
    endTime: 92,
    text: "Aber auch das hier habt ihr kapiert:",
  },
  {
    startTime: 92,
    endTime: 97,
    text: "Die Chance, dass ihr euch beide hier trefft lag bei 0",
  },
  {
    startTime: 97,
    endTime: 101,
    text: "Doch Heute steht ihr hier",
  },
  {
    startTime: 101,
    endTime: 105,
    text: "Konzerte besucht und New York gesehen",
  },
  {
    startTime: 105,
    endTime: 109,
    text: "So viel passiert, dass ihr Heute hier steht",
  },
  {
    startTime: 109,
    endTime: 113,
    text: "Egal was kommt denn ihr meistert das schon",
  },
  {
    startTime: 113,
    endTime: 116,
    text: "Ja, ihr habt euch gefunden!",
  },
  {
    startTime: 116,
    endTime: 120,
    text: "Ein Pärchen von 80 Million",
  },
  {
    startTime: 136,
    endTime: 140,
    text: "Wenn ihr euch begegnet",
  },
  {
    startTime: 141,
    endTime: 144,
    text: "Dann leuchtet ihr auf wie Kometen",
  },
  {
    startTime: 145,
    endTime: 149,
    text: "Wenn ihr euch begegnet",
  },
  {
    startTime: 149,
    endTime: 153,
    text: "Dann leuchtet ihr auf wie Kometen",
  },
  {
    startTime: 153,
    endTime: 157,
    text: "Wenn ihr euch begegnet",
  },
  {
    startTime: 158,
    endTime: 162,
    text: "Dann leuchtet ihr, leuchtet ihr, leuchtet ihr",
  },
  {
    startTime: 163,
    endTime: 166,
    text: "Konzerte besucht und New York gesehen",
  },
  {
    startTime: 166,
    endTime: 171,
    text: "So viel passiert, dass ihr heut hier steht",
  },
  {
    startTime: 171,
    endTime: 175,
    text: "Egal was kommt denn ihr meistert das schon",
  },
  {
    startTime: 175,
    endTime: 178,
    text: "Ja, ihr habt euch gefunden!",
  },
  {
    startTime: 178,
    endTime: 181,
    text: "Ein Pärchen von 80 Million",
  },
  {
    startTime: 195,
    endTime: 198,
    text: "Ein Pärchen von 80 Million",
  },
  {
    startTime: 213,
    endTime: 217,
    text: "Heut steht ihr hier und sagt endlich JA!",
  },
  {
    startTime: 217,
    endTime: 221,
    text: "Denn ihr habt euch gefunden",
  },
  {
    startTime: 222,
    endTime: 230,
    text: "Als Ehepaar",
  },
];

export class Song {
  readonly parts: SongPart[];
  constructor() {
    this.parts = songParts;
  }

  getSongPart(currentTime: number): SongPart | null {
    for (var i = 0; i < this.parts.length; i++) {
      const part = this.parts[i];
      if (part.startTime <= currentTime && part.endTime > currentTime) {
        return part;
      }
    }
    return null;
  }
}

export const useSong = (): Song => {
  return new Song();
};
