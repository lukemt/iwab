import type { Point } from "./Point";

export enum Dimension {
  Vertical,
  Horizontal,
  Diagonal,
}

export enum PointOwner {
  Free,
  Player1,
  Player2,
}

export type Line = [Point, Point, Point];
