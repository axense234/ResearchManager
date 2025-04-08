// Interfaces
import { FC } from "react";
// SCSS
import homeRankingsStyles from "@/scss/components/page/home/rankings/HomeRankings.module.scss";
// Data
import { homeRankingsData } from "@/data/general/home";
// Components
import HomeRankingsList from "./HomeRankingsList";
import HomeSectionTitle from "../shared/HomeSectionTitle";

const HomeRankings: FC = () => {
  return (
    <section className={homeRankingsStyles.homeRankingsContainer} id="rankings">
      <HomeSectionTitle
        title={homeRankingsData.title}
        description={homeRankingsData.description}
      />
      <HomeRankingsList />
    </section>
  );
};

export default HomeRankings;
