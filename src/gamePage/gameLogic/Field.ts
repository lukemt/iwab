import type { Point } from "./Point";
import { FieldOwner } from "./types";

export class Field {
  public readonly svgHexPoints: string;
  public readonly point: Point;
  public owner: FieldOwner = FieldOwner.Free;
  public highlight: boolean = false;

  constructor(svgHexPoints: string, point: Point) {
    this.svgHexPoints = svgHexPoints;
    this.point = point;
  }

  setOwner(owner: FieldOwner) {
    this.owner = owner;
  }
  setHighlight(highlight: boolean) {
    this.highlight = highlight;
  }
}
