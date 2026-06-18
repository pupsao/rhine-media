
import HeroSection from './components/HeroSection/HeroSection';
import StatsBand from './components/StatsBand/StatsBand';
import PortfolioGrid from './components/PortfolioGrid/PortfolioGrid';
import TrafficSources from './components/TrafficSources/TrafficSources';
import Partners from './components/Partners/Partners';
import Features from './components/Features/Features';
import CTA from './components/CTA/CTA';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <StatsBand />
      <PortfolioGrid />
      <TrafficSources />
      <Partners />
      <Features />
      <CTA />
    </main>
  );
};

export default Home;
