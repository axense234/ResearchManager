// Interfaces
import { FC } from "react";
// Components
import HomeAboutInfo from "./HomeAboutInfo";
import HomeAboutTechnologies from "./technology/HomeAboutTechnologies";
// SCSS
import homeAboutStyles from "@/scss/components/page/home/about/HomeAbout.module.scss";

const HomeAbout: FC = () => {
  return (
    <section className={homeAboutStyles.homeAboutContainer}>
      <HomeAboutInfo />
      <HomeAboutTechnologies />
    </section>
  );
};

export default HomeAbout;
