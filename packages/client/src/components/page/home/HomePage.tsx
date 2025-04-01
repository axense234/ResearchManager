// Interfaces
import { FC } from "react";
// SCSS
import homePageStyles from "@/scss/components/page/home/HomePage.module.scss";
// Components
import HomeIntro from "./HomeIntro";
import HomeExamples from "./HomeExamples";
import HomeRankings from "./HomeRankings";
import HomeContact from "./HomeContact";
import HomeAbout from "./about/HomeAbout";

const HomePage: FC = () => {
  return (
    <section className={homePageStyles.homePageContainer}>
      <HomeIntro />
      <HomeExamples />
      <HomeRankings />
      <HomeContact />
      <HomeAbout />
    </section>
  );
};

export default HomePage;
