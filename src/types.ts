export interface IPageState {
  isPrevious: boolean;
  isCurrent: boolean;
  isNext: boolean;
  zIndex: number;
}

export type StyleMode = "dark" | "light" | "noglass" | "nobackground";
