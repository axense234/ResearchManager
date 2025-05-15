// React
import { FC } from "react";
// SCSS
import profileGeneralStatisticsStyles from "@/scss/components/page/profile/statistics/ProfileGeneralStatistics.module.scss";
// Data
import { profileGeneralStatistics } from "@/data/general/profile";
// Components
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
import ProfileGeneralStatisticsContent from "./ProfileGeneralStatisticsContent";

const ProfileGeneralStatistics: FC = () => {
  return (
    <section className={profileGeneralStatisticsStyles.sectionContainer}>
      <PageSectionTitle {...profileGeneralStatistics} />
      <ProfileGeneralStatisticsContent />
    </section>
  );
};

export default ProfileGeneralStatistics;
