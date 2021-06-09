import type { Board } from "./Board";
import type { Point } from "./Point";
import type { FieldOwner, Line } from "./types";

/**
 * Analyses a potential Move on the Board.
 */
export class MoveAnalyser {
  private point: Point;
  private board: Board;

  /**
   * Creates a new move to be analysed.
   * @param point Point (coordinates) of the move.
   * @param gameBoard Board to use.
   */
  constructor(point: Point, gameBoard: Board) {
    this.point = point;
    this.board = gameBoard;
  }

  /**
   * Gets all possible Lines that contain the Point that is to be analysed and removes those that protrude the Board.
   * @returns Array of Lines.
   */
  private getLinesOfPoint() {
    const allLines = this.point.linesAllDimensions();
    return this.board.filterInvalidLines(allLines);
  }

  /**
   * Counts the occupations of a given Player in the given Line on the Board.
   * @param line Line to use.
   * @param player The player to count.
   * @returns Number of occupations.
   */
  private countPlayersInLine(line: Line, player: FieldOwner): number {
    let count = 0;
    for (let point of line) {
      if (this.board.getField(point).owner === player) {
        count++;
      }
    }
    return count;
  }

  /**
   * Returns whether the move wins the game.
   * @param player Player to consider.
   * @returns null or the Winning Line
   */
  public isMoveWinning(player: FieldOwner) {
    const linesOfPoint = this.getLinesOfPoint();
    for (let line of linesOfPoint) {
      if (this.countPlayersInLine(line, player) === 3) {
        // needs to be 2 if point is free
        return line;
      }
    }
    return null;
  }
}
