import type { GameResult } from "../../types/GameResult";
import { getGameResultMessage } from "../../utils";
import { TEXT } from "../../constants/text";
import styles from "./GameStatus.module.css";

interface GameStatusProps {
  gameResult: GameResult;
  isXNext: boolean;
}

function GameStatus({ gameResult, isXNext }: GameStatusProps) {
  const resultMessage = getGameResultMessage(gameResult);
  const statusMessage = resultMessage
    ? resultMessage
    : isXNext
      ? TEXT.NEXT_PLAYER_X
      : TEXT.NEXT_PLAYER_O;

  return <div className={styles.status}>{statusMessage}</div>;
}

export default GameStatus;
