"use client";
// React
import { FC } from "react";
// SCSS
import homePageStyles from "@/scss/components/page/home/HomePage.module.scss";
// Components
import HomeIntro from "./HomeIntro";
import HomeExamples from "./examples/HomeExamples";
import HomeRankings from "./rankings/HomeRankings";
import HomeContact from "./contact/HomeContact";
import HomeAbout from "./about/HomeAbout";
import Footer from "@/components/layout/footer/Footer";

const HomePage: FC = () => {
  return (
    <section className={homePageStyles.homePageContainer}>
      <HomeIntro />
      <HomeExamples />
      <HomeRankings />
      <HomeContact />
      <HomeAbout />
      <Footer />
    </section>
  );
};

export default HomePage;
