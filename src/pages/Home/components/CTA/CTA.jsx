
import { Link } from 'react-router-dom';
import './CTA.scss';


const CTA = () => {
  return (
    <section className="cta-sec">
      <div className="container">
        <div className="cta-box" data-aos="fade-down">
          <div className="eyebrow text-gold">&mdash; Let's Scale Together</div>
          <h2>Ready to <span className="text-gold">Maximize</span> Your ROI?</h2>
          <p>
            Join the brands and affiliate partners who trust Rhine Media to deliver performance at scale, in every major GEO.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">
              Start Cooperation
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M1 6.5h11M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
