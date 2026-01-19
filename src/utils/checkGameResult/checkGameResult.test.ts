import { describe, it, expect } from "vitest";
import { checkGameResult } from "./checkGameResult";
import { GameResult } from "../../types/GameResult";
import type { Board } from "../../types/Board";

describe("checkGameResult", () => {
  describe("X wins", () => {
    it("should return XWon when X wins in first row", () => {
      const board: Board = [
        ["X", "X", "X"],
        ["O", "O", null],
        [null, null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });

    it("should return XWon when X wins in second row", () => {
      const board: Board = [
        ["O", "O", null],
        ["X", "X", "X"],
        [null, null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });

    it("should return XWon when X wins in third row", () => {
      const board: Board = [
        ["O", "O", null],
        [null, null, null],
        ["X", "X", "X"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });

    it("should return XWon when X wins in first column", () => {
      const board: Board = [
        ["X", "O", "O"],
        ["X", null, null],
        ["X", null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });

    it("should return XWon when X wins in second column", () => {
      const board: Board = [
        ["O", "X", "O"],
        [null, "X", null],
        [null, "X", null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });

    it("should return XWon when X wins in third column", () => {
      const board: Board = [
        ["O", "O", "X"],
        [null, null, "X"],
        [null, null, "X"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });

    it("should return XWon when X wins in main diagonal (top-left to bottom-right)", () => {
      const board: Board = [
        ["X", "O", "O"],
        [null, "X", null],
        [null, null, "X"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });

    it("should return XWon when X wins in anti-diagonal (top-right to bottom-left)", () => {
      const board: Board = [
        ["O", "O", "X"],
        [null, "X", null],
        ["X", null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.XWon);
    });
  });

  describe("O wins", () => {
    it("should return OWon when O wins in first row", () => {
      const board: Board = [
        ["O", "O", "O"],
        ["X", "X", null],
        [null, null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });

    it("should return OWon when O wins in second row", () => {
      const board: Board = [
        ["X", "X", null],
        ["O", "O", "O"],
        [null, null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });

    it("should return OWon when O wins in third row", () => {
      const board: Board = [
        ["X", "X", null],
        [null, null, null],
        ["O", "O", "O"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });

    it("should return OWon when O wins in first column", () => {
      const board: Board = [
        ["O", "X", "X"],
        ["O", null, null],
        ["O", null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });

    it("should return OWon when O wins in second column", () => {
      const board: Board = [
        ["X", "O", "X"],
        [null, "O", null],
        [null, "O", null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });

    it("should return OWon when O wins in third column", () => {
      const board: Board = [
        ["X", "X", "O"],
        [null, null, "O"],
        [null, null, "O"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });

    it("should return OWon when O wins in main diagonal", () => {
      const board: Board = [
        ["O", "X", "X"],
        [null, "O", null],
        [null, null, "O"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });

    it("should return OWon when O wins in anti-diagonal", () => {
      const board: Board = [
        ["X", "X", "O"],
        [null, "O", null],
        ["O", null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.OWon);
    });
  });

  describe("Game not finished", () => {
    it("should return NotFinished for empty board", () => {
      const board: Board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.NotFinished);
    });

    it("should return NotFinished for partially filled board with no winner", () => {
      const board: Board = [
        ["X", "O", null],
        ["O", "X", null],
        [null, null, null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.NotFinished);
    });

    it("should return NotFinished when only one cell is empty", () => {
      const board: Board = [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["O", "X", null],
      ];
      expect(checkGameResult(board)).toBe(GameResult.NotFinished);
    });
  });

  describe("Draw", () => {
    it("should return Draw when board is full with no winner", () => {
      const board: Board = [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["O", "X", "O"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.Draw);
    });

    it("should return Draw for another full board scenario", () => {
      const board: Board = [
        ["X", "X", "O"],
        ["O", "O", "X"],
        ["X", "O", "X"],
      ];
      expect(checkGameResult(board)).toBe(GameResult.Draw);
    });
  });
});
