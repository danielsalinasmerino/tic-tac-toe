import { describe, it, expect } from "vitest";
import { convertToBoard } from "./convertToBoard";
import type { CellValue } from "../../types/CellValue";

describe("convertToBoard", () => {
  it("should convert a flat array of 9 nulls to a 3x3 board of nulls", () => {
    const squares: CellValue[] = Array(9).fill(null);
    const board = convertToBoard(squares);

    expect(board).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  });

  it("should correctly map squares to board positions", () => {
    const squares: CellValue[] = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    const board = convertToBoard(squares);

    expect(board).toEqual([
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "O", "X"],
    ]);
  });

  it("should handle partially filled board", () => {
    const squares: CellValue[] = [
      "X",
      "O",
      null,
      null,
      "X",
      null,
      null,
      null,
      "O",
    ];
    const board = convertToBoard(squares);

    expect(board).toEqual([
      ["X", "O", null],
      [null, "X", null],
      [null, null, "O"],
    ]);
  });

  it("should map index 0 to position [0][0]", () => {
    const squares: CellValue[] = [
      "X",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    const board = convertToBoard(squares);

    expect(board[0][0]).toBe("X");
  });

  it("should map index 4 to position [1][1] (center)", () => {
    const squares: CellValue[] = [
      null,
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      null,
    ];
    const board = convertToBoard(squares);

    expect(board[1][1]).toBe("X");
  });

  it("should map index 8 to position [2][2]", () => {
    const squares: CellValue[] = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "O",
    ];
    const board = convertToBoard(squares);

    expect(board[2][2]).toBe("O");
  });

  it("should handle a winning X pattern in first row", () => {
    const squares: CellValue[] = [
      "X",
      "X",
      "X",
      "O",
      "O",
      null,
      null,
      null,
      null,
    ];
    const board = convertToBoard(squares);

    expect(board[0]).toEqual(["X", "X", "X"]);
  });

  it("should handle a winning O pattern in diagonal", () => {
    const squares: CellValue[] = [
      "O",
      "X",
      "X",
      "X",
      "O",
      null,
      null,
      null,
      "O",
    ];
    const board = convertToBoard(squares);

    expect(board[0][0]).toBe("O");
    expect(board[1][1]).toBe("O");
    expect(board[2][2]).toBe("O");
  });
});
