"use client";

import "./ProgramSection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Fondamentaux de la 3D",
    intro: (
      <>
        Une introduction complète à l&apos;<strong>écosystème de la 3D</strong>{" "}
        appliquée au luxe et à la <strong>publicité</strong>.
      </>
    ),
    desc: (
      <>
        Vous apprenez à comprendre les outils, les logiques de production et les
        bases d&apos;un <strong>workflow professionnel</strong>.
      </>
    ),
    list: [
      "Comprendre l'écosystème 3D",
      "Interface et workflow",
      "Navigation et organisation de scène",
    ],
    arrow:
      "→ Une base solide pour évoluer rapidement dans un environnement structuré.",
  },
  {
    num: "02",
    title: "Modélisation produit",
    intro: (
      <>
        Apprenez à concevoir des objets utilisés dans les{" "}
        <strong>campagnes publicitaires</strong>, avec une attention
        particulière portée aux <strong>produits du luxe</strong> et à leurs
        spécificités.
      </>
    ),
    desc: null,
    list: [
      "Hard surface",
      "Objets cosmétiques et packaging",
      "Optimisation des meshes",
    ],
    arrow:
      "→ Développer la capacité à créer des objets crédibles et exploitables.",
  },
  {
    num: "03",
    title: "Lighting & rendu",
    intro: (
      <>
        La lumière devient un outil central pour valoriser un produit et
        construire une <strong>image impactante</strong>, proche des{" "}
        <strong>standards publicitaires</strong>.
      </>
    ),
    desc: null,
    list: ["Lighting studio", "HDRI et environnement", "Rendu photoréaliste"],
    arrow: "→ Produire des visuels au niveau des exigences du marché.",
  },
  {
    num: "04",
    title: "Animation produit",
    intro: (
      <>
        Vous apprenez à mettre en mouvement les objets pour créer des visuels
        dynamiques, pensés pour la <strong>publicité</strong> et la{" "}
        <strong>mise en valeur produit</strong>.
      </>
    ),
    desc: null,
    list: [
      "Animation objet et caméra",
      "Packshot publicitaire",
      "Mise en scène",
    ],
    arrow: "→ Transformer une scène en contenu visuel engageant.",
  },
  {
    num: "05",
    title: "Motion & compositing",
    intro: (
      <>
        Dernière étape du processus : assembler, corriger et finaliser vos
        visuels pour obtenir un rendu <strong>prêt à être diffusé</strong>.
      </>
    ),
    desc: null,
    list: ["Motion design", "Compositing", "Color grading & export"],
    arrow: "→ Passer d'un rendu brut à un visuel final professionnel.",
  },
];

// 3 media variants cycling
const MEDIA_VARIANTS = ["single", "double", "wide"] as const;

export default function ProgramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highlightRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !fillRef.current) return;

    // Progress bar fill on scroll
    gsap.fromTo(
      fillRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Per-step: highlight title + activate dot — triggered when the dot itself reaches center
    stepRefs.current.forEach((step, i) => {
      if (!step) return;
      const hl = highlightRefs.current[i];
      const dot = dotRefs.current[i];

      if (hl && dot) {
        ScrollTrigger.create({
          trigger: dot,
          start: "top center",
          onEnter: () =>
            gsap.to(hl, {
              backgroundSize: "100% 100%",
              duration: 0.7,
              ease: "power2.out",
            }),
          onLeaveBack: () =>
            gsap.to(hl, {
              backgroundSize: "0% 100%",
              duration: 0.4,
              ease: "power2.in",
            }),
        });
      }

      if (dot) {
        ScrollTrigger.create({
          trigger: dot,
          start: "top center",
          onEnter: () =>
            gsap.to(dot, {
              backgroundColor: "#fff600",
              scale: 1.3,
              duration: 0.3,
            }),
          onLeaveBack: () =>
            gsap.to(dot, {
              backgroundColor: "#d0d0d0",
              scale: 1,
              duration: 0.3,
            }),
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="program-section" ref={sectionRef}>
      {/* Deco rings */}
      <div className="program-ring program-ring--tl" />
      <div className="program-ring program-ring--br" />

      <div className="program-layout">
        {/* ── Progress track ── */}
        <div className="program-track">
          <div className="program-track-bg" />
          <div className="program-track-fill" ref={fillRef} />
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="program-track-dot"
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              style={{ top: `calc(${(i / (STEPS.length - 1)) * 100}% )` }}
            />
          ))}
        </div>

        {/* ── Steps ── */}
        <div className="program-steps">
          {STEPS.map((step, i) => {
            const variant = MEDIA_VARIANTS[i % 3];
            return (
              <div
                key={i}
                className="program-step"
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
              >
                {/* Body */}
                <div className="program-step-body">
                  {/* Text — header inside */}
                  <div className="program-step-content">
                    <div className="program-step-header">
                      <h3 className="program-step-title">
                        <span
                          className="program-step-highlight"
                          ref={(el) => {
                            highlightRefs.current[i] = el;
                          }}
                        >
                          {step.title}
                        </span>
                      </h3>
                      <span className="program-step-num">{step.num}</span>
                    </div>
                    <p className="program-step-intro">{step.intro}</p>
                    {step.desc && (
                      <p className="program-step-desc">{step.desc}</p>
                    )}
                    <ul className="program-step-list">
                      {step.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    <p className="program-step-arrow">{step.arrow}</p>
                  </div>

                  {/* Media placeholder — 3 variants */}
                  {variant === "single" && (
                    <div className="program-step-media program-step-media--single" />
                  )}
                  {variant === "double" && (
                    <div className="program-step-media program-step-media--double">
                      <div className="program-step-media-top" />
                      <div className="program-step-media-bot" />
                    </div>
                  )}
                  {variant === "wide" && (
                    <div className="program-step-media program-step-media--wide">
                      <div className="program-step-media-play">▶</div>
                    </div>
                  )}
                </div>

                {i < STEPS.length - 1 && (
                  <div className="program-step-divider" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="program-cta">
        <a href="#" className="program-cta-btn program-cta-btn--primary">
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
        <a href="#" className="program-cta-btn program-cta-btn--outline">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          Inscription
        </a>
      </div>
    </section>
  );
}
