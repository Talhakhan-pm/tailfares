"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/* Scrub-draws an SVG path as its container scrolls through the viewport. */
function drawPath(
  path: SVGPathElement,
  trigger: Element,
  start = "top 70%",
  end = "bottom 65%"
) {
  const len = path.getTotalLength();
  gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: { trigger, start, end, scrub: 0.5 },
  });
}

export default function Director() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        mobile: "(max-width: 640px)",
        desktop: "(min-width: 641px)",
      },
      (ctx) => {
        const { reduce, mobile } = ctx.conditions as {
          reduce: boolean;
          mobile: boolean;
        };

        if (reduce) {
          // The reduced-motion cut: everything static and visible.
          document.documentElement.classList.add("no-fx");
          return () => document.documentElement.classList.remove("no-fx");
        }

        lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);
        raf = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        // Smooth anchor jumps through Lenis
        const onAnchorClick = (e: Event) => {
          const a = (e.target as HTMLElement).closest('a[href^="#"]');
          if (!a) return;
          const target = document.querySelector(a.getAttribute("href") || "");
          if (target) {
            e.preventDefault();
            lenis?.scrollTo(target as HTMLElement, { offset: -20 });
          }
        };
        document.addEventListener("click", onAnchorClick);

        /* ---- Scene 1: departure-board entrance ---- */
        gsap.from(".s1 h1 .w", {
          yPercent: 110,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
          delay: 0.1,
        });
        gsap.from(".s1 .lede, .s1 .cta-row", {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.4,
        });
        gsap.from(".board-row", {
          y: 16,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.07,
          delay: 0.55,
        });

        // Plane taxis further along the hero path as the hero scrolls away
        const heroSvg = mobile ? ".flightpath-mobile" : ".flightpath-desktop";
        gsap.to(`${heroSvg} .hero-plane`, {
          motionPath: {
            path: `${heroSvg} .hero-path`,
            align: `${heroSvg} .hero-path`,
            alignOrigin: [0.5, 0.5],
            autoRotate: 90,
            start: 0.32,
            end: 0.72,
          },
          ease: "none",
          scrollTrigger: {
            trigger: ".s1",
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });

        /* ---- Scene 2: the line draws, checkpoints stamp in ---- */
        const prepLine = document.querySelector<SVGPathElement>(
          ".prep-line .draw-path"
        );
        const prepSteps = document.querySelector(".prep-steps");
        if (prepLine && prepSteps) drawPath(prepLine, prepSteps);

        document.querySelectorAll(".prep-step").forEach((step, i) => {
          const stamp = step.querySelector(".stamp");
          const card = step.querySelector(".prep-card");
          if (stamp) {
            ScrollTrigger.create({
              trigger: step,
              start: "top 62%",
              toggleClass: { targets: stamp, className: "is-stamped" },
            });
          }
          if (card) {
            gsap.from(card, {
              x: mobile ? 32 : i % 2 === 0 ? -48 : 48,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: step, start: "top 72%" },
            });
          }
        });

        /* ---- Scene 3: the peak — pinned night flight ---- */
        // Letterbox: ink floods in as the scene arrives
        gsap.fromTo(
          ".s3-stage",
          { clipPath: "inset(9% 0% 9% 0%)", opacity: 0.6 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".s3",
              start: "top 90%",
              end: "top 15%",
              scrub: 0.5,
            },
          }
        );

        const arc = document.querySelector<SVGPathElement>(".nightmap .arc");
        if (arc) {
          const arcLen = arc.getTotalLength();
          // The arc draws behind the plane as a solid glowing stroke
          gsap.set(arc, { strokeDasharray: arcLen, strokeDashoffset: arcLen });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: ".s3",
              start: "top top",
              end: mobile ? "+=180%" : "+=300%",
              pin: true,
              scrub: 0.5,
            },
          });

          tl.from(".s3 h2", { opacity: 0, y: 40, duration: 0.5 }, 0)
            .to(arc, { strokeDashoffset: 0, duration: 3 }, 0.5)
            .to(
              ".night-plane",
              {
                motionPath: {
                  path: ".nightmap .arc",
                  align: ".nightmap .arc",
                  alignOrigin: [0.5, 0.5],
                  autoRotate: 90,
                },
                duration: 3,
              },
              0.5
            )
            .fromTo(
              ".s3-caption:nth-child(1)",
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.3 },
              0.7
            )
            .to(".s3-caption:nth-child(1)", { opacity: 0, duration: 0.25 }, 1.5)
            .fromTo(
              ".s3-caption:nth-child(2)",
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.3 },
              1.8
            )
            .to(".s3-caption:nth-child(2)", { opacity: 0, duration: 0.25 }, 2.6)
            .fromTo(
              ".s3-caption:nth-child(3)",
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.3 },
              2.9
            )
            .fromTo(
              ".city-b",
              { opacity: 0.4 },
              { opacity: 1, duration: 0.2 },
              3.3
            );
        }

        /* ---- Scene 4: margin line + proof reveals ---- */
        const s4Line = document.querySelector<SVGPathElement>(
          ".s4-line .draw-path"
        );
        // start/end at 55% of the viewport so the drawn tip always sits
        // just above the reader's eye line; the line spans s4 + the FAQ
        const tail = document.querySelector(".journey-tail");
        if (s4Line && tail) drawPath(s4Line, tail, "top 55%", "bottom 55%");

        document.querySelectorAll(".landing-stamp .stamp").forEach((stamp) => {
          ScrollTrigger.create({
            trigger: stamp,
            start: "top 70%",
            toggleClass: { targets: stamp, className: "is-stamped" },
          });
        });

        gsap.from(".fares tbody tr", {
          y: 18,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: { trigger: ".fares", start: "top 75%" },
        });

        gsap.from(".compare-table", {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".compare-scroll", start: "top 78%" },
        });

        /* ---- Scene 5: the pass arrives ---- */
        gsap.from(".s5 .pass", {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".s5", start: "top 70%" },
        });
        gsap.from(".s5 h2, .s5 .lede", {
          y: 22,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".s5", start: "top 70%" },
        });

        const onLoad = () => ScrollTrigger.refresh();
        if (document.readyState === "complete") {
          // load already fired before hydration — re-measure on the next frame
          requestAnimationFrame(() => ScrollTrigger.refresh());
        } else {
          window.addEventListener("load", onLoad);
        }
        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        return () => {
          document.removeEventListener("click", onAnchorClick);
          window.removeEventListener("load", onLoad);
          if (raf) gsap.ticker.remove(raf);
          lenis?.destroy();
          lenis = null;
        };
      }
    );

    return () => mm.revert();
  }, []);

  return null;
}
