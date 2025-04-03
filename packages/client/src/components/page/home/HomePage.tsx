"use client";

// Interfaces
import { FC, useEffect } from "react";
// SCSS
import homePageStyles from "@/scss/components/page/home/HomePage.module.scss";
// Components
import HomeIntro from "./HomeIntro";
import HomeExamples from "./HomeExamples";
import HomeRankings from "./HomeRankings";
import HomeContact from "./HomeContact";
import HomeAbout from "./about/HomeAbout";
import { useAppSelector } from "@/hooks";
import {
  selectLoadingGetProfileOAuth,
  selectUserProfile,
} from "@/redux/slices/general";

const HomePage: FC = () => {
  const profile = useAppSelector(selectUserProfile);
  const loadingGetProfileOAuth = useAppSelector(selectLoadingGetProfileOAuth);

  useEffect(() => {
    console.log("profile full", JSON.parse(JSON.stringify(profile)));
  }, [profile, loadingGetProfileOAuth]);

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
