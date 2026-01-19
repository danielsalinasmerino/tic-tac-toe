import { describe, it, expect } from "vitest";
import { getGameResultMessage } from "./getGameResultMessage";
import { GameResult } from "../../types/GameResult";

describe("getGameResultMessage", () => {
  it("should return 'Winner: X' when X wins", () => {
    const result = getGameResultMessage(GameResult.XWon);
    expect(result).toBe("Winner: X");
  });

  it("should return 'Winner: O' when O wins", () => {
    const result = getGameResultMessage(GameResult.OWon);
    expect(result).toBe("Winner: O");
  });

  it("should return 'Game Over: Draw' when the game is a draw", () => {
    const result = getGameResultMessage(GameResult.Draw);
    expect(result).toBe("Game Over: Draw");
  });

  it("should return empty string when the game is not finished", () => {
    const result = getGameResultMessage(GameResult.NotFinished);
    expect(result).toBe("");
  });

  it("should return empty string for invalid game result", () => {
    const invalidResult = 999 as GameResult;
    const result = getGameResultMessage(invalidResult);
    expect(result).toBe("");
  });
});
