// React
import { FC } from "react";
// SCSS
import profilePageStyles from "@/scss/components/page/profile/ProfilePage.module.scss";
// Components
import ProfileDescription from "./description/ProfileDescription";
import ProfileResearchActivities from "./ProfileResearchActivities";
import ProfileResearchPhases from "./ProfileResearchPhases";

const ProfilePage: FC = () => {
  return (
    <section className={profilePageStyles.profilePageContainer}>
      <ProfileDescription />
      <ProfileResearchActivities />
      <ProfileResearchPhases />
    </section>
  );
};

export default ProfilePage;
