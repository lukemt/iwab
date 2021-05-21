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
}

export interface IGamePageData {
  type: "game";
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
