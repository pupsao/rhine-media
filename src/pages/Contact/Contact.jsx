
import './Contact.scss';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import ContactFaq from './components/ContactFaq';

const Contact = () => {
  return (
    <main className="contact-page">
      <ContactHero />

      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="contact-layout">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactFaq />
    </main>
  );
};

export default Contact;
