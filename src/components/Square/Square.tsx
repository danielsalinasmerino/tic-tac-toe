import type { CellValue } from "../../utils/gameLogic";

interface SquareProps {
  value: CellValue;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  const ariaLabel = value ? `Square filled with ${value}` : "Empty square";
  const className = `square ${value ? "filled" : ""}`;

  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {value}
    </button>
  );
}

export default Square;
