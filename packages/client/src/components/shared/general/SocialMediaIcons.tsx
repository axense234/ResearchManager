// Interfaces
import { FC } from "react";
import SocialMediaIconProps from "@/core/interfaces/shared/general/SocialMediaIconsProps";
// SCSS
import socialMediaIconsStyles from "@/scss/components/shared/general/SocialMediaIcons.module.scss";
// Data
import {
  socialMediaIconReservedDimensions,
  socialMediaIcons,
} from "@/data/static";
// Next
import Link from "next/link";
import Image from "next/image";

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

const SocialMediaIcon: FC<SocialMediaIconProps> = ({
  linkDest,
  linkIconUrl,
  linkTitle,
}) => {
  return (
    <Link
      href={linkDest}
      title={linkTitle}
      aria-label={linkTitle}
      className={socialMediaIconsStyles.socialMediaIcon}
    >
      <Image
        src={linkIconUrl}
        alt={linkTitle}
        width={socialMediaIconReservedDimensions}
        height={socialMediaIconReservedDimensions}
      />
    </Link>
  );
};

export default SocialMediaIcons;
