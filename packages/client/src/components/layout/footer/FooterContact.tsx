// Interfaces
import { FC } from "react";
// Data
import { homeContactEmail, homeContactPhoneNumber } from "@/data/static";
// SCSS
import footerContactStyles from "@/scss/components/layout/footer/FooterContact.module.scss";

const FooterContact: FC = () => {
  const footerContactEmail = `Business Email: ${homeContactEmail}`;
  const footerContactPhoneNumber = `Business Phone Number: ${homeContactPhoneNumber}`;

  return (
    <div className={footerContactStyles.footerContactContainer}>
      <p title={footerContactEmail} aria-label={footerContactEmail}>
        {footerContactEmail}
      </p>
      <p title={footerContactPhoneNumber} aria-label={footerContactPhoneNumber}>
        {footerContactPhoneNumber}
      </p>
    </div>
  );
};

export default FooterContact;
