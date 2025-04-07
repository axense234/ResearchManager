// Interfaces
import { FC } from "react";
import { AboutTechnologyType } from "@/core/types";
// Next
import Link from "next/link";
import Image from "next/image";
// SCSS
import homeAboutTechnologyStyles from "@/scss/components/page/home/about/technology/HomeAboutTechnology.module.scss";

const HomeAboutTechnology: FC<AboutTechnologyType> = ({
  logoUrlSrc,
  technologyDest,
  technologyLabel,
  technologySub,
}) => {
  return (
    <li
      className={homeAboutTechnologyStyles.homeAboutTechnologyContainer}
      title={technologyLabel}
      aria-label={technologyLabel}
    >
      <Image
        width={64}
        height={64}
        alt={technologyLabel}
        src={logoUrlSrc}
        title={`${technologyLabel} Logo`}
        aria-label={`${technologyLabel} Logo`}
      />
      <div className={homeAboutTechnologyStyles.homeAboutTechnologyDetails}>
        <div
          className={homeAboutTechnologyStyles.homeAboutTechnologyDetailsTitle}
        >
          <h6>{technologyLabel}</h6>
          <p>{technologySub}</p>
        </div>
        <Link href={technologyDest}>Additional Information</Link>
      </div>
    </li>
  );
};

export default HomeAboutTechnology;
