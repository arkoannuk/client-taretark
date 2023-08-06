import { CardsCarousel } from "../components/CardsCarousel/CardsCarousel";
import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderResponsive } from "../components/HeaderResponsive/HeaderResponsive";
import { LeadGrid } from "../components/LeadGrid/LeadGrid";
import headerAttributes from '../components/HeaderResponsive/attributes.json';
import footerAttributes from '../components/FooterLinks/attributes.json';

function BookingPage() {
    return (
        <>
            <HeaderResponsive links={headerAttributes.props.links} />
            <CardsCarousel />
            <LeadGrid />
            <CardsCarousel />
            <FooterLinks data={footerAttributes.props.data} />
        </>
    );
}

export default BookingPage;

