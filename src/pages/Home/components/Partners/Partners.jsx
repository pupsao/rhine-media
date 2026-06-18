
import { Icons } from '../../../../data/icons';
import content from '../../../../data/content.json';
import './Partners.scss';


const Partners = () => {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="eyebrow text-gold">&mdash; Trusted Partners & Networks</div>
          <h2 className="sec-title">Working with the <span className="text-gold">Best in Class</span></h2>
          <p className="sec-sub">We maintain direct relationships with premium ad networks, affiliate networks and CPA platforms worldwide.</p>
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">

          {content.partnerChips.map((chip) => {
            const Icon = Icons[chip.iconName];
            return (
              <div key={`set1-${chip.id}`} className="p-chip">
                <div className="p-chip-ico">{Icon && <Icon size={20} strokeWidth={1.5} />}</div>
                <span className="p-chip-name">{chip.name}</span>
              </div>
            );
          })}

          {content.partnerChips.map((chip) => {
            const Icon = Icons[chip.iconName];
            return (
              <div key={`set2-${chip.id}`} className="p-chip">
                <div className="p-chip-ico">{Icon && <Icon size={20} strokeWidth={1.5} />}</div>
                <span className="p-chip-name">{chip.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
