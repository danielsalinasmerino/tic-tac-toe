import type { Board } from "../../types/Board";
import type { CellValue } from "../../types/CellValue";
import type { GameResult } from "../../types/GameResult";
import { GameResult as GameResultValues } from "../../types/GameResult";

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
