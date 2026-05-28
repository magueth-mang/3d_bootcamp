"use client";

import "./ObjectifSection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ObjectifSection() {
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
    <section className="objectif-section">
      <div className="objectif-deco-ring" />

      <div className="objectif-inner">
        {/* LEFT — image */}
        <div className="objectif-left">
          <div className="objectif-img-bottom">
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80"
              alt="Rendu 3D premium"
            />
          </div>
        </div>

        {/* RIGHT — Texte */}
        <div className="objectif-right">
          <p className="objectif-badge">
            <span ref={badgeRef} className="objectif-badge-highlight">
              NOTRE OBJECTIF CHEZ TENDRIL
            </span>
          </p>

          <h2 className="objectif-title">
            Votre objectif au sein de Tendril School
          </h2>

          <div className="objectif-body">
            <p>
              Tendrill School est une école indépendante spécialisée dans la 3D
              appliquée au <strong>luxe</strong> et à la{" "}
              <strong>publicité</strong>.
            </p>
            <p>
              Ici, l&apos;objectif ne se limite pas à apprendre des logiciels.
              Le programme met l&apos;accent sur la{" "}
              <strong>direction artistique</strong>, la compréhension des codes
              visuels du luxe et la capacité à produire des visuels conformes
              aux attentes des marques premium.
            </p>

            <p>
              Les bootcamps reposent sur une approche{" "}
              <strong>intensive, pratique</strong> et directement inspirée des
              méthodes de production professionnelles. À travers des projets
              concrets, les étudiants développent des compétences en
              modélisation, lighting, shading, animation et création
              publicitaire 3D.
            </p>

            <p>
              Tendrill School s&apos;adresse aux profils souhaitant évoluer
              rapidement, construire un <strong>portfolio solide</strong> et
              atteindre un niveau adapté aux standards actuels de
              l&apos;industrie.
            </p>
          </div>

          <button className="objectif-cta">
            <strong>Découvrir le programme</strong>
          </button>
        </div>
      </div>
    </section>
  );
}
