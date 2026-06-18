
import { Icons } from '../../../../data/icons';
import content from '../../../../data/content.json';
import './Features.scss';




const Features = () => {
  return (
    <section className="features" id="why-us">
      <div className="container">
        <div className="feat-layout">

          <div className="feat-content" data-aos="fade-right">
            <div className="eyebrow text-gold">&mdash; Why Choose Rhine Media</div>
            <h2 className="sec-title">
              Precision. Scale.<br/><span className="text-gold">Performance.</span>
            </h2>
            <p className="sec-sub">
              We're not a media network — we're your in-house buying team. Deep expertise, real accountability and transparent reporting on every dollar spent.
            </p>

            <div className="check-list">
              {content.checklistItems.map(item => (
                <div key={item.id} className="check-item">
                  <div className="chk"><Icons.Check size={16} strokeWidth={1.2} /></div>
                  <div className="chk-body">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="feat-cards">
            {content.featureCards.map((card, idx) => {
              const Icon = Icons[card.iconName];
              return (
                <div key={card.id} className="fc" data-aos="fade-left" data-aos-delay={idx * 150}>
                  <div className="fc-ico">{Icon && <Icon size={32} strokeWidth={1.5} />}</div>
                  <h4 className="fc-title">{card.title}</h4>
                  <p className="fc-body">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
