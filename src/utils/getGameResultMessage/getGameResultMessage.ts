import type { GameResult } from "../../types/GameResult";
import { GameResult as GameResultValues } from "../../types/GameResult";
import { TEXT } from "../../constants/text";

/**
 * Gets a human-readable message for the game result
 * @param result - The game result
 * @returns A message describing the game state
 */
export function getGameResultMessage(result: GameResult): string {
  switch (result) {
    case GameResultValues.XWon:
      return TEXT.WINNER_X;
    case GameResultValues.OWon:
      return TEXT.WINNER_O;
    case GameResultValues.Draw:
      return TEXT.GAME_DRAW;
    case GameResultValues.NotFinished:
      return "";
    default:
      return "";
  }
}
