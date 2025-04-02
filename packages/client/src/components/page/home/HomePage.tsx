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
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectCreateResearchActivityDto,
  selectLoadingCreateResearchActivity,
} from "@/redux/slices/research/activity";
import { createResearchActivity } from "@/redux/slices/research/activity/thunks";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const loadingCreateResearchActivity = useAppSelector(
    selectLoadingCreateResearchActivity,
  );
  const createResearchActivityDto = useAppSelector(
    selectCreateResearchActivityDto,
  );

  useEffect(() => {
    if (loadingCreateResearchActivity === "IDLE") {
      dispatch(createResearchActivity(createResearchActivityDto));
    }
  }, []);

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
