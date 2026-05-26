import { GraduationCap } from "lucide-react";

export default function FormationsSection() {
  return (
    <section className="formations-section">

      {/* Demi-anneau gauche — dégradé jaune, ouverture vers la droite */}
      <div className="deco-ring deco-ring-left" />

      {/* Demi-anneau droit — gris foncé, ouverture vers la gauche */}
      <div className="deco-ring deco-ring-right" />

      <div className="formations-inner">

        {/* LEFT */}
        <div className="formations-left">

          {/* Badge */}
          <div className="formations-badge">
            <span className="formations-badge-icon">
              <GraduationCap size={28} color="#000" strokeWidth={2} />
            </span>
            <span className="formations-badge-label">Nos formations diplômantes</span>
          </div>

          {/* Title */}
          <h2 className="formations-title">
            Nos formations diplômantes suivies par{" "}
            <span className="formations-title-accent">plus de 100 étudiants.</span>
          </h2>

          {/* Subtitle */}
          <p className="formations-sub">
            Apprenez la visualisation produit, la modélisation et le rendering
            avec des experts du secteur.
          </p>

          {/* CTA */}
          <button className="btn-primary formations-cta">
            <span>Inscription en ligne</span>
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
          </button>

          {/* Mentors */}
          <div className="formations-mentors">
            <div className="mentor-avatars">
              <div className="mentor-avatar">
                <img
                  src="https://i.pravatar.cc/40?img=11"
                  alt="Mentor 1"
                  width={36}
                  height={36}
                />
              </div>
              <div className="mentor-avatar">
                <img
                  src="https://i.pravatar.cc/40?img=23"
                  alt="Mentor 2"
                  width={36}
                  height={36}
                />
              </div>
            </div>
            <p className="mentor-text">
              Un suivi continu par des{" "}
              <strong className="mentor-highlight">experts</strong>
            </p>
          </div>
        </div>

        {/* RIGHT — Vimeo */}
        <div className="formations-right">
          <div className="formations-video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/76979871?autoplay=0&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="formations-video"
              title="Formation 3D"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
