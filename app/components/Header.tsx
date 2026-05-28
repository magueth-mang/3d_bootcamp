"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [formationsOpen, setFormationsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setFormationsOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setFormationsOpen(false), 120);
  };

  return (
    <header className="site-header">
      {/* Logo */}
      <div className="header-logo">
        <span className="logo-3d">3D</span>
        <span className="logo-bootcamp"> Bootcamp</span>
      </div>

      {/* Nav */}
      <nav className="header-nav">
        {/* Formations dropdown */}
        <div
          className="nav-item nav-dropdown"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <button className="nav-link nav-link-arrow">
            Formations
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              style={{
                transform: formationsOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {formationsOpen && (
            <div
              className="dropdown-menu"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link href="/formations/novice" className="dropdown-item">
                <span className="dropdown-dot" />
                Bootcamp Novice
              </Link>
              <Link href="/formations/avance" className="dropdown-item">
                <span className="dropdown-dot" />
                Bootcamp Avancé
              </Link>
            </div>
          )}
        </div>

        <Link href="/mentors" className="nav-link">
          Mentors
        </Link>
        <Link href="/a-propos" className="nav-link">
          À propos
        </Link>
      </nav>

      {/* CTA */}
      <Link href="/contact" className="btn-primary header-cta">
        <span>Contact</span>
        <span className="btn-arrow">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </header>
  );
}
