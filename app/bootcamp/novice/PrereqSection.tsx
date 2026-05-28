"use client";

import "./PrereqSection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PrereqSection() {
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
    <section className="prereq-section">
      <div className="prereq-ring prereq-ring--mr" />

      {/* SVG background shapes */}
      <svg className="prereq-bg-svg" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="80" cy="420" r="200" stroke="#fff600" strokeWidth="1.5" opacity="0.1" />
        <circle cx="80" cy="420" r="110" stroke="#fff600" strokeWidth="1" opacity="0.08" />
        <rect x="380" y="60" width="100" height="100" rx="16" stroke="#c8c8c8" strokeWidth="1.2" opacity="0.1" transform="rotate(-15 430 110)" />
        <line x1="600" y1="0" x2="200" y2="400" stroke="#fff600" strokeWidth="1" opacity="0.07" />
        <line x1="550" y1="100" x2="100" y2="500" stroke="#c8c8c8" strokeWidth="1" opacity="0.06" />
      </svg>

      <div className="prereq-inner">
        {/* Gauche */}
        <div className="prereq-left">
          <h2 className="prereq-title">
            Prérequis du Bootcamp{" "}
            <span className="prereq-highlight" ref={highlightRef}>
              Novice
            </span>
          </h2>

          <div className="prereq-body">
            <p className="prereq-text">
              Le bootcamp <strong>Novice</strong> est conçu pour accompagner
              des profils souhaitant se former à la{" "}
              <strong>3D appliquée au luxe</strong> et{" "}
              <strong>à la publicité</strong>, même sans expérience préalable.
              <br />
              <br />
              Nous recherchons avant tout des personnes motivées, capables
              d&apos;évoluer dans un environnement <strong>intensif</strong> et{" "}
              <strong>orienté production</strong>.
            </p>

            <p className="prereq-text prereq-text--label">
              Dans ce cadre, certains éléments sont essentiels&nbsp;:
            </p>

            <ul className="prereq-list">
              <li>Intérêt pour la création visuelle et la 3D</li>
              <li>Forte motivation et régularité dans le travail</li>
              <li>Aisance avec l&apos;outil informatique</li>
              <li>
                Curiosité pour l&apos;univers du luxe et des images premium
              </li>
              <li>Capacité à apprendre rapidement et à progresser</li>
            </ul>

            <p className="prereq-text prereq-text--footer">
              Se former dans cet environnement, c&apos;est entrer dans une
              logique de production exigeante où la qualité visuelle, la
              discipline de travail et la volonté de progresser sont au cœur
              de l&apos;apprentissage.
            </p>
          </div>
        </div>

        {/* Droite — image placeholder */}
        <div className="prereq-img-placeholder" />
      </div>
    </section>
  );
}
