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
import MantineThemeProvider from './theme';

import messages_en from "../compiled-lang/en.json";
import messages_fr from "../compiled-lang/fr.json";
import { IntlProvider } from 'react-intl';
import { useLanguageContext } from './contexts/LanguageContext';

const messages = {
  'En': messages_en,
  'Fr': messages_fr
};

function App() {
  const { selectedLabel } = useLanguageContext();
  const translatedMessages = messages[selectedLabel as 'En' | 'Fr'];

  return (
      <IntlProvider locale={navigator.language} messages={translatedMessages}>
        <MantineThemeProvider>
          <HeaderResponsive links={headerAttributes.props.links} />
          <HeroContentLeft />
          <FeaturesImages supTitle={featureAttributes.props.supTitle} description={featureAttributes.props.description} data={featureAttributes.props.data} />
          <LeadGrid />
          <CardsCarousel />
          <EmailBanner />
          <HeroTitle />
          <FooterLinks data={footerAttributes.props.data} />
        </MantineThemeProvider>
      </IntlProvider>
  );
}

export default App;

