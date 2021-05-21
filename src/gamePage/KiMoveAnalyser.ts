import { getOpponent } from "./helpers";
import { MoveAnalyser } from "./MoveAnalyser";
import type { Line } from "./Point";
import { PointOwner } from "./types";

export class KiMoveAnalyser extends MoveAnalyser {
  private rateLineForPlayer(line: Line, player: PointOwner): number {
    const opponent = getOpponent(player);
    const opponentCount = this.countPlayerInLine(line, opponent);
    if (opponentCount !== 0) {
      return 0;
    }
    const playerCount = this.countPlayerInLine(line, player);
    if (playerCount === 0) {
      return 5;
    } else if (playerCount === 1) {
      return 15;
    } else {
      return 100;
    }
  }
  private rateMoveForPlayer(lines: Line[], player: PointOwner): number {
    let score = 0;
    for (let line of lines) {
      this.rateLineForPlayer(line, player);
    }
    return score;
  }

  public rateMove() {
    const lines = this.getLines();
    return (
      this.rateMoveForPlayer(lines, PointOwner.Player1) +
      this.rateMoveForPlayer(lines, PointOwner.Player2)
    );
  }
}
