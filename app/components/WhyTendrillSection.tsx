"use client";

import "./WhyTendrillSection.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  "POURQUOI TENDRIL",
  "PROGRAMMES",
  "PRÉ-REQUIS",
  "BROCHURE",
  "TARIFS",
  "CONTACT",
  "FOIRE AUX QUESTIONS",
];

export default function WhyTendrillSection() {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const [activeNav, setActiveNav] = useState("POURQUOI TENDRIL");
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prevIndexRef = useRef<number>(0);

  // Title highlight on scroll
  useEffect(() => {
    const el = highlightRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { backgroundSize: "0% 100%" },
      {
        backgroundSize: "100% 100%",
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Animate default active item on mount
  useEffect(() => {
    const defaultEl = navRefs.current[0];
    if (!defaultEl) return;
    gsap.fromTo(
      defaultEl,
      { backgroundSize: "0% 100%" },
      {
        backgroundSize: "100% 100%",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, []);

  function handleNavClick(item: string, index: number) {
    if (item === activeNav) return;
    // Reset previous
    const prevEl = navRefs.current[prevIndexRef.current];
    if (prevEl)
      gsap.to(prevEl, {
        backgroundSize: "0% 100%",
        duration: 0.25,
        ease: "power2.in",
      });
    // Animate new
    const nextEl = navRefs.current[index];
    if (nextEl) {
      gsap.fromTo(
        nextEl,
        { backgroundSize: "0% 100%" },
        { backgroundSize: "100% 100%", duration: 0.6, ease: "power2.out" }
      );
    }
    prevIndexRef.current = index;
    setActiveNav(item);
  }

  return (
    <section className="why-section">
      {/* Demi-cercle jaune déco gauche */}
      <div className="why-deco-ring" />

      <div className="why-inner">
        {/* LEFT */}
        <div className="why-left">
          <h2 className="why-title">
            Pourquoi choisir{" "}
            <span ref={highlightRef} className="why-title-highlight">
              Tendrill School
            </span>
            ,<br />
            le bootcamp luxe de référence.
          </h2>
          <p className="why-body">
            Tendrill School est un <strong>bootcamp intensif </strong> né
            d&apos;un studio spécialisé dans le <strong>luxe</strong> et la{" "}
            <strong>publicité</strong>.
          </p>
          <p className="why-body">
            Nous avons conçu cette formation pour répondre à une réalité simple
            : le marché n&apos;a pas besoin de généralistes, mais de profils
            capables de produire des visuels à{" "}
            <strong>forte valeur esthétique</strong> et{" "}
            <strong>commerciale</strong>.
          </p>
          <p className="why-body">
            Notre mission est claire, transformer des passionnés en créateurs
            immédiatement <strong>opérationnels</strong>, capables de répondre
            aux exigences des marques <strong>premium</strong>.
          </p>
        </div>

        {/* RIGHT — Vimeo format mobile */}
        <div className="why-right">
          <div className="why-video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1185498626?h=03b0983575&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="why-video"
              title="Tendrill School"
            />
          </div>
        </div>
      </div>
      {/* Bande de navigation */}
      <nav className="why-nav">
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item}
            ref={(el) => {
              navRefs.current[i] = el;
            }}
            className={`why-nav-item${
              activeNav === item ? " why-nav-item--active" : ""
            }`}
            onClick={() => handleNavClick(item, i)}
          >
            {item}
          </button>
        ))}
      </nav>
    </section>
  );
}
