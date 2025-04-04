// Interface
import { FC } from "react";
// Components
import SocialMediaIcons from "@/components/shared/general/SocialMediaIcons";
// SCSS
import homeContactDirectOptionsStyles from "@/scss/components/page/home/contact/HomeContactDirectOptions.module.scss";
// Data
import { homeContactEmail, homeContactPhoneNumber } from "@/data/static";

const HomeContactDirectOptions: FC = () => {
  return (
    <div
      className={
        homeContactDirectOptionsStyles.homeContactDirectOptionsContainer
      }
    >
      <div
        className={homeContactDirectOptionsStyles.homeContactDirectOptionsEmail}
      >
        <h5>Email</h5>
        <p>{homeContactEmail}</p>
      </div>
      <div
        className={
          homeContactDirectOptionsStyles.homeContactDirectOptionsPhoneNumber
        }
      >
        <h5>Phone Number</h5>
        <p>{homeContactPhoneNumber}</p>
      </div>
      <SocialMediaIcons />
    </div>
  );
};

export default HomeContactDirectOptions;
