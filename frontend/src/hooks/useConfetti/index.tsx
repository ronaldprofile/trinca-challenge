import { useState } from "react";
import { Confetti } from "../../components/Confetti";

export function useConfetti() {
  const [conffetiIsActive, setConfettiIsActive] = useState(false);

  function showConfetti() {
    setConfettiIsActive(true);
  }

  function hideConfetti() {
    setConfettiIsActive(false);
  }

  return {
    Confetti: conffetiIsActive && Confetti,
    showConfetti,
    hideConfetti,
  };
}
