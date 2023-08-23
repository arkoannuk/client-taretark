import { CardsCarousel } from "../components/CardsCarousel/CardsCarousel";
import { EmailBanner } from "../components/EmailBanner/EmailBanner";
import { FeaturesImages } from "../components/FeaturesImages/FeaturesImages";
import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderResponsive } from "../components/HeaderResponsive/HeaderResponsive";
import { HeroContentLeft } from "../components/HeroContentLeft/HeroContentLeft";
import { HeroTitle } from "../components/HeroTitle/HeroTitle";
import { LeadGrid } from "../components/LeadGrid/LeadGrid";
import headerAttributes from '../components/HeaderResponsive/attributes.json';
import featureAttributes from '../components/FeaturesImages/attributes.json';
import footerAttributes from '../components/FooterLinks/attributes.json';
import { ServicesWrapper } from "../components/ServicesPreview/ServicesWrapper";

function LandingPage() {
    return (
        <>
            <HeaderResponsive links={headerAttributes.props.links} />
            <HeroContentLeft />
            <ServicesWrapper />
            {/* <FeaturesImages supTitle={featureAttributes.props.supTitle} description={featureAttributes.props.description} data={featureAttributes.props.data} />
            <LeadGrid />
            <CardsCarousel />
            <EmailBanner />
            <HeroTitle /> */}
            <FooterLinks data={footerAttributes.props.data} />
        </>
    );
}

export default LandingPage;

