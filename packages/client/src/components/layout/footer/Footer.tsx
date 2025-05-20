// React
import { FC } from "react";
// SCSS
import footerStyles from "@/scss/components/layout/footer/Footer.module.scss";
// Components
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBar from "./FooterBar";

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
