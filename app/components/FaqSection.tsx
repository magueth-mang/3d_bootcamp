"use client";

import "./FaqSection.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Est-ce que je dois déjà savoir utiliser la 3D pour intégrer le bootcamp ?",
    a: "Non. Les bootcamps sont conçus pour accompagner aussi bien les débutants motivés que les profils plus avancés. L'important est votre engagement et votre intérêt pour la création 3D.",
  },
  {
    q: "Comment se déroule la sélection ?",
    a: "L'admission se fait via une candidature en ligne. Votre profil est étudié afin d'évaluer votre motivation et votre cohérence avec l'exigence du programme. Un entretien peut être proposé selon les cas.",
  },
  {
    q: "Combien de temps dure un bootcamp ?",
    a: "Chaque bootcamp dure 4 mois, avec un format intensif et orienté pratique pour garantir une progression rapide et concrète.",
  },
  {
    q: "Quel type de compétences vais-je apprendre ?",
    a: "Vous apprenez la modélisation 3D, le shading, le lighting, le rendu photoréaliste, ainsi que la direction artistique appliquée aux standards du luxe et de la publicité.",
  },
  {
    q: "À quoi ressemblent les projets réalisés ?",
    a: "Les projets sont inspirés de briefs réels issus des industries du luxe et de la publicité : packshots produits, animations 3D, simulations et visuels haut de gamme.",
  },
  {
    q: "Est-ce que je peux travailler après la formation ?",
    a: "Oui. L'objectif est de vous permettre de constituer un portfolio professionnel et d'accéder à des rôles tels que 3D Artist, Motion Designer 3D ou freelance spécialisé.",
  },
  {
    q: "Quelle est la différence avec une école classique ?",
    a: "Contrairement aux parcours longs et généralistes, le bootcamp est intensif, 100% pratique et orienté marché réel, avec une spécialisation directe sur la 3D appliquée au luxe.",
  },
  {
    q: "Est-ce que la formation est à distance ?",
    a: "Oui, les bootcamps sont accessibles en ligne, avec un accompagnement structuré et un suivi pédagogique tout au long du programme.",
  },
];

export default function FaqSection() {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(SVGSVGElement | null)[]>([]);

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

  const toggle = (index: number) => {
    const content = contentRefs.current[index];
    const arrow = arrowRefs.current[index];
    if (!content) return;

    if (openIndex === index) {
      // Fermer
      gsap.to(content, { height: 0, duration: 0.35, ease: "power2.inOut" });
      gsap.to(arrow, { rotation: 0, duration: 0.3, ease: "power2.inOut" });
      setOpenIndex(null);
    } else {
      // Fermer le précédent
      if (openIndex !== null) {
        const prev = contentRefs.current[openIndex];
        const prevArrow = arrowRefs.current[openIndex];
        if (prev)
          gsap.to(prev, { height: 0, duration: 0.3, ease: "power2.inOut" });
        if (prevArrow)
          gsap.to(prevArrow, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
      }
      // Ouvrir le nouveau
      gsap.set(content, { height: "auto" });
      const h = content.offsetHeight;
      gsap.fromTo(
        content,
        { height: 0 },
        { height: h, duration: 0.4, ease: "power2.out" }
      );
      gsap.to(arrow, { rotation: 180, duration: 0.3, ease: "power2.inOut" });
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-deco-ring" />

      <div className="faq-inner">
        {/* Header */}
        <div className="faq-header">
          <p className="faq-badge">
            <span ref={badgeRef} className="faq-badge-highlight">
              FOIRE AUX QUESTIONS
            </span>
          </p>
          <h2 className="faq-title">Questions fréquentes</h2>
        </div>

        {/* Liste FAQ */}
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-question-text">{item.q}</span>
                <svg
                  ref={(el) => {
                    arrowRefs.current[i] = el;
                  }}
                  className="faq-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[i] = el;
                }}
                className="faq-answer"
              >
                <p className="faq-answer-text">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
