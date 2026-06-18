import { Send, Mail, Briefcase, Zap } from 'lucide-react';
import './ContactInfo.scss';

const ContactInfo = () => {
  return (
    <div className="contact-intro" data-aos="fade-right">
      <h3>Let's Build Something<br/><span className="text-gold">Profitable Together</span></h3>
      <p className="intro-desc">
        Whether you're an advertiser looking to scale your offers, an affiliate network seeking a reliable buying team, or a brand ready to expand globally — we want to hear from you.
      </p>

      <div className="cinfo-list">
        <div className="cinfo-item">
          <div className="cinfo-ico"><Send size={24} strokeWidth={1.5} /></div>
          <div className="cinfo-text">
            <h4>Telegram</h4>
            <a href="https://t.me/rhinemedia" target="_blank" rel="noopener noreferrer">@rhinemedia</a>
          </div>
        </div>
        <div className="cinfo-item">
          <div className="cinfo-ico"><Mail size={24} strokeWidth={1.5} /></div>
          <div className="cinfo-text">
            <h4>Email</h4>
            <a href="mailto:hello@rhine-media.com">hello@rhine-media.com</a>
          </div>
        </div>
        <div className="cinfo-item">
          <div className="cinfo-ico"><Briefcase size={24} strokeWidth={1.5} /></div>
          <div className="cinfo-text">
            <h4>Business Hours</h4>
            <p>Mon – Fri · 09:00 – 20:00 CET</p>
          </div>
        </div>
        <div className="cinfo-item">
          <div className="cinfo-ico"><Zap size={24} strokeWidth={1.5} /></div>
          <div className="cinfo-text">
            <h4>Response Time</h4>
            <p>Typically within 2–4 business hours</p>
          </div>
        </div>
      </div>

      <p className="available-lbl">Also available on</p>
      <div className="available-tags">
        <span className="btn btn-ghost tag">Skype</span>
        <span className="btn btn-ghost tag">WhatsApp</span>
        <span className="btn btn-ghost tag">LinkedIn</span>
      </div>

      <div className="map-stub-grid">
        <div className="map-stub-grid-inner"></div>
        <div className="map-stub-label">
          <div className="map-stub-pin"></div>
          <span>Rhine Media · Global Operations</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
