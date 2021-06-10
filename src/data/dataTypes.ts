export interface IQuizPageData {
  type: "quiz";
  question: string;
  answers: {
    answer: string;
    correct: boolean;
  }[];
}

export interface IInfoPageData {
  type: "info";
  text: string;
  clickMode?: "imageFirst" | "textFirst" | "onlyBoth";
  githubLinkText?: string;
}

export interface IGamePageData {
  type: "game";
  title1: string;
  title2: string;
  next: string;
}

export interface IEmailPageData {
  type: "email";
  mainText: string;
  emailPlaceholderText: string;
  buttonText: string;
  thanksText: string;
}

interface IBackground {
  backgroundImage?: string;
}

// Definition des Union-Types
export type PageData = (
  | IInfoPageData
  | IGamePageData
  | IQuizPageData
  | IEmailPageData
) &
  IBackground;
