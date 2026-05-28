import Fireflies from "./components/Fireflies";
import Counters from "./components/Counters";
import FormationsSection from "./components/FormationsSection";
import WhyTendrillSection from "./components/WhyTendrillSection";
import LuxeSection from "./components/LuxeSection";
import AproposSection from "./components/AproposSection";
import ObjectifSection from "./components/ObjectifSection";
import RejoignezSection from "./components/RejoignezSection";
import NosFormationsSection from "./components/NosFormationsSection";
import BrochureBanner from "./components/BrochureBanner";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ position: "relative" }}>
        <Fireflies />
        <div className="hero-ring hero-ring-bl" />
        <div className="hero-ring hero-ring-br" />
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">
              La plateforme de référence pour la 3D dans l&apos;industrie du
              luxe
            </h1>
            <p className="hero-sub">
              Apprenez la visualisation produit, la modélisation et le rendering
              avec des experts du secteur.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                <span>Inscription en ligne</span>
                <span className="btn-arrow">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn-ghost">Nos formations</button>
            </div>

            <p className="hero-partner">
              Partenaire officiel de{" "}
              <a
                href="https://mangproduction.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-partner-link"
              >
                Mang Production
              </a>
            </p>

            <Counters />
          </div>
          <div className="hero-right">
            <div className="hero-placeholder" />
          </div>
        </div>
      </section>
      <WhyTendrillSection />
      <LuxeSection />
      <AproposSection />
      <ObjectifSection />
      <RejoignezSection />
      <NosFormationsSection />
      <FormationsSection />
      <BrochureBanner />
      <FaqSection />
    </main>
  );
}
