import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderResponsive } from "../components/HeaderResponsive/HeaderResponsive";
import headerAttributes from '../components/HeaderResponsive/attributes.json';
import footerAttributes from '../components/FooterLinks/attributes.json';
import { ContactUs } from "../components/ContactUs/ContactUs";
import { FaqSimple } from "../components/FaqSimple/FaqSimple";

function ContactFaqPage() {
    return (
        <>
            <HeaderResponsive links={headerAttributes.props.links} />
            <ContactUs />
            <FaqSimple />
            <FooterLinks data={footerAttributes.props.data} />
        </>
    );
}

export default ContactFaqPage;

