// Interfaces
import { FC } from "react";
// SCSS
import homeRankingsStyles from "@/scss/components/page/home/HomeRankings.module.scss";
// Data
import { homeRankingsDescription } from "@/data/static";
// Components
import HomeRankingsList from "./HomeRankingsList";

const HomeRankings: FC = () => {
  return (
    <section className={homeRankingsStyles.homeRankingsContainer}>
      <div className={homeRankingsStyles.homeRankingsDetails}>
        <h3>Research Points Rankings</h3>
        <p>{homeRankingsDescription}</p>
      </div>
      <HomeRankingsList />
    </section>
  );
};

export default HomeRankings;
