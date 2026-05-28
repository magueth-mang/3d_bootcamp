"use client";

import "./novice.css";
import Fireflies from "../../components/Fireflies";
import Counters from "../../components/Counters";
import ProgramSection from "./ProgramSection";
import PortfolioSection from "./PortfolioSection";
import SkillsSection from "./SkillsSection";
import PrereqSection from "./PrereqSection";

export default function BootcampNovicePage() {
  return (
    <main>
      <section className="novice-hero">
        <Fireflies />

        {/* Demi-cercles déco */}
        <div className="novice-ring novice-ring-tl" />
        <div className="novice-ring novice-ring-tr" />

        {/* Scroll indicator */}
        <div className="novice-scroll-indicator">
          <span>Scroll</span>
        </div>

        {/* Contenu centré */}
        <div className="novice-hero-inner">
          <h1 className="novice-title">
            Bootcamp 3D Luxe
            <br />
            <span className="novice-title-accent">Novice</span>
          </h1>

          <p className="novice-subtitle">
            Maîtrisez les fondamentaux de la 3D pour créer vos premiers rendus
            produits photoréalistes.
          </p>

          {/* Compteurs */}
          <div className="novice-counters">
            <Counters />
          </div>

          {/* Pastilles infos */}
          <div className="novice-badges">
            <span className="novice-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              4 mois
            </span>
            <span className="novice-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Avril 2027 — Août 2027
            </span>
          </div>
        </div>
      </section>

      {/* Section compétences */}
      <SkillsSection />

      {/* Section prérequis */}
      <PrereqSection />

      <ProgramSection />
      <PortfolioSection />
    </main>
  );
}
