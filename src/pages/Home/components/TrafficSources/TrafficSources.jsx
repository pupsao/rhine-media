
import { Icons } from '../../../../data/icons';
import content from '../../../../data/content.json';
import './TrafficSources.scss';



const TrafficSources = () => {
  return (
    <section className="traffic" id="traffic">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="eyebrow text-gold">&mdash; Traffic Sources We Master</div>
          <h2 className="sec-title">Every Major <span className="text-blue">Channel</span></h2>
          <p className="sec-sub">Full-stack traffic expertise across paid, native, push and programmatic channels worldwide.</p>
        </div>

        <div className="src-grid">
          {content.trafficSources.map((src, idx) => {
            const Icon = Icons[src.iconName];
            return (
              <div key={src.id} className="src-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="src-ico">{Icon && <Icon size={40} strokeWidth={1.2} />}</div>
                <div className="src-name">{src.title}</div>
                <div className="src-sub">{src.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrafficSources;
