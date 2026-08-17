"use client";

import { useCallback, useRef, useState } from "react";

type Phase = "attached" | "tearing" | "torn";

export default function TicketTear() {
  const [phase, setPhase] = useState<Phase>("attached");
  const [progress, setProgress] = useState(0);
  const startX = useRef(0);
  const zoneRef = useRef<HTMLDivElement>(null);

  const complete = useCallback(() => {
    setPhase("torn");
    setProgress(1);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (phase === "torn") return;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) {
        complete();
        return;
      }
      startX.current = e.clientX;
      setPhase("tearing");
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [phase, complete]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (phase !== "tearing") return;
      const width = zoneRef.current?.offsetWidth || 300;
      const p = Math.min(1, Math.max(0, (e.clientX - startX.current) / (width * 0.7)));
      setProgress(p);
    },
    [phase]
  );

  const onPointerUp = useCallback(() => {
    if (phase !== "tearing") return;
    if (progress > 0.55) {
      complete();
    } else if (progress < 0.04) {
      // treated as a tap — tear it for them
      complete();
    } else {
      setPhase("attached");
      setProgress(0);
    }
  }, [phase, progress, complete]);

  return (
    <div className="tear-wrap" ref={zoneRef}>
      <div
        className={`tear-zone ${phase}`}
        role="button"
        tabIndex={0}
        aria-label="Tear off the ticket stub to reveal your boarding details"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            complete();
          }
        }}
      >
        <span className="tear-line" aria-hidden="true" />
        <span className="tear-hint">
          {phase === "torn" ? "" : "✂ TEAR ALONG THE LINE"}
        </span>
      </div>

      {phase !== "torn" && (
        <div
          className="tear-stub"
          aria-hidden="true"
          style={
            phase === "tearing"
              ? {
                  transform: `translateX(${progress * 46}px) rotate(${
                    progress * 5
                  }deg)`,
                  opacity: 1 - progress * 0.25,
                }
              : undefined
          }
        >
          <div className="stub-row">
            <span>STUB · TF-011</span>
            <svg viewBox="0 0 120 24" className="stub-barcode" aria-hidden="true">
              {[3, 9, 13, 21, 26, 34, 38, 47, 52, 58, 63, 71, 75, 83, 88, 95, 101, 108, 113].map(
                (x, i) => (
                  <rect
                    key={x}
                    x={x}
                    y="2"
                    width={i % 3 === 0 ? 3 : 1.6}
                    height="20"
                    fill="var(--ink)"
                  />
                )
              )}
            </svg>
          </div>
        </div>
      )}

      <div className={`tear-reveal ${phase === "torn" ? "open" : ""}`}>
        <div className="tear-reveal-inner">
          <p className="manifest">YOU&apos;RE ON THE MANIFEST.</p>
          <a className="btn btn-electric" href="/talha-khan.vcf" download>
            Save contact
          </a>
        </div>
      </div>
    </div>
  );
}
