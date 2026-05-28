"use client";

import "./PortfolioSection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = highlightRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { backgroundSize: "0% 100%" },
      {
        backgroundSize: "100% 100%",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="portfolio-section">
      <div className="portfolio-inner">
        {/* ── Gauche ── */}
        <div className="portfolio-left">
          <h2 className="portfolio-title">
            Les projets que vous pourrez intégrer à votre{" "}
            <span className="portfolio-highlight" ref={highlightRef}>
              portfolio
            </span>
          </h2>
          <p className="portfolio-desc">
            Packshots, animations produits, simulations&nbsp;: des réalisations
            concrètes pour construire un portfolio professionnel.
          </p>
          <a href="#" className="portfolio-cta-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Inscription
          </a>
        </div>

        {/* ── Droite — 3 rectangles vidéo ── */}
        <div className="portfolio-videos">
          <div className="portfolio-video">
            <div className="portfolio-video-play">▶</div>
          </div>
          <div className="portfolio-video">
            <div className="portfolio-video-play">▶</div>
          </div>
          <div className="portfolio-video">
            <div className="portfolio-video-play">▶</div>
          </div>
        </div>
      </div>
    </section>
  );
}
