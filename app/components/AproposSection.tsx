"use client";

import "./AproposSection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AproposSection() {
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = badgeRef.current;
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
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="apropos-section">
      <div className="apropos-deco-ring" />

      <div className="apropos-inner">
        {/* LEFT — Texte */}
        <div className="apropos-left">
          <p className="apropos-badge">
            <span ref={badgeRef} className="apropos-badge-highlight">
              À PROPOS DE TENDRIL SCHOOL
            </span>
          </p>

          <h2 className="apropos-title">
            Une école pensée pour les standards du luxe
          </h2>

          <div className="apropos-body">
            <p>
              Cosmétique, parfum, mode, horlogerie ou joaillerie : ces
              industries génèrent en continu des contenus visuels pour leurs
              campagnes mondiales et leurs lancements produits.
            </p>

            <p>
              Dans cet environnement, les standards sont parmi les plus élevés
              du marché : qualité irréprochable, exigence du détail et
              production constante de visuels premium.
            </p>

            <p>
              Se former à la 3D à travers le luxe, c&apos;est apprendre
              directement au contact des exigences réelles de l&apos;industrie
              et intégrer ses codes visuels les plus avancés.
            </p>
          </div>

          <button className="apropos-cta">
            <strong>Voir la FAQ</strong>
          </button>
        </div>

        {/* RIGHT — Vidéo paysage */}
        <div className="apropos-right">
          <div className="apropos-video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1194535329?h=6ef5271aec&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="apropos-video"
              title="À propos de Tendril School"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
