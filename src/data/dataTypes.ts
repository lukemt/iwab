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
}

interface IBackground {
  backgroundImage?: string;
}

export type PageData = (
  | IInfoPageData
  | IGamePageData
  | IQuizPageData
  | IEmailPageData
) &
  IBackground;
