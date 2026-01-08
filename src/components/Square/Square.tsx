interface SquareProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      className={`square ${value ? "filled" : ""}`}
      onClick={onClick}
      aria-label={value ? `Square filled with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
}

export default Square;
