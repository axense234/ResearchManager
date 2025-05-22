// React
import { FC } from "react";
// SCSS
import profilePageStyles from "@/scss/components/page/profile/ProfilePage.module.scss";
// Components
import ProfileDescription from "./description/ProfileDescription";
import Footer from "@/components/layout/footer/Footer";
import ProfileActivityFeed from "./ProfileActivityFeed";
import ProfileGeneralStatistics from "./statistics/ProfileGeneralStatistics";
import EntityResearchActivities from "@/components/shared/entity/EntityResearchActivities";
import EntityResearchPhases from "@/components/shared/entity/EntityResearchPhases";

const ProfilePage: FC = () => {
  return (
    <section className={profilePageStyles.profilePageContainer}>
      <ProfileDescription />
      <EntityResearchActivities pageType="profile" />
      <EntityResearchPhases pageType="profile" />
      <ProfileActivityFeed />
      <ProfileGeneralStatistics />
      <Footer />
    </section>
  );
};

export default ProfilePage;
