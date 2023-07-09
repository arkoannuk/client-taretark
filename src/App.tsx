import { HeaderResponsive } from './components/HeaderResponsive/HeaderResponsive';
import headerAttributes from './components/HeaderResponsive/attributes.json';
import { HeroContentLeft } from './components/HeroContentLeft/HeroContentLeft';
import { FeaturesImages } from './components/FeaturesImages/FeaturesImages';
import featureAttributes from './components/FeaturesImages/attributes.json';
import { FooterLinks } from './components/FooterLinks/FooterLinks';
import footerAttributes from './components/FooterLinks/attributes.json';
import { CardsCarousel } from './components/CardsCarousel/CardsCarousel';
import { LeadGrid } from './components/LeadGrid/LeadGrid';
import { HeroTitle } from './components/HeroTitle/HeroTitle';
import { EmailBanner } from './components/EmailBanner/EmailBanner';

function App() {
  return (
    <>
      <HeaderResponsive links={headerAttributes.props.links} />
      <HeroContentLeft />
      <FeaturesImages supTitle={featureAttributes.props.supTitle} description={featureAttributes.props.description} data={featureAttributes.props.data} />
      <LeadGrid />
      <CardsCarousel />
      {/* <Slideshow /> */}
      <EmailBanner />  
      <HeroTitle />
      <FooterLinks data={footerAttributes.props.data} />
    </>
  )
}

export default App
