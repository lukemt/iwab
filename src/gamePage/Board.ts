import { Point } from "./Point";
import { Line, PointOwner } from "./types";

export class GameBoard {
  board: PointOwner[][] = [];

  constructor() {
    this.initBoard();
  }

  public initBoard() {
    for (let y = 0; y <= 3; y++) {
      this.board[y] = [];
      for (let x = 0; x <= y; x++) {
        this.board[y][x] = PointOwner.Free;
      }
    }
  }

  public allPointsOfBoard() {
    const points: Point[] = [];
    for (let y = 0; y <= 3; y++) {
      for (let x = 0; x <= y; x++) {
        points.push(new Point(x, y));
      }
    }
    return points;
  }

  public getPointOwner(point: Point) {
    /* TODO: Add checks or try catch or bugsnag */
    return this.board[point.y] && this.board[point.y][point.x];
  }

  public isPointValid(point: Point) {
    return point.y >= 0 && point.y <= 3 && point.x >= 0 && point.x <= point.y;
  }

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
