import { useState } from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export function useConfetti() {
  const [conffetiIsActive, setConfettiIsActive] = useState(false);

  function showConfetti() {
    setConfettiIsActive(true);
  }

  function hideConfetti() {
    setConfettiIsActive(false);
  }

  function Confetti() {
    const { width, height } = useWindowSize();

    return (
      <ReactConfetti
        width={width}
        height={height}
        recycle={false}
        colors={["#8257e5", "#04d361"]}
        numberOfPieces={600}
        tweenDuration={6000}
      />
    );
  }

  return {
    Confetti: conffetiIsActive && Confetti,
    showConfetti,
    hideConfetti,
  };
}
