// React
import { FC } from "react";
// SCSS
import profilePageStyles from "@/scss/components/page/profile/ProfilePage.module.scss";
// Components
import ProfileDescription from "./description/ProfileDescription";
import ProfileResearchActivities from "./ProfileResearchActivities";
import ProfileResearchPhases from "./ProfileResearchPhases";
import Footer from "@/components/layout/footer/Footer";
import ProfileActivityFeed from "./ProfileActivityFeed";

const ProfilePage: FC = () => {
  return (
    <section className={profilePageStyles.profilePageContainer}>
      <ProfileDescription />
      <ProfileResearchActivities />
      <ProfileResearchPhases />
      <ProfileActivityFeed />
      <Footer />
    </section>
  );
};

export default ProfilePage;
