// Interfaces
import { SocialMediaIconProps } from "@/core/interfaces";
import { FC } from "react";
// Data
import { socialMediaIconReservedDimensions } from "@/data/general/components";
// Next
import Link from "next/link";
import Image from "next/image";
// SCSS
import socialMediaIconStyles from "@/scss/components/shared/general/social/SocialMediaIcon.module.scss";

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
      className={socialMediaIconStyles.socialMediaIcon}
    >
      <Image
        src={linkIconUrl}
        alt={linkTitle}
        width={socialMediaIconReservedDimensions || 40}
        height={socialMediaIconReservedDimensions || 40}
      />
    </Link>
  );
};

export default SocialMediaIcon;
