import { useState } from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";

function Board() {
  const [squares, setSquares] = useState<Array<"X" | "O" | null>>(
    Array(9).fill(null)
  );
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    // Don't allow clicking if square is already filled
    if (squares[index]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index: number) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.status}>Next player: {isXNext ? "X" : "O"}</div>
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
    </div>
  );
}

export default Board;
