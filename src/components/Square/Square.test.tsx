import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Square from "./Square";

describe("Square", () => {
  describe("rendering", () => {
    it("should render an empty square with null value", () => {
      render(<Square value={null} onClick={() => {}} />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("");
    });

    it("should render X when value is X", () => {
      render(<Square value="X" onClick={() => {}} />);
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent("X");
    });

    it("should render O when value is O", () => {
      render(<Square value="O" onClick={() => {}} />);
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent("O");
    });
  });

  describe("CSS classes", () => {
    it("should have 'square' class for empty square", () => {
      render(<Square value={null} onClick={() => {}} />);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("square");
      expect(button).not.toHaveClass("filled");
    });

    it("should have both 'square' and 'filled' classes when value is X", () => {
      render(<Square value="X" onClick={() => {}} />);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("square");
      expect(button).toHaveClass("filled");
    });

    it("should have both 'square' and 'filled' classes when value is O", () => {
      render(<Square value="O" onClick={() => {}} />);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("square");
      expect(button).toHaveClass("filled");
    });
  });

  describe("accessibility", () => {
    it("should have aria-label 'Empty square' when value is null", () => {
      render(<Square value={null} onClick={() => {}} />);
      const button = screen.getByLabelText("Empty square");

      expect(button).toBeInTheDocument();
    });

    it("should have aria-label 'Square filled with X' when value is X", () => {
      render(<Square value="X" onClick={() => {}} />);
      const button = screen.getByLabelText("Square filled with X");

      expect(button).toBeInTheDocument();
    });

    it("should have aria-label 'Square filled with O' when value is O", () => {
      render(<Square value="O" onClick={() => {}} />);
      const button = screen.getByLabelText("Square filled with O");

      expect(button).toBeInTheDocument();
    });
  });

  describe("user interaction", () => {
    it("should call onClick when clicked", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Square value={null} onClick={handleClick} />);
      const button = screen.getByRole("button");

      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should call onClick when square is already filled", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Square value="X" onClick={handleClick} />);
      const button = screen.getByRole("button");

      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should call onClick multiple times when clicked multiple times", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Square value={null} onClick={handleClick} />);
      const button = screen.getByRole("button");

      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });
});
