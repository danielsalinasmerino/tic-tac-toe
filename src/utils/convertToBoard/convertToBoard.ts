import type { Board } from "../../types/Board";
import type { CellValue } from "../../types/CellValue";

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
