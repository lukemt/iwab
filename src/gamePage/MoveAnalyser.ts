import type { Board } from "./Board";
import type { Point } from "./Point";
import type { Line, PointOwner } from "./types";

/**
 * Analyses a Move on the Board.
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
   * @returns Array of Lines
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
  private countPlayersInLine(line: Line, player: PointOwner): number {
    let count = 0;
    for (let point of line) {
      if (this.board.getPointOwner(point) === player) {
        count++;
      }
    }
    return count;
  }

  /**
   * Returns whether the move is wins the game.
   * @param player Player to consider.
   * @returns Boolean
   */
  public isMoveWinning(player: PointOwner): boolean {
    const linesOfPoint = this.getLinesOfPoint();
    for (let line of linesOfPoint) {
      if (this.countPlayersInLine(line, player) === 3) {
        return true;
      }
    }
    return false;
  }
}

/**
 * find winner:
 * put move into board.
 * * board.makeMove(point)
 * * new MoveAnalyser(point).isPointWinning():boolean
 */
