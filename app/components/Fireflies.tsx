"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const FIREFLIES = [
  { top: "12%", left: "8%", size: 4 },
  { top: "28%", left: "15%", size: 3 },
  { top: "55%", left: "6%", size: 5 },
  { top: "72%", left: "22%", size: 3 },
  { top: "85%", left: "10%", size: 4 },
  { top: "18%", left: "38%", size: 3 },
  { top: "42%", left: "32%", size: 5 },
  { top: "65%", left: "45%", size: 3 },
  { top: "90%", left: "38%", size: 4 },
  { top: "8%", left: "55%", size: 5 },
  { top: "35%", left: "62%", size: 3 },
  { top: "78%", left: "58%", size: 4 },
  { top: "15%", left: "75%", size: 3 },
  { top: "50%", left: "80%", size: 5 },
  { top: "88%", left: "72%", size: 3 },
  { top: "22%", left: "90%", size: 4 },
  { top: "60%", left: "92%", size: 3 },
  { top: "40%", left: "88%", size: 5 },
];

export default function Fireflies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dots = containerRef.current?.querySelectorAll<HTMLElement>(".ff");
    if (!dots) return;

    dots.forEach((dot) => {
      const animate = () => {
        gsap.to(dot, {
          x: gsap.utils.random(-18, 18),
          y: gsap.utils.random(-18, 18),
          opacity: gsap.utils.random(0.3, 1),
          duration: gsap.utils.random(2.5, 5),
          ease: "sine.inOut",
          onComplete: animate,
        });
      };
      // stagger start
      gsap.delayedCall(gsap.utils.random(0, 3), animate);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {FIREFLIES.map((f, i) => (
        <span
          key={i}
          className="ff"
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            borderRadius: "50%",
            background: "#fff600",
            boxShadow: `0 0 ${f.size * 2}px ${f.size}px rgba(255,246,0,0.35)`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
