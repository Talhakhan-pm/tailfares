"use client";

import { useCallback, useRef, useState } from "react";

const PLANE =
  "M0 -14 C 1.6 -9 2.4 -5 2.4 -1 L 12 7 L 12 10 L 2.2 6 L 1.6 12 L 4.6 14.6 L 4.6 16.6 L 0 15.4 L -4.6 16.6 L -4.6 14.6 L -1.6 12 L -2.2 6 L -12 10 L -12 7 L -2.4 -1 C -2.4 -5 -1.6 -9 0 -14 Z";

type Phase = "idle" | "flying" | "landed";

export default function CardPlane() {
  const [phase, setPhase] = useState<Phase>("idle");
  const flights = useRef(0);

  const fly = useCallback(() => {
    if (phase === "flying") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    flights.current += 1;
    if (reduce) {
      setPhase("landed");
      return;
    }
    setPhase("flying");
  }, [phase]);

  return (
    <>
      <button
        className={`biz-plane-btn ${phase === "flying" ? "is-hidden" : ""}`}
        onClick={fly}
        aria-label="Send the plane on a lap of the card"
      >
        <svg className="biz-plane" viewBox="-16 -16 32 32" aria-hidden="true">
          <path d={PLANE} fill="var(--electric)" />
        </svg>
        <span className="biz-hint">
          {phase === "landed" ? "AGAIN? TAP THE PLANE" : "TAP THE PLANE"}
        </span>
      </button>

      {phase === "flying" && (
        <span className="biz-flyer" onAnimationEnd={() => setPhase("landed")}>
          <svg viewBox="-16 -16 32 32" aria-hidden="true">
            <path d={PLANE} fill="var(--electric)" />
          </svg>
        </span>
      )}

      <span
        className={`biz-stamp ${phase === "landed" ? "show" : ""}`}
        aria-live="polite"
      >
        {flights.current > 1 ? "FREQUENT FLYER ✓" : "GOOD DOG · CLEARED FOR TAKEOFF ✓"}
      </span>
    </>
  );
}
