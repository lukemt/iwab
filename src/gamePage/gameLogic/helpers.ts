import { FieldOwner } from "./types";

export function getOpponent(player: FieldOwner) {
  if (player === FieldOwner.Player1) {
    return FieldOwner.Player2;
  } else {
    return FieldOwner.Player1;
  }
}

export function svgHexPoints(x: number, y: number, radius: number) {
  var points = [];
  for (var theta = 0; theta < Math.PI * 2; theta += Math.PI / 3) {
    var pointX, pointY;

    pointX = x + radius * Math.sin(theta);
    pointY = y + radius * Math.cos(theta);

    points.push(pointX + "," + pointY);
  }

  return points.join(" ");
}
