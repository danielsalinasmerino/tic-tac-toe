import type { CellValue } from "../../types";
import { TEXT } from "../../constants/text";

interface SquareProps {
  value: CellValue;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  const ariaLabel = value
    ? value === "X"
      ? TEXT.SQUARE_FILLED_X
      : TEXT.SQUARE_FILLED_O
    : TEXT.EMPTY_SQUARE;

  const className = `square ${value ? "filled" : ""}`;

  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {value}
    </button>
  );
}

export default Square;
