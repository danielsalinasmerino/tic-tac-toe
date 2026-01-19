import { TEXT } from "../../constants/text";
import styles from "./PlayAgainButton.module.css";

interface PlayAgainButtonProps {
  onClick: () => void;
}

function PlayAgainButton({ onClick }: PlayAgainButtonProps) {
  return (
    <button className={styles.resetButton} onClick={onClick}>
      {TEXT.PLAY_AGAIN}
    </button>
  );
}

export default PlayAgainButton;
