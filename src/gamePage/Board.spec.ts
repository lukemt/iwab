import { GameBoard } from "./Board";
import { PointOwner } from "./types";

describe("Board", () => {
  it("should hold owners", () => {
    // Arrange the
    const getOwner = () => "me";

    // Act
    const owner = getOwner();

    // Assert
    expect(owner).toBe("me");
  });

  it("should return 10 valid not owned points", () => {
    // Arrange
    const gameBoard = new GameBoard();

    // Act
    const points = gameBoard.allPointsOfBoard();

    // Assert
    expect(points.length).toBe(10);
    expect(points[0].x).toBe(0);
    expect(points[0].y).toBe(0);
    expect(points[9].x).toBe(3);
    expect(points[9].y).toBe(3);
    for (let point of points) {
      expect(gameBoard.getPointOwner(point)).toStrictEqual(PointOwner.Free);
      expect(gameBoard.isPointValid(point)).toStrictEqual(true);
    }
  });
});
