// Interface
import { FC } from "react";
// Components
import SocialMediaIcons from "@/components/shared/general/social/SocialMediaIcons";
import HomeContactOption from "./HomeContactOption";
// SCSS
import homeContactOptionsStyles from "@/scss/components/page/home/contact/HomeContactOptions.module.scss";
// Data
import {
  homeContactEmailData,
  homeContactPhoneNumberData,
} from "@/data/general/home";

const HomeContactOptions: FC = () => {
  return (
    <div className={homeContactOptionsStyles.homeContactOptionsContainer}>
      <HomeContactOption {...homeContactEmailData} />
      <HomeContactOption {...homeContactPhoneNumberData} />
      <SocialMediaIcons />
    </div>
  );
};

export default HomeContactOptions;
