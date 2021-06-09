import type { PageData } from "./dataTypes";

export const data: PageData[] = [
  {
    type: "info",
    text: "Willkommen",
    // a wild bee and a honey bee
    githubLinkText: "Open Source - QuellCode auf GitHub",
  },

  // wild bee text here
  {
    type: "info",
    text: "*Honigbienen* werden seit mehreren Tausend Jahren vom Menschen gezüchtet",
    backgroundImage: "beekeeping.jpg",
  },
  {
    type: "info",
    text: "*Wildbienen* hingegen leben meistens als Einzelgänger",
    backgroundImage: "purpleflower.jpg",
  },

  // Why bees are important
  {
    type: "info",
    text: "Fast *80%* aller Nutz- und Wildpflanzen, darunter auch *Obst* und *Gemüse* wie Birnen, Äpfel, Kirschen, Erdbeeren, Pflaumen, Beeren, Pfirsiche, Nektarinen oder Trauben werden von Bienen bestäubt",
    backgroundImage: "ricefruits.jpg",
  },
  {
    type: "info",
    text: "Aber auch die Verfügbarkeit von z.B. Nüssen oder Raps, haben wir der Bestäubung durch die Biene zu verdanken",
    backgroundImage: "golden-rod.jpg",
  },
  {
    type: "info",
    text: "Sie ist deswegen das drittwichtigste Nutztier nach Rind und Schwein",
    backgroundImage: "orange_bee.jpg",
  },

  // bienensterben hier
  {
    type: "info",
    text: "Aber der Bestand an Bienen, geht immer mehr zurück",
    backgroundImage: "deadbee.jpg",
  },
  {
    type: "info",
    text: "In manchen teilen der Chinas gibt es heute schon gar keine Bienen mehr",
    backgroundImage: "deadbees.jpg",
  },

  {
    type: "info",
    text: "Dort müssen Wanderarbeiter Blumen von Hand bestäuben",
    backgroundImage: "hand-pollination.jpg",
  },

  {
    type: "info",
    text: [
      "In Deutschland gibt es *590 Wildbienenarten*",
      ", davon sind über *50%* bedroht",
      " und *30%* vom *Aussterben* bedroht",
    ].join(""),
    backgroundImage: "concrete.jpg",
  },
  {
    type: "info",
    text: "Insgesamt gibt es heute *80%* weniger Insekten als vor *30* Jahren",
  },

  {
    type: "info",
    text: "Die Hälfte der Wildbienen wohnen unter der Erde, entweder in den Gängen anderer Insekten, in selbstgebauten Niströhren, hohlen Pflanzenstängeln oder in Mauerspalten",
    backgroundImage: "biotope.jpg",
  },
  {
    type: "info",
    text: "*Wildbienen* leben nur etwa vier bis sechs Wochen",
    backgroundImage: "purpleflower.jpg",
  },
  {
    type: "info",
    text: "Auch die Hummel gehört zu den Wildbienen",
    backgroundImage: "bumblebee.jpg",
  },

  // Honigbienen
  {
    type: "info",
    backgroundImage: "bee-colony.jpg",
    text: "*Honigbienen* hingegen leben in einem Bienenvolk, das aus ca. 60.000 Arbeitsbienen besteht, einigen Hundert Drohnen und einer *Königin*",
  },
  {
    type: "info",
    backgroundImage: "beekeeping.jpg",
    text: "Sie werden seit mehreren Tausend Jahren vom Menschen gezüchtet",
  },

  {
    type: "info",
    text: "... und vieles mehr",
  },

  {
    type: "info",
    text: "Was kann man da tun?",
  },
  {
    type: "info",
    text: "Biete Nistmöglichkeiten für Wildbienen an",
  },
  {
    type: "info",
    text: "Es muss nicht gleich ein riesiges „Bienen- oder Insektenhotel“ sein, auch mit wenig Aufwand kannst Du unseren Freunden helfen",
  },

  {
    type: "quiz",
    backgroundImage: "orange_bee.jpg",
    question: "Wie groß sind Völker von Honigbienen in der Regel?",
    answers: [
      {
        answer: "ca. 100 Bienen",
        correct: false,
      },
      {
        answer: "mehr als 50.000 Bienen",
        correct: true,
      },
      {
        answer: "ca 1 Million Bienen",
        correct: false,
      },
    ],
  },
  {
    type: "quiz",
    backgroundImage: "bumblebee.jpg",
    question: "Die Hummel ist...",
    answers: [
      {
        answer: "eine Honigbiene",
        correct: false,
      },
      {
        answer: "eine Wildbiene",
        correct: true,
      },
    ],
  },
  {
    type: "game",
    title1: "Spiele Tic Tac Toe in wabenform",
    title2: "bitte zu zweit spielen",
    next: "spiel beenden >",
    backgroundImage: "sungarden.jpg",
  },
  {
    type: "email",
    mainText: "Bleibe informiert, trage Deine Email-Adresse ein: ",
    emailPlaceholderText: "deine email hier...",
    buttonText: "Senden",
    thanksText: "Vielen Dank für Dein Vertrauen!",
  },
  {
    type: "info",
    text: "Ende",
    githubLinkText: "Open Source - QuellCode auf GitHub",
  },
];
