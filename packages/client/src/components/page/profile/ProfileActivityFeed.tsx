// React
import { FC } from "react";
// Components
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
import EntityActivityFeed from "@/components/shared/entity/feed/EntityActivityFeed";
// Data
import { profileActivityFeedData } from "@/data/general/profile";
// SCSS
import profileActivityFeedStyles from "@/scss/components/page/profile/ProfileActivityFeed.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectUserProfile } from "@/redux/slices/general";

const ProfileActivityFeed: FC = () => {
  const userProfile = useAppSelector(selectUserProfile);

  console.log(JSON.parse(JSON.stringify(userProfile)));

  return (
    <section className={profileActivityFeedStyles.sectionContainer}>
      <PageSectionTitle {...profileActivityFeedData} />
      <EntityActivityFeed activityDaysIds={["1", "2"]} />
    </section>
  );
};

export default ProfileActivityFeed;
