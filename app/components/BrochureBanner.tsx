"use client";

import "./BrochureBanner.css";
import Image from "next/image";

export default function BrochureBanner() {
  return (
    <section className="brochure-banner">
      {/* Gauche — texte + bouton */}
      <div className="brochure-banner-left">
        <h2 className="brochure-banner-title">
          Télécharger
          <br />
          la brochure
        </h2>
        <a href="#" className="btn-brochure-banner">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Télécharger
        </a>
      </div>

      {/* Centre — demi-cercle décoratif */}
      <div className="brochure-banner-deco" />

      {/* Droite — logo */}
      <div className="brochure-banner-right">
        <Image
          src="/assets/logo.png"
          alt="Tendril School"
          width={320}
          height={160}
          className="brochure-banner-logo"
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
