import type { GameResult } from "../../types/GameResult";
import { GameResult as GameResultValues } from "../../types/GameResult";

/**
 * Gets a human-readable message for the game result
 * @param result - The game result
 * @returns A message describing the game state
 */
export function getGameResultMessage(result: GameResult): string {
  switch (result) {
    case GameResultValues.XWon:
      return "Winner: X";
    case GameResultValues.OWon:
      return "Winner: O";
    case GameResultValues.Draw:
      return "Game Over: Draw";
    case GameResultValues.NotFinished:
      return "";
    default:
      return "";
  }
}
