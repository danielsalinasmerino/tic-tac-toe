import type { CellValue } from "./CellValue";

/**
 * Type representing the game board as a 3x3 grid
 */
export type Board = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
];
