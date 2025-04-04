// Interfaces
import { FC } from "react";
// Data
import {
  homeAboutBackendTechnologies,
  homeAboutCloudServices,
  homeAboutFrontendTechnologies,
  homeAboutOtherTechnologies,
  homeAboutTechnologiesDescription,
} from "@/data/static";
// SCSS
import homeAboutTechnologiesStyles from "@/scss/components/page/home/about/HomeAboutTechnologies.module.scss";
// Types
import { AboutTechnologyType } from "@/core/types";
// Next
import Image from "next/image";
import Link from "next/link";

const HomeAboutTechnologies: FC = () => {
  return (
    <section
      className={homeAboutTechnologiesStyles.homeAboutTechnologiesContainer}
    >
      <div className={homeAboutTechnologiesStyles.homeAboutTechnologiesDetails}>
        <h3>Technologies Used</h3>
        <p>{homeAboutTechnologiesDescription}</p>
      </div>
      <div
        className={homeAboutTechnologiesStyles.homeAboutTechnologiesCategory}
      >
        <div
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTitle
          }
        >
          <h5>Frontend Technologies</h5>
          <hr />
        </div>
        <ul
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTechnologies
          }
        >
          {homeAboutFrontendTechnologies.map((technology) => {
            return (
              <HomeAboutTechnology
                {...technology}
                key={technology.technologyLabel}
              />
            );
          })}
        </ul>
      </div>
      <div
        className={homeAboutTechnologiesStyles.homeAboutTechnologiesCategory}
      >
        <div
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTitle
          }
        >
          <h5>Backend Technologies</h5>
          <hr />
        </div>
        <ul
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTechnologies
          }
        >
          {homeAboutBackendTechnologies.map((technology) => {
            return (
              <HomeAboutTechnology
                {...technology}
                key={technology.technologyLabel}
              />
            );
          })}
        </ul>
      </div>
      <div
        className={homeAboutTechnologiesStyles.homeAboutTechnologiesCategory}
      >
        <div
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTitle
          }
        >
          <h5>Cloud Services</h5>
          <hr />
        </div>
        <ul
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTechnologies
          }
        >
          {homeAboutCloudServices.map((technology) => {
            return (
              <HomeAboutTechnology
                {...technology}
                key={technology.technologyLabel}
              />
            );
          })}
        </ul>
      </div>
      <div
        className={homeAboutTechnologiesStyles.homeAboutTechnologiesCategory}
      >
        <div
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTitle
          }
        >
          <h5>Other Technologies</h5>
          <hr />
        </div>
        <ul
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologiesCategoryTechnologies
          }
        >
          {homeAboutOtherTechnologies.map((technology) => {
            return (
              <HomeAboutTechnology
                {...technology}
                key={technology.technologyLabel}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const HomeAboutTechnology: FC<AboutTechnologyType> = ({
  logoUrlSrc,
  technologyDest,
  technologyLabel,
  technologySub,
}) => {
  return (
    <li
      className={homeAboutTechnologiesStyles.homeAboutTechnologyContainer}
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
      <div className={homeAboutTechnologiesStyles.homeAboutTechnologyDetails}>
        <div
          className={
            homeAboutTechnologiesStyles.homeAboutTechnologyDetailsTitle
          }
        >
          <h6>{technologyLabel}</h6>
          <p>{technologySub}</p>
        </div>
        <Link href={technologyDest}>Additional Information</Link>
      </div>
    </li>
  );
};

export default HomeAboutTechnologies;
