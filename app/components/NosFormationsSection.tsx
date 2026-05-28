"use client";

import "./NosFormationsSection.css";

export default function NosFormationsSection() {
  return (
    <section className="nosformations-section">
      {/* Header centré */}
      <div className="nosformations-header">
        <span className="nosformations-tag">NOS FORMATIONS</span>
        <h2 className="nosformations-title">Nos formations</h2>
        <p className="nosformations-subtitle">
          Deux programmes intensifs dédiés à la visualisation 3D<br />
          pour l&apos;industrie du luxe.
        </p>
      </div>

      {/* Cards */}
      <div className="nosformations-cards">
        {/* Card Novice */}
        <div className="nosformations-card">
          <div className="nosformations-card-top">
            <span className="nosformations-card-badge">BOOTCAMP</span>
            <h3 className="nosformations-card-title">Bootcamp Novice</h3>
            <div className="nosformations-card-meta">
              <span className="nosformations-card-tag">3D DESIGN</span>
              <span className="nosformations-card-duration">4 mois</span>
            </div>
            <p className="nosformations-card-desc">
              Le programme d&apos;entrée dans l&apos;univers de la 3D appliquée
              au luxe. Conçu pour les profils sans expérience préalable, ce
              bootcamp pose des bases solides en modélisation, éclairage et
              rendu pour les standards premium.
            </p>
          </div>
          <div className="nosformations-card-actions">
            <a href="#" className="btn-nosformations-primary">Plus d&apos;informations</a>
            <a href="#" className="btn-nosformations-ghost">Voir les pré-requis</a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="nosformations-divider" />

        {/* Card Avancé */}
        <div className="nosformations-card">
          <div className="nosformations-card-top">
            <span className="nosformations-card-badge">BOOTCAMP</span>
            <h3 className="nosformations-card-title">Bootcamp Avancé</h3>
            <div className="nosformations-card-meta">
              <span className="nosformations-card-tag">3D DESIGN</span>
              <span className="nosformations-card-duration">4 mois</span>
            </div>
            <p className="nosformations-card-desc">
              Le programme d&apos;excellence pour les profils ayant déjà des
              bases en 3D. Direction artistique avancée, production de
              campagnes publicitaires premium et maîtrise des exigences
              visuelles des grandes maisons de luxe.
            </p>
          </div>
          <div className="nosformations-card-actions">
            <a href="#" className="btn-nosformations-primary">Plus d&apos;informations</a>
            <a href="#" className="btn-nosformations-ghost">Voir les pré-requis</a>
          </div>
        </div>
      </div>

      {/* Brochure */}
      <div className="nosformations-brochure">
        <p className="nosformations-brochure-text">
          Découvrez le programme complet des bootcamps dans notre brochure.
        </p>
        <a href="#" className="btn-nosformations-brochure">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Télécharger la brochure
        </a>
      </div>
    </section>
  );
}
