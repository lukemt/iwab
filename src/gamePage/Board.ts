import { Point } from "./Point";
import { Line, PointOwner } from "./types";

/**
 * Represents the Board of the game as a two dimensional array with fields,
 * that can be occupied by a PointOwner.
 */
export class Board {
  board: PointOwner[][] = [];

  constructor() {
    this.initBoard();
  }

  /**
   * Initializes the board with "Free" fields.
   */
  public initBoard() {
    for (let y = 0; y <= 3; y++) {
      this.board[y] = [];
      for (let x = 0; x <= y; x++) {
        this.board[y][x] = PointOwner.Free;
      }
    }
  }

  /**
   * Creates an one dimensional array with Points pointing to every field in the Board.
   * @returns Array of Points
   */
  public allPointsOfBoard() {
    const points: Point[] = [];
    for (let y = 0; y <= 3; y++) {
      for (let x = 0; x <= y; x++) {
        points.push(new Point(x, y));
      }
    }
    return points;
  }

  /**
   * Returns the Owner of the field of the given Point.
   * @param {Point} point
   * @returns Owner
   */
  public getPointOwner(point: Point) {
    // TODO: Add checks or try catch or bugsnag
    return this.board[point.y] && this.board[point.y][point.x];
  }

  /**
   * Checks whether a given Point exists as field in the Board.
   * @param point
   * @returns Valid if the Point exists
   */
  public isPointValid(point: Point) {
    return point.y >= 0 && point.y <= 3 && point.x >= 0 && point.x <= point.y;
  }

  /**
   * Filters out Lines from a given array of Lines (groups of Points) that do not exist in the Board.
   * @param lines
   * @returns filtered lines
   */
  public filterInvalidLines(lines: Line[]) {
    return lines.filter((line) => {
      for (let point of line) {
        if (!this.isPointValid(point)) {
          return false;
        }
      }
      return true;
    });
  }
}
