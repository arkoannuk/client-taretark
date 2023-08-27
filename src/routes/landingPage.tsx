import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderResponsive } from "../components/HeaderResponsive/HeaderResponsive";
import { HeroContentLeft } from "../components/HeroContentLeft/HeroContentLeft";
import headerAttributes from '../components/HeaderResponsive/attributes.json';
import footerAttributes from '../components/FooterLinks/attributes.json';
import { ServicesWrapper } from "../components/ServicesPreview/ServicesWrapper";
import { ValueProp1 } from "../components/ValueProp1/ValueProp1";
import { ValueProp2 } from "../components/ValueProp2/ValueProp2";
import { CardsCarousel } from "../components/CardsCarousel/CardsCarousel";
import { ActionCall } from "../components/ActionCall/ActionCall";
import { Leaflet } from "../Leaflet/Leaflet";
import { ValueProp3 } from "../components/ValueProp3/ValueProp3";

function LandingPage() {
    return (
        <>
            <HeaderResponsive links={headerAttributes.props.links} />
            <HeroContentLeft />
            <ServicesWrapper />
            <ValueProp1 />
            <ValueProp2 />
            <ValueProp3 />
            <CardsCarousel />
            <ActionCall />
            <FooterLinks data={footerAttributes.props.data} />
            {/* <Leaflet /> */}
        </>
    );
}

export default LandingPage;

