"use client";

import { useEffect, useRef } from "react";

const PAW_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-12 -12 24 24'%3E%3Cg fill='%23111318'%3E%3Cellipse cx='0' cy='5.5' rx='6.5' ry='5.5'/%3E%3Cellipse cx='-7.5' cy='-2.5' rx='3' ry='4'/%3E%3Cellipse cx='-2.5' cy='-6.5' rx='3' ry='4.2'/%3E%3Cellipse cx='3' cy='-6.5' rx='3' ry='4.2'/%3E%3Cellipse cx='8' cy='-2.5' rx='3' ry='4'/%3E%3C/g%3E%3C/svg%3E";

export default function Backdrop() {
  const pawsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = pawsRef.current;
    if (!host || host.childElementCount > 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let i = 0; i < 7; i++) {
      const p = document.createElement("div");
      p.className = "bg-paw";
      const s = 18 + Math.random() * 26;
      p.style.left = (Math.random() * 96).toFixed(1) + "vw";
      p.style.width = p.style.height = s + "px";
      p.style.backgroundImage = `url("${PAW_URI}")`;
      p.style.setProperty("--o", (0.03 + Math.random() * 0.05).toFixed(3));
      p.style.animationDuration = (18 + Math.random() * 16).toFixed(1) + "s";
      p.style.animationDelay = (-Math.random() * 34).toFixed(1) + "s";
      host.appendChild(p);
    }
  }, []);

  return (
    <>
      <div className="bg-layer bg-wash" aria-hidden="true" />
      <div className="bg-blob bg-blob-a" aria-hidden="true" />
      <div className="bg-blob bg-blob-b" aria-hidden="true" />
      <div className="bg-layer bg-dots" aria-hidden="true" />
      <div ref={pawsRef} aria-hidden="true" />
    </>
  );
}
