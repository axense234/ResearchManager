// Interface
import { FC } from "react";
// SCSS
import homeAboutInfoStyles from "@/scss/components/page/home/about/HomeAboutInfo.module.scss";
// Data
import { homeAboutInfoData } from "@/data/general/home";
// Components
import HomeSectionTitle from "../shared/HomeSectionTitle";

const HomeAboutInfo: FC = () => {
  return (
    <section className={homeAboutInfoStyles.homeAboutInfoContainer}>
      <HomeSectionTitle
        title={homeAboutInfoData.title}
        description={homeAboutInfoData.description}
      />
    </section>
  );
};

export default HomeAboutInfo;
