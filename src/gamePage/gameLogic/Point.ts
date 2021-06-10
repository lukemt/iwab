import { Dimension, Line } from "./types";

/**
 * Point represents a coordinate (x, y) to refer to a field on the Board.
 */
export class Point {
  public x: number;
  public y: number;

  /**
   * Simple initialization of a Point.
   * @param x X coordinate.
   * @param y Y coordinate.
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Returns a new Point relative to this Point but with a changed coordinate by adding a given value in a given dimension
   * @param dimension Dimension of in which to apply the addition.
   * @param value Value to add.
   * @returns New Point.
   */
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

  /**
   * Returns a new Line relative to this Point in a given Dimension with a given offset.
   * @param dimension Dimension of which the Line should be created.
   * @param offset Offset of the Line relative to this Point.
   * @returns Line relative to this Point.
   */
  line(dimension: Dimension, offset: number): Line {
    return [
      this.add(dimension, offset - 1),
      this.add(dimension, offset),
      this.add(dimension, offset + 1),
    ];
  }

  /**
   * Returns all Lines in a given Dimension, that include this Point.
   * @param dimension Dimension of which the Lines should be created.
   * @returns Created Lines as array of Lines.
   */
  linesOneDimension(dimension: Dimension): Line[] {
    return [
      this.line(dimension, -1),
      this.line(dimension, 0),
      this.line(dimension, 1),
    ];
  }

  /**
   * Returns all possible Lines that contain this Point.
   * @returns Array of Lines
   */
  linesAllDimensions(): Line[] {
    return [
      ...this.linesOneDimension(Dimension.Vertical),
      ...this.linesOneDimension(Dimension.Horizontal),
      ...this.linesOneDimension(Dimension.Diagonal),
    ];
  }
}
