import type { Board } from "../types/Board";
import type { CellValue } from "../types/CellValue";
import type { GameResult } from "../types/GameResult";
import { GameResult as GameResultValues } from "../types/GameResult";

/**
 * Converts a flat array of squares to a 3x3 board grid
 * @param squares - Flat array of 9 cell values
 * @returns 3x3 board grid
 */
export function convertToBoard(squares: CellValue[]): Board {
  return [
    [squares[0], squares[1], squares[2]],
    [squares[3], squares[4], squares[5]],
    [squares[6], squares[7], squares[8]],
  ];
}

/**
 * Determines the result of a tic-tac-toe game
 * @param board - A 3x3 grid representing the game board
 * @returns GameResult indicating the current state of the game
 */
export function checkGameResult(board: Board): GameResult {
  // Check rows
  for (const row of board) {
    if (row.every((cell) => cell === "X")) return GameResultValues.XWon;
    if (row.every((cell) => cell === "O")) return GameResultValues.OWon;
  }

  // Check columns
  for (let col = 0; col < board.length; col++) {
    const column: CellValue[] = [board[0][col], board[1][col], board[2][col]];
    if (column.every((cell) => cell === "X")) return GameResultValues.XWon;
    if (column.every((cell) => cell === "O")) return GameResultValues.OWon;
  }

  // Check diagonals
  const diagonals: CellValue[][] = [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];
  for (const diagonal of diagonals) {
    if (diagonal.every((cell) => cell === "X")) return GameResultValues.XWon;
    if (diagonal.every((cell) => cell === "O")) return GameResultValues.OWon;
  }

  // Check if game is still in progress (any empty cells)
  if (board.some((row) => row.includes(null)))
    return GameResultValues.NotFinished;

  // All cells filled with no winner = draw
  return GameResultValues.Draw;
}

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
