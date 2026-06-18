import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './ContactFaq.scss';
import content from '../../../data/content.json';



const ContactFaq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <div className="eyebrow text-gold">&mdash; FAQ</div>
          <h2 className="sec-title">Common <span className="text-gold">Questions</span></h2>
          <p className="sec-sub">Everything you need to know before starting a cooperation with Rhine Media.</p>
        </div>

        <div className="faq-list">
          {content.faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openFaq === faq.id ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggleFaq(faq.id)}>
                {faq.q}
                <span className="faq-arrow"><ChevronDown size={20} /></span>
              </button>
              <div className="faq-a">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
