import { useState, useMemo } from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";
import {
  checkGameResult,
  convertToBoard,
  getGameResultMessage,
} from "../../utils";
import { GameResult } from "../../types/GameResult";
import type { CellValue } from "../../types/CellValue";
import { TEXT } from "../../constants/text";

function Board() {
  const [squares, setSquares] = useState<CellValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Calculate game result
  const gameResult = useMemo(() => {
    const board = convertToBoard(squares);
    return checkGameResult(board);
  }, [squares]);

  const gameOver = gameResult !== GameResult.NotFinished;
  const resultMessage = getGameResultMessage(gameResult);

  const handleClick = (index: number) => {
    // Don't allow clicking if square is already filled or game is over
    if (squares[index] || gameOver) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index: number) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  const status = gameOver
    ? resultMessage
    : isXNext
      ? TEXT.NEXT_PLAYER_X
      : TEXT.NEXT_PLAYER_O;

  return (
    <div className={styles.container}>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        <div className={styles.boardRow}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      {gameOver && (
        <button className={styles.resetButton} onClick={handleReset}>
          {TEXT.PLAY_AGAIN}
        </button>
      )}
    </div>
  );
}

export default Board;
