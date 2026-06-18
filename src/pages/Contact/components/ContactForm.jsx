import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import './ContactForm.scss';
import { Link } from 'react-router-dom';
import { supabase } from '../../../utils/supabaseClient';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timer = setTimeout(() => setFormStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const data = new FormData(e.target);
    const formData = {
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      email: data.get('email'),
      company: data.get('company'),
      telegram: data.get('telegram'),
      vertical: data.get('vertical'),
      budget: data.get('budget'),
      message: data.get('message'),
      consent: data.get('consent') === 'on',
    };

    const { error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } else {
      setFormStatus('success');
      e.target.reset();
    }
  };

  return (
    <div className="form-card" data-aos="fade-left">
      <h3>Send Us a Message</h3>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-row-2">
          <div className="fg">
            <label htmlFor="fname">First Name *</label>
            <input type="text" id="fname" name="first_name" required placeholder="John" disabled={formStatus !== 'idle'} />
          </div>
          <div className="fg">
            <label htmlFor="lname">Last Name *</label>
            <input type="text" id="lname" name="last_name" required placeholder="Smith" disabled={formStatus !== 'idle'} />
          </div>
        </div>
        
        <div className="fg">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="john@company.com" disabled={formStatus !== 'idle'} />
        </div>

        <div className="fg">
          <label htmlFor="company">Company / Brand</label>
          <input type="text" id="company" name="company" placeholder="Your company name" disabled={formStatus !== 'idle'} />
        </div>

        <div className="fg">
          <label htmlFor="telegram">Telegram / Skype Handle</label>
          <input type="text" id="telegram" name="telegram" placeholder="@yourusername" disabled={formStatus !== 'idle'} />
        </div>

        <div className="fg">
          <label htmlFor="vertical">Vertical / Niche *</label>
          <select id="vertical" name="vertical" required defaultValue="" disabled={formStatus !== 'idle'}>
            <option value="" disabled>Select a vertical…</option>
            <option value="dating">Dating</option>
            <option value="nutra">Nutra / Health & Beauty</option>
            <option value="gambling">Gambling / Casino</option>
            <option value="igaming">iGaming / Betting</option>
            <option value="sweepstakes">Sweepstakes</option>
            <option value="adult">Adult</option>
            <option value="crypto">Crypto Offers</option>
            <option value="mainstream">Mainstream / Other</option>
          </select>
        </div>

        <div className="fg">
          <label htmlFor="budget">Monthly Budget (USD)</label>
          <select id="budget" name="budget" defaultValue="" disabled={formStatus !== 'idle'}>
            <option value="" disabled>Select budget range…</option>
            <option value="under5k">Under $5,000</option>
            <option value="5k-20k">$5,000 – $20,000</option>
            <option value="20k-50k">$20,000 – $50,000</option>
            <option value="50k-100k">$50,000 – $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
        </div>

        <div className="fg">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required placeholder="Tell us about your offer, goals, GEOs and any other details..." disabled={formStatus !== 'idle'}></textarea>
        </div>

        <div className="fg consent-group">
          <input type="checkbox" id="consent" name="consent" required disabled={formStatus !== 'idle'} />
          <label htmlFor="consent">
            I agree to the <Link to="/privacy" target="_blank">Privacy Policy</Link> and <Link to="/terms" target="_blank">Terms of Service</Link>. I consent to Rhine Media processing my data to respond to this enquiry.
          </label>
        </div>

        {formStatus === 'idle' && (
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7.5 1.5L13 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {formStatus === 'sending' && (
          <button type="button" className="btn btn-primary submit-btn" disabled>
            Sending…
          </button>
        )}

        {formStatus === 'success' && (
          <div className="success-msg show">
            <CheckCircle size={28} className="status-icon" /> Your message has been sent! We'll get back to you within 2–4 business hours.
          </div>
        )}

        {formStatus === 'error' && (
          <div className="error-msg show">
            <AlertCircle size={28} className="status-icon" /> Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
