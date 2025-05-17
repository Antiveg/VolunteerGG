import AboutUsHero from '../components/AboutUsHero';
import AboutUsSDG from '../components/AboutUsSDG';
import AboutUsFeatures from '../components/AboutUsFeatures';
import AffiliatesCarousel from '../components/AffiliatesCarousel';

export default function AboutUs() {
  return (
    <>
        <main>
          <AboutUsHero />
          <AboutUsSDG />
          <AboutUsFeatures />
          <AffiliatesCarousel />
        </main>
    </>
  )
}