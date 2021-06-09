import type { Point } from "./Point";

/**
 * In a hexagonal grid (honeycomb) there are 3 Dimensions in which one hexagons can be in line with another.
 */
export enum Dimension {
  Vertical,
  Horizontal,
  Diagonal,
}

/**
 * Owner of a field. A field of the Board can be either free or occupied by one player.
 */
export enum FieldOwner {
  Free,
  Player1,
  Player2,
}

/**
 * Represents 3 Points that are next to each other. One can think of it as a potential winning combination.
 */
export type Line = [Point, Point, Point];
