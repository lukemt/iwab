import { PointOwner } from "./types";

export function getOpponent(player: PointOwner) {
  if (player === PointOwner.Player1) {
    return PointOwner.Player2;
  } else {
    return PointOwner.Player1;
  }
}
