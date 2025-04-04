// Interfaces
import { FC } from "react";
// Components
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBar from "./FooterBar";
// SCSS
import footerStyles from "@/scss/components/layout/footer/Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <FooterLinks />
      <FooterContact />
      <FooterBar />
    </footer>
  );
};

export default Footer;
