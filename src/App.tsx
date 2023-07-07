import { HeaderResponsive } from './components/HeaderResponsive/HeaderResponsive';
import headerAttributes from './components/HeaderResponsive/attributes.json';
import { HeroContentLeft } from './components/HeroContentLeft/HeroContentLeft';
import { FeaturesImages } from './components/FeaturesImages/FeaturesImages';
import featureAttributes from './components/FeaturesImages/attributes.json';
import { Slideshow } from './components/Slideshow/Slideshow';
import { FooterLinks } from './components/FooterLinks/FooterLinks';
import footerAttributes from './components/FooterLinks/attributes.json';
import { CardsCarousel } from './components/CardsCarousel/CardsCarousel';
import carouselAttributes from './components/CardsCarousel/attributes.json'

function App() {
  return (
    <>
      <HeaderResponsive links={headerAttributes.props.links} />
      <HeroContentLeft />
      <CardsCarousel />
      <FeaturesImages supTitle={featureAttributes.props.supTitle} description={featureAttributes.props.description} data={featureAttributes.props.data} />
      <Slideshow />
      <FooterLinks data={footerAttributes.props.data} />
    </>
  )
}

export default App
