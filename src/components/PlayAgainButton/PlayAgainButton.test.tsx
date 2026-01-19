import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlayAgainButton from "./PlayAgainButton";
import { TEXT } from "../../constants/text";

describe("PlayAgainButton", () => {
  describe("rendering", () => {
    it("should render button with 'Play Again' text", () => {
      render(<PlayAgainButton onClick={() => {}} />);
      const button = screen.getByRole("button", { name: TEXT.PLAY_AGAIN });
      expect(button).toBeInTheDocument();
    });

    it("should display the correct text from TEXT constants", () => {
      render(<PlayAgainButton onClick={() => {}} />);
      expect(screen.getByText(TEXT.PLAY_AGAIN)).toBeInTheDocument();
    });
  });

  describe("user interaction", () => {
    it("should call onClick handler when clicked", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<PlayAgainButton onClick={handleClick} />);
      const button = screen.getByRole("button");

      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should call onClick handler multiple times when clicked multiple times", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<PlayAgainButton onClick={handleClick} />);
      const button = screen.getByRole("button");

      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe("accessibility", () => {
    it("should be a button element", () => {
      render(<PlayAgainButton onClick={() => {}} />);
      const button = screen.getByRole("button");
      expect(button.tagName).toBe("BUTTON");
    });
  });
});
