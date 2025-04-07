// Interfaces
import { FC } from "react";
import { HomeAboutTechnologySectionProps } from "@/core/interfaces";
// SCSS
import homeAboutTechnologySection from "@/scss/components/page/home/about/technology/HomeAboutTechnologySection.module.scss";
// Components
import HomeAboutTechnology from "./HomeAboutTechnology";

const HomeAboutTechnologySection: FC<HomeAboutTechnologySectionProps> = ({
  technologies,
  title,
}) => {
  return (
    <div className={homeAboutTechnologySection.homeAboutTechnologiesSection}>
      <div
        className={homeAboutTechnologySection.homeAboutTechnologiesSectionTitle}
      >
        <h5>{title}</h5>
        <hr />
      </div>
      <ul
        className={
          homeAboutTechnologySection.homeAboutTechnologiesSectionTechnologies
        }
      >
        {technologies.map((technology) => {
          return (
            <HomeAboutTechnology
              {...technology}
              key={technology.technologyLabel}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HomeAboutTechnologySection;
