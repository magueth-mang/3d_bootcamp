"use client";

import "./RejoignezSection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", label: "Dépôt de candidature en ligne" },
  { num: "02", label: "Étude approfondie de votre profil" },
  { num: "03", label: "Entretien d'admission si nécessaire" },
  { num: "04", label: "Intégration directe au bootcamp" },
];

export default function RejoignezSection() {
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
    <section className="rejoignez-section">
      <div className="rejoignez-deco-ring" />

      <div className="rejoignez-inner">
        {/* LEFT — Texte */}
        <div className="rejoignez-left">
          <p className="rejoignez-badge">
            <span ref={badgeRef} className="rejoignez-badge-highlight">
              REJOIGNEZ-NOUS
            </span>
          </p>

          <h2 className="rejoignez-title">Comment intégrer Tendril School</h2>

          <div className="rejoignez-body">
            <p>
              L&apos;accès aux bootcamps Tendrill School se fait à travers un
              processus de candidature simple et entièrement en ligne.
            </p>
            <p>
              Chaque demande est étudiée afin de comprendre votre profil, votre
              motivation et votre adéquation avec l&apos;exigence du programme.
            </p>
            <p>
              Selon votre candidature, un entretien peut être proposé avant
              validation finale de votre admission.
            </p>
            <p>
              Découvrez ci-dessous les prérequis de chaque formation ainsi que
              les programmes détaillés des bootcamps.
            </p>
          </div>

          <div className="rejoignez-ctas">
            <a href="#" className="btn-rejoignez-primary">
              Découvrir le programme
            </a>
            <a href="#" className="btn-rejoignez-primary">
              Voir les pré-requis
            </a>
          </div>
        </div>

        {/* RIGHT — Étapes */}
        <div className="rejoignez-right">
          {steps.map((step, i) => (
            <div key={step.num} className="rejoignez-step-wrapper">
              <div className="rejoignez-step">
                <span className="rejoignez-step-num">{step.num}</span>
                <span className="rejoignez-step-label">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="rejoignez-arrow">
                  <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
                    <line
                      x1="10"
                      y1="0"
                      x2="10"
                      y2="20"
                      stroke="#fff600"
                      strokeWidth="2"
                    />
                    <polyline
                      points="4,14 10,22 16,14"
                      fill="none"
                      stroke="#fff600"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
