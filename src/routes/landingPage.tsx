import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderResponsive } from "../components/HeaderResponsive/HeaderResponsive";
import { HeroContentLeft } from "../components/HeroContentLeft/HeroContentLeft";
import headerAttributes from '../components/HeaderResponsive/attributes.json';
import footerAttributes from '../components/FooterLinks/attributes.json';
import { ServicesWrapper } from "../components/ServicesPreview/ServicesWrapper";

function LandingPage() {
    return (
        <>
            <HeaderResponsive links={headerAttributes.props.links} />
            <HeroContentLeft />
            <ServicesWrapper />
            <FooterLinks data={footerAttributes.props.data} />
        </>
    );
}

export default LandingPage;

