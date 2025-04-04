// Interfaces
import { FC } from "react";
// SCSS
import homeContactStyles from "@/scss/components/page/home/HomeContact.module.scss";
// Data
import { homeContactDescription } from "@/data/static";
// Components
import HomeContactFeedback from "./HomeContactFeedback";
import HomeContactDirectOptions from "./HomeContactDirectOptions";

const HomeContact: FC = () => {
  return (
    <section className={homeContactStyles.homeContactContainer}>
      <div className={homeContactStyles.homeContactDetails}>
        <h3>Contact Us</h3>
        <p>{homeContactDescription}</p>
      </div>
      <div className={homeContactStyles.homeContactContent}>
        <HomeContactFeedback />
        <HomeContactDirectOptions />
      </div>
    </section>
  );
};

export default HomeContact;
