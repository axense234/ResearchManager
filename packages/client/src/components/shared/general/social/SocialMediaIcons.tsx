// Interfaces
import { FC } from "react";
// SCSS
import socialMediaIconsStyles from "@/scss/components/shared/general/social/SocialMediaIcons.module.scss";
// Data
import { socialMediaIcons } from "@/data/general/components";
// Components
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaIcons: FC = () => {
  return (
    <ul className={socialMediaIconsStyles.socialMediaIconsContainer}>
      {socialMediaIcons.map((socialMediaIcon) => {
        return (
          <li key={socialMediaIcon.id}>
            <SocialMediaIcon {...socialMediaIcon} />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaIcons;
