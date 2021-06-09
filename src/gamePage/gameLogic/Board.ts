import { svgHexPoints } from "./helpers";
import { Point } from "./Point";
import { Field } from "./Field";
import type { FieldOwner, Line } from "./types";
import { MoveAnalyser } from "./MoveAnalyser";

/**
 * Represents the Board of the game as a two dimensional array with fields,
 * that can be occupied by a PointOwner.
 */
export class Board {
  board: Field[][] = [];

  constructor() {
    this.initBoard();
  }

  /**
   * Initializes the board with "Free" fields and coordinates for the SVG-Hexagon
   */
  public initBoard() {
    const radius = 30;
    let x = 0;
    let y = 0;

    for (let row = 0; row < 4; row += 1) {
      this.board[row] = [];
      for (let col = 0; col < 4; col += 1) {
        var newCol = col + Math.ceil(row / 2) - 2;
        var minusCol = col - Math.floor(row / 2);

        if (newCol >= 0 && minusCol < 3) {
          var offset = (Math.sqrt(3) * radius) / 2;
          x = 40 + offset * col * 2;
          y = 40 + offset * row * Math.sqrt(3);
          if (row % 2 !== 0) x += offset;

          this.board[row][newCol] = new Field(
            svgHexPoints(x, y, radius),
            new Point(newCol, row)
          );
        }
      }
    }
  }

  /**
   * Creates an one dimensional array with Points pointing to every Field in the Board.
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
   * Creates an one dimensional array with every Field in the Board.
   * @returns Array of Points
   */
  public allFieldsOfBoard() {
    return this.allPointsOfBoard().map((point) => this.getField(point));
  }

  /**
   * Returns the Owner of the field of the given Point.
   * @param {Point} point
   * @returns Owner
   */
  public getField(point: Point) {
    // TODO: Add checks or try catch or bugsnag
    return this.board[point.y] && this.board[point.y][point.x];
  }

  public makeMove(point: Point, owner: FieldOwner) {
    // TODO: check if free
    this.getField(point).setOwner(owner);
    const moveAnalyser = new MoveAnalyser(point, this);
    const winningLine = moveAnalyser.isMoveWinning(owner);
    if (winningLine) {
      for (let winningPoint of winningLine) {
        this.getField(winningPoint).setHighlight(true);
      }
    }
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
