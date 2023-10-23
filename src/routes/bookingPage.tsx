import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderResponsive } from "../components/HeaderResponsive/HeaderResponsive";
import headerAttributes from '../components/HeaderResponsive/attributes.json';
import footerAttributes from '../components/FooterLinks/attributes.json';
import { PersonalData } from "../components/Booking/PersonalData";

function BookingPage() {
    return (
        <>
            <HeaderResponsive links={headerAttributes.props.links} />
            <PersonalData />
            <FooterLinks data={footerAttributes.props.data} />
        </>
    );
}

export default BookingPage;

