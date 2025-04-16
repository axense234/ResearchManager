// Interfaces
import { FC } from "react";
// Data
import { homeAboutTechnologiesData } from "@/data/general/home";
import {
  homeAboutFrontendTechnologies,
  homeAboutBackendTechnologies,
  homeAboutCloudServices,
  homeAboutOtherTechnologies,
} from "@/data/general/about";
// SCSS
import homeAboutTechnologiesStyles from "@/scss/components/page/home/about/technology/HomeAboutTechnologies.module.scss";
// Components
import HomeAboutTechnologySection from "./HomeAboutTechnologySection";
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";

const HomeAboutTechnologies: FC = () => {
  return (
    <section
      className={homeAboutTechnologiesStyles.homeAboutTechnologiesContainer}
    >
      <PageSectionTitle
        title={homeAboutTechnologiesData.title}
        description={homeAboutTechnologiesData.description}
      />
      <HomeAboutTechnologySection
        title="Frontend Technologies"
        technologies={homeAboutFrontendTechnologies}
      />
      <HomeAboutTechnologySection
        title="Backend Technologies"
        technologies={homeAboutBackendTechnologies}
      />
      <HomeAboutTechnologySection
        title="Cloud Services"
        technologies={homeAboutCloudServices}
      />
      <HomeAboutTechnologySection
        title="Other Technologies"
        technologies={homeAboutOtherTechnologies}
      />
    </section>
  );
};

export default HomeAboutTechnologies;
