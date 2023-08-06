import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderResponsive } from "../components/HeaderResponsive/HeaderResponsive";
import { HeroContentLeft } from "../components/HeroContentLeft/HeroContentLeft";
import { HeroTitle } from "../components/HeroTitle/HeroTitle";
import headerAttributes from '../components/HeaderResponsive/attributes.json';
import footerAttributes from '../components/FooterLinks/attributes.json';

function RoomsPage() {
    return (
        <>
            <HeaderResponsive links={headerAttributes.props.links} />
            <HeroContentLeft />
            <HeroTitle />
            <FooterLinks data={footerAttributes.props.data} />
        </>
    );
}

export default RoomsPage;

