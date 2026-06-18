import './LegalHero.scss';

const LegalHero = ({ title, date }) => {
  return (
    <header className="page-hero legal-hero">
      <div className="container">
        <div className="eyebrow">Legal</div>
        <h1>{title}</h1>
        <p>Last updated: {date} — effective immediately</p>
      </div>
    </header>
  );
};

export default LegalHero;
