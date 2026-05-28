"use client";

import "./novice.css";
import Fireflies from "../../components/Fireflies";
import Counters from "../../components/Counters";

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
      <section className="novice-skills-section">
        {/* Header au-dessus */}
        <div className="novice-skills-header">
          <div className="novice-skills-title-wrap">
            <h2 className="novice-skills-title">Compétences acquises</h2>
            <div className="novice-skills-underline" />
          </div>
          <p className="novice-skills-intro">
            À la sortie du bootcamp avancé, l&apos;élève auras les compétences
            suivantes :
          </p>
        </div>

        {/* Contenu : image + blocs */}
        <div className="novice-skills-body">
          {/* Image */}
          <div className="novice-skills-img">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
              alt="3D render"
            />
          </div>

          {/* Blocs compétences */}
          <div className="novice-skills-blocks">
            {[
              { num: "01", title: "Compétences techniques" },
              { num: "02", title: "Compétences techniques" },
              { num: "03", title: "Compétences techniques" },
            ].map((block, i) => (
              <div
                key={i}
                className={`novice-skill-card novice-skill-card--${i + 1}`}
              >
                <span className="novice-skill-card-bg">{block.num}</span>
                <div className="novice-skill-card-content">
                  <h3 className="novice-skill-card-title">{block.title}</h3>
                  <ul className="novice-skill-card-list">
                    <li>Produire une publicité 3D complète</li>
                    <li>
                      Créer des simulations réalistes (liquides, particules)
                    </li>
                  </ul>
                </div>
                <div className="novice-skill-card-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
