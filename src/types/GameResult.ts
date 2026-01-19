/**
 * Represents the possible results of a tic-tac-toe game
 */
export const GameResult = {
  NotFinished: -1,
  Draw: 0,
  XWon: 1,
  OWon: 2,
} as const;

export type GameResult = (typeof GameResult)[keyof typeof GameResult];
