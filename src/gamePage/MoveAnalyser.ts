import type { GameBoard } from "./Board";
import type { Line, Point } from "./Point";
import type { PointOwner } from "./types";

export class MoveAnalyser {
  private point: Point;
  private gameBoard: GameBoard;

  constructor(point: Point, gameBoard: GameBoard) {
    this.point = point;
    this.gameBoard = gameBoard;
  }

  public getLines() {
    const allLines = this.point.linesAllDimensions();
    return this.gameBoard.filterInvalidLines(allLines);
  }

  protected countPlayerInLine(line: Line, player: PointOwner): number {
    let count = 0;
    for (let point of line) {
      if (this.gameBoard.getPointOwner(point) === player) {
        count++;
      }
    }
    return count;
  }
}
