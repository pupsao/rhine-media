import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../../utils/supabaseClient';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = {
      first_name: document.getElementById('fname').value,
      last_name: document.getElementById('lname').value,
      email: document.getElementById('email').value,
      company: document.getElementById('company').value,
      telegram: document.getElementById('telegram').value,
      vertical: document.getElementById('vertical').value,
      budget: document.getElementById('budget').value,
      message: document.getElementById('message').value,
    };

    const { error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
      setFormStatus('idle');
    } else {
      setFormStatus('success');
      document.getElementById('contactForm').reset();
    }
  };

  return (
    <div className="form-card">
      <h3>Send Us a Message</h3>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-row-2">
          <div className="fg">
            <label htmlFor="fname">First Name *</label>
            <input type="text" id="fname" required placeholder="John" disabled={formStatus !== 'idle'} />
          </div>
          <div className="fg">
            <label htmlFor="lname">Last Name *</label>
            <input type="text" id="lname" required placeholder="Smith" disabled={formStatus !== 'idle'} />
          </div>
        </div>
        
        <div className="fg">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" required placeholder="john@company.com" disabled={formStatus !== 'idle'} />
        </div>

        <div className="fg">
          <label htmlFor="company">Company / Brand</label>
          <input type="text" id="company" placeholder="Your company name" disabled={formStatus !== 'idle'} />
        </div>

        <div className="fg">
          <label htmlFor="telegram">Telegram / Skype Handle</label>
          <input type="text" id="telegram" placeholder="@yourusername" disabled={formStatus !== 'idle'} />
        </div>

        <div className="fg">
          <label htmlFor="vertical">Vertical / Niche *</label>
          <select id="vertical" required defaultValue="" disabled={formStatus !== 'idle'}>
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
          <select id="budget" defaultValue="" disabled={formStatus !== 'idle'}>
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
          <textarea id="message" required placeholder="Tell us about your offer, goals, GEOs and any other details..." disabled={formStatus !== 'idle'}></textarea>
        </div>

        <div className="fg consent-group">
          <input type="checkbox" id="consent" required disabled={formStatus !== 'idle'} />
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
            <CheckCircle size={20} style={{ marginRight: '8px' }} /> Your message has been sent! We'll get back to you within 2–4 business hours.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
