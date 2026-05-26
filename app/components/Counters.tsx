"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const COUNTERS = [
  { prefix: "+", value: 15, label: "Mentors" },
  { prefix: "+", value: 200, label: "Étudiants" },
  { prefix: "+", value: 30, label: "Formations" },
  { prefix: "", value: 98, suffix: "%", label: "Satisfaction" },
];

export default function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;

        const valueEls = el.querySelectorAll<HTMLElement>(".counter-value");
        const barEls = el.querySelectorAll<HTMLElement>(".counter-bar-fill");

        COUNTERS.forEach((c, i) => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: c.value,
            duration: 1.6,
            ease: "power2.out",
            delay: i * 0.15,
            onUpdate() {
              const v = Math.round(obj.val);
              valueEls[i].textContent = `${c.prefix ?? ""}${v}${
                c.suffix ?? ""
              }`;
            },
          });

          gsap.fromTo(
            barEls[i],
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.4,
              ease: "power2.out",
              delay: i * 0.15,
              transformOrigin: "left center",
            }
          );
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="hero-counters">
      {COUNTERS.map((c, i) => (
        <div key={i} className="hero-counter">
          <span className="counter-value">
            {c.prefix}
            {0}
            {c.suffix}
          </span>
          <span className="counter-bar">
            <span className="counter-bar-fill" />
          </span>
          <span className="counter-label">{c.label}</span>
        </div>
      ))}
    </div>
  );
}
