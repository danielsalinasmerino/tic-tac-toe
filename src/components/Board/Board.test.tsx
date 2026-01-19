import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Board from "./Board";

// Mock canvas-confetti to prevent canvas errors in tests
vi.mock("canvas-confetti", () => ({
  default: vi.fn(),
}));

describe("Board", () => {
  describe("initial rendering", () => {
    it("should render the board with 9 empty squares", () => {
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // 9 squares (no reset button initially)
      expect(buttons).toHaveLength(9);
      buttons.forEach((button) => {
        expect(button).toHaveTextContent("");
      });
    });

    it("should display 'Next player: X' initially", () => {
      render(<Board />);
      expect(screen.getByText("Next player: X")).toBeInTheDocument();
    });

    it("should not show reset button initially", () => {
      render(<Board />);
      expect(screen.queryByText("Play Again")).not.toBeInTheDocument();
    });
  });

  describe("making moves", () => {
    it("should place X on first click", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      await user.click(buttons[0]);

      expect(buttons[0]).toHaveTextContent("X");
    });

    it("should alternate between X and O", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      await user.click(buttons[0]); // X
      await user.click(buttons[1]); // O
      await user.click(buttons[2]); // X

      expect(buttons[0]).toHaveTextContent("X");
      expect(buttons[1]).toHaveTextContent("O");
      expect(buttons[2]).toHaveTextContent("X");
    });

    it("should update status message after each move", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      expect(screen.getByText("Next player: X")).toBeInTheDocument();

      await user.click(buttons[0]);
      expect(screen.getByText("Next player: O")).toBeInTheDocument();

      await user.click(buttons[1]);
      expect(screen.getByText("Next player: X")).toBeInTheDocument();
    });

    it("should not allow placing a mark on an occupied square", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      await user.click(buttons[0]); // X
      await user.click(buttons[0]); // Try to place O on same square

      expect(buttons[0]).toHaveTextContent("X");
      expect(screen.getByText("Next player: O")).toBeInTheDocument();
    });
  });

  describe("winning conditions", () => {
    it("should detect X win in top row", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // X: 0, 1, 2 | O: 3, 4
      await user.click(buttons[0]); // X
      await user.click(buttons[3]); // O
      await user.click(buttons[1]); // X
      await user.click(buttons[4]); // O
      await user.click(buttons[2]); // X wins

      expect(screen.getByText("Winner: X")).toBeInTheDocument();
      expect(screen.getByText("Play Again")).toBeInTheDocument();
    });

    it("should detect O win in left column", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // O: 0, 3, 6 | X: 1, 2
      await user.click(buttons[1]); // X
      await user.click(buttons[0]); // O
      await user.click(buttons[2]); // X
      await user.click(buttons[3]); // O
      await user.click(buttons[4]); // X
      await user.click(buttons[6]); // O wins

      expect(screen.getByText("Winner: O")).toBeInTheDocument();
      expect(screen.getByText("Play Again")).toBeInTheDocument();
    });

    it("should detect X win in diagonal", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // X: 0, 4, 8 | O: 1, 2
      await user.click(buttons[0]); // X
      await user.click(buttons[1]); // O
      await user.click(buttons[4]); // X
      await user.click(buttons[2]); // O
      await user.click(buttons[8]); // X wins

      expect(screen.getByText("Winner: X")).toBeInTheDocument();
    });

    it("should prevent further moves after a win", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // X wins: 0, 1, 2
      await user.click(buttons[0]); // X
      await user.click(buttons[3]); // O
      await user.click(buttons[1]); // X
      await user.click(buttons[4]); // O
      await user.click(buttons[2]); // X wins

      // Try to make another move
      await user.click(buttons[5]);
      expect(buttons[5]).toHaveTextContent("");
    });
  });

  describe("draw condition", () => {
    it("should detect a draw when board is full with no winner", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // Create a draw: X X O | O O X | X O X
      await user.click(buttons[0]); // X
      await user.click(buttons[3]); // O
      await user.click(buttons[1]); // X
      await user.click(buttons[4]); // O
      await user.click(buttons[5]); // X (not buttons[2] to avoid winning row)
      await user.click(buttons[2]); // O
      await user.click(buttons[6]); // X
      await user.click(buttons[7]); // O
      await user.click(buttons[8]); // X

      expect(screen.getByText("Game Over: Draw")).toBeInTheDocument();
      expect(screen.getByText("Play Again")).toBeInTheDocument();
    });
  });

  describe("reset functionality", () => {
    it("should reset the board when 'Play Again' is clicked", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // X wins
      await user.click(buttons[0]); // X
      await user.click(buttons[3]); // O
      await user.click(buttons[1]); // X
      await user.click(buttons[4]); // O
      await user.click(buttons[2]); // X wins

      expect(screen.getByText("Winner: X")).toBeInTheDocument();

      // Click reset
      const resetButton = screen.getByText("Play Again");
      await user.click(resetButton);

      // Board should be reset
      const allButtons = screen.getAllByRole("button");
      expect(allButtons).toHaveLength(9);
      allButtons.forEach((button) => {
        expect(button).toHaveTextContent("");
      });
      expect(screen.getByText("Next player: X")).toBeInTheDocument();
      expect(screen.queryByText("Play Again")).not.toBeInTheDocument();
    });

    it("should allow a new game after reset", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const buttons = screen.getAllByRole("button");

      // Quick game
      await user.click(buttons[0]); // X
      await user.click(buttons[3]); // O
      await user.click(buttons[1]); // X
      await user.click(buttons[4]); // O
      await user.click(buttons[2]); // X wins

      // Reset
      await user.click(screen.getByText("Play Again"));

      // Start new game
      const newButtons = screen.getAllByRole("button");
      await user.click(newButtons[4]); // X in center
      expect(newButtons[4]).toHaveTextContent("X");
      expect(screen.getByText("Next player: O")).toBeInTheDocument();
    });
  });
});
