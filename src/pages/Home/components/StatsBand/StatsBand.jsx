
import content from '../../../../data/content.json';
import './StatsBand.scss';

const StatsBand = () => {
  return (
    <div className="stats-band">
      <div className="container">
        <div className="stats-row">
          {content.statsBand.map((stat, idx) => (
            <div key={idx} className="stat-cell" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="stat-num text-gold">{stat.value}</div>
              <div className="stat-lbl">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBand;
