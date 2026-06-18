
import content from '../../../../data/content.json';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="orb orb-a"></div>
      <div className="orb orb-b"></div>
      <div className="orb orb-c"></div>

      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Performance Media Buying Team
          </div>

          <h1 className="hero-h1">
            <span>Performance Media</span>
            <span>Buying Team | <span className="text-gold">Rhine Media</span></span>
          </h1>

          <p className="hero-sub">
            We buy traffic for <strong>Dating, Nutra, Gambling, Sweepstakes, iGaming</strong> and more —
            across all major channels, in every major GEO, at premium scale.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start Cooperation
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M1 6.5h11M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>

          <div className="hero-kpis">
            {content.heroKpis.map((kpi, idx) => (
              <div key={idx} className="kpi">
                <span className="kpi-v text-gold">{kpi.value}</span>
                <span className="kpi-l">{kpi.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
