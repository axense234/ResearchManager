// Interface
import { FC } from "react";
// SCSS
import homeAboutInfoStyles from "@/scss/components/page/home/about/HomeAboutInfo.module.scss";
// Data
import { homeAboutInfoDescriptions } from "@/data/static";

const HomeAboutInfo: FC = () => {
  return (
    <section className={homeAboutInfoStyles.homeAboutInfoContainer}>
      <div className={homeAboutInfoStyles.homeAboutInfoDetails}>
        <h3>About</h3>
        <div className={homeAboutInfoStyles.homeAboutInfoDescription}>
          <p>{homeAboutInfoDescriptions[0]}</p>
          <p>{homeAboutInfoDescriptions[1]}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutInfo;
