
import { Icons } from '../../../../data/icons';
import content from '../../../../data/content.json';
import './PortfolioGrid.scss';



const PortfolioGrid = () => {
  return (
    <section className="portfolio" id="verticals">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="eyebrow text-gold">&mdash; Our Verticals</div>
          <h2 className="sec-title">Niches We <span className="text-gold">Dominate</span></h2>
          <p className="sec-sub">Deep expertise across the highest-performing verticals in performance marketing.</p>
        </div>

        <div className="p-grid">
          {content.portfolioItems.map((item, idx) => {
            const Icon = Icons[item.iconName];
            return (
              <div key={item.id} className="p-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="p-ico">{Icon && <Icon size={28} strokeWidth={1.5} />}</div>
                <h3 className="p-name">{item.title}</h3>
                <p className="p-desc">{item.desc}</p>
                <span className="p-pill">{item.badge}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
