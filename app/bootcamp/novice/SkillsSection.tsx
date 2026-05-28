"use client";

import "./SkillsSection.css";

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-ring skills-ring--tl" />

      {/* SVG background shapes */}
      <svg className="skills-bg-svg" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="480" cy="120" r="180" stroke="#fff600" strokeWidth="1.5" opacity="0.12" />
        <circle cx="480" cy="120" r="100" stroke="#fff600" strokeWidth="1" opacity="0.1" />
        <rect x="60" y="320" width="120" height="120" rx="20" stroke="#c8c8c8" strokeWidth="1.2" opacity="0.1" transform="rotate(20 120 380)" />
        <line x1="0" y1="480" x2="300" y2="200" stroke="#fff600" strokeWidth="1" opacity="0.07" />
        <line x1="100" y1="550" x2="400" y2="100" stroke="#c8c8c8" strokeWidth="1" opacity="0.06" />
      </svg>

      <div className="skills-body">
        {/* Colonne gauche : titre + image */}
        <div className="skills-left">
          <div className="skills-header">
            <div className="skills-title-wrap">
              <h2 className="skills-title">Compétences acquises</h2>
              <div className="skills-underline" />
            </div>
            <p className="skills-intro">
              À la sortie du bootcamp avancé, l&apos;élève auras les
              compétences suivantes :
            </p>
          </div>
          <div className="skills-img" />
        </div>

        {/* Blocs compétences */}
        <div className="skills-blocks">
          {[
            { num: "01", title: "Compétences techniques" },
            { num: "02", title: "Compétences techniques" },
            { num: "03", title: "Compétences techniques" },
          ].map((block, i) => (
            <div key={i} className={`skills-card skills-card--${i + 1}`}>
              <span className="skills-card-bg">{block.num}</span>
              <div className="skills-card-content">
                <h3 className="skills-card-title">{block.title}</h3>
                <ul className="skills-card-list">
                  <li>Produire une publicité 3D complète</li>
                  <li>Créer des simulations réalistes (liquides, particules)</li>
                </ul>
              </div>
              <div className="skills-card-bar" />
            </div>
          ))}
        </div>
      </div>

      {/* Bouton brochure */}
      <div className="skills-cta">
        <a href="#" className="skills-cta-btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Télécharger la brochure
        </a>
      </div>
    </section>
  );
}
