"use client";

import "./LuxeSection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LuxeSection() {
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
    <section className="luxe-section">
      {/* Demi-cercle jaune déco droite */}
      <div className="luxe-deco-ring" />
      <div className="luxe-inner">
        {/* LEFT — Vidéo mobile */}
        <div className="luxe-left">
          <div className="luxe-video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1185498626?h=03b0983575&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="luxe-video"
              title="Luxe Section"
            />
          </div>
        </div>

        {/* RIGHT — Texte */}
        <div className="luxe-right">
          {/* Badge */}
          <p className="luxe-badge">
            <span ref={badgeRef} className="luxe-badge-highlight">
              FORMER POUR LE LUXE
            </span>
          </p>

          {/* Titre */}
          <h2 className="luxe-title">
            Une spécialisation au c&oelig;ur de l&apos;industrie du luxe
          </h2>

          {/* Corps */}
          <div className="luxe-body">
            <p>
              La 3D haut de gamme est aujourd&apos;hui largement portée par les
              secteurs du <strong>luxe</strong> et de la beauté : cosmétique,
              parfum, mode, horlogerie ou joaillerie.
              <br />
              <br />
              Ces industries produisent en continu des contenus visuels
              exigeants pour leurs <strong>campagnes mondiales</strong>.
            </p>

            <p>
              <span className="luxe-underline">
                Dans cet environnement, les standards sont très élevés&nbsp;:
              </span>
            </p>

            <ul className="luxe-list">
              <li>Qualité visuelle irréprochable</li>
              <li>Exigence permanente de rendu</li>
              <li>Production de contenus publicitaires premium</li>
            </ul>

            <p>
              Se former dans cet univers, c&apos;est apprendre directement aux
              standards des plus grandes marques et comprendre les codes visuels
              qui définissent l&apos;industrie.
            </p>

            <button className="luxe-cta">
              <strong>Découvrir le programme</strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
