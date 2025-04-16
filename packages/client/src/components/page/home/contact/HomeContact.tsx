// Interfaces
import { FC } from "react";
// SCSS
import homeContactStyles from "@/scss/components/page/home/contact/HomeContact.module.scss";
// Data
import { homeContactData } from "@/data/general/home";
// Components
import HomeContactFeedback from "./HomeContactFeedback";
import HomeContactOptions from "./HomeContactOptions";
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";

const HomeContact: FC = () => {
  return (
    <section className={homeContactStyles.homeContactContainer} id="contact">
      <PageSectionTitle
        title={homeContactData.title}
        description={homeContactData.description}
      />
      <div className={homeContactStyles.homeContactContent}>
        <HomeContactFeedback />
        <HomeContactOptions />
      </div>
    </section>
  );
};

export default HomeContact;
