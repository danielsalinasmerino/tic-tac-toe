import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GameStatus from "./GameStatus";
import { GameResult } from "../../types/GameResult";
import { TEXT } from "../../constants/text";

describe("GameStatus", () => {
  describe("game in progress", () => {
    it("should display 'Next player: X' when X is next", () => {
      render(<GameStatus gameResult={GameResult.NotFinished} isXNext={true} />);
      expect(screen.getByText(TEXT.NEXT_PLAYER_X)).toBeInTheDocument();
    });

    it("should display 'Next player: O' when O is next", () => {
      render(
        <GameStatus gameResult={GameResult.NotFinished} isXNext={false} />,
      );
      expect(screen.getByText(TEXT.NEXT_PLAYER_O)).toBeInTheDocument();
    });
  });

  describe("game results", () => {
    it("should display 'Winner: X' when X wins", () => {
      render(<GameStatus gameResult={GameResult.XWon} isXNext={true} />);
      expect(screen.getByText(TEXT.WINNER_X)).toBeInTheDocument();
    });

    it("should display 'Winner: O' when O wins", () => {
      render(<GameStatus gameResult={GameResult.OWon} isXNext={false} />);
      expect(screen.getByText(TEXT.WINNER_O)).toBeInTheDocument();
    });

    it("should display 'Game Over: Draw' when game is a draw", () => {
      render(<GameStatus gameResult={GameResult.Draw} isXNext={true} />);
      expect(screen.getByText(TEXT.GAME_DRAW)).toBeInTheDocument();
    });
  });

  describe("winner result takes precedence", () => {
    it("should show winner message regardless of isXNext value when X wins", () => {
      render(<GameStatus gameResult={GameResult.XWon} isXNext={false} />);
      expect(screen.getByText(TEXT.WINNER_X)).toBeInTheDocument();
      expect(screen.queryByText(TEXT.NEXT_PLAYER_O)).not.toBeInTheDocument();
    });

    it("should show winner message regardless of isXNext value when O wins", () => {
      render(<GameStatus gameResult={GameResult.OWon} isXNext={true} />);
      expect(screen.getByText(TEXT.WINNER_O)).toBeInTheDocument();
      expect(screen.queryByText(TEXT.NEXT_PLAYER_X)).not.toBeInTheDocument();
    });
  });
});
