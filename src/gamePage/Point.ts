import { Dimension, Line } from "./types";

export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(dimension: Dimension, value: number): Point {
    switch (dimension) {
      case Dimension.Vertical: {
        return new Point(this.x, this.y + value);
      }
      case Dimension.Horizontal: {
        return new Point(this.x + value, this.y);
      }
      case Dimension.Diagonal: {
        return new Point(this.x + value, this.y + value);
      }
    }
  }

  line(dimension: Dimension, offset: number): Line {
    return [
      this.add(dimension, offset - 1),
      this.add(dimension, offset),
      this.add(dimension, offset + 1),
    ];
  }
  linesOneDimension(dimension: Dimension): Line[] {
    return [
      this.line(dimension, -1),
      this.line(dimension, 0),
      this.line(dimension, 1),
    ];
  }
  linesAllDimensions(): Line[] {
    return [
      ...this.linesOneDimension(Dimension.Vertical),
      ...this.linesOneDimension(Dimension.Horizontal),
      ...this.linesOneDimension(Dimension.Diagonal),
    ];
  }
}
