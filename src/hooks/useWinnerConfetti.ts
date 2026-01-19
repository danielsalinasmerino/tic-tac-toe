import { useEffect } from "react";
import confetti from "canvas-confetti";
import { GameResult } from "../types/GameResult";

/**
 * Custom hook to trigger confetti effect when a player wins
 * @param gameResult - The current game result
 */
export function useWinnerConfetti(gameResult: GameResult): void {
  useEffect(() => {
    if (gameResult === GameResult.XWon || gameResult === GameResult.OWon) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        // Confetti from left side shooting toward center
        confetti({
          particleCount: 3,
          angle: 30,
          spread: 45,
          origin: { x: 0, y: 0.5 },
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        });
        // Confetti from right side shooting toward center
        confetti({
          particleCount: 3,
          angle: 150,
          spread: 45,
          origin: { x: 1, y: 0.5 },
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [gameResult]);
}
