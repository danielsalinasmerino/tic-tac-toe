/**
 * User-facing text strings for the Tic-Tac-Toe application
 * Centralized location for all UI text to facilitate internationalization
 */

export const TEXT = {
  // App
  APP_TITLE: "Tic-Tac-Toe",

  // Game status
  NEXT_PLAYER_X: "Next player: X",
  NEXT_PLAYER_O: "Next player: O",

  // Game results
  WINNER_X: "Winner: X",
  WINNER_O: "Winner: O",
  GAME_DRAW: "Game Over: Draw",

  // Actions
  PLAY_AGAIN: "Play Again",

  // Accessibility labels
  EMPTY_SQUARE: "Empty square",
  SQUARE_FILLED_X: "Square filled with X",
  SQUARE_FILLED_O: "Square filled with O",
} as const;
