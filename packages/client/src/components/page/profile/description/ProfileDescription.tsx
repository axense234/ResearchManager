// Interfaces
import { FC } from "react";
// SCSS
import profileDescriptionStyles from "@/scss/components/page/profile/description/ProfileDescription.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectUserProfile } from "@/redux/slices/general";
// Components
import ProfileDescriptionDetails from "./ProfileDescriptionDetails";

const ProfileDescription: FC = () => {
  const profile = useAppSelector(selectUserProfile);

  console.log("profile full:", JSON.parse(JSON.stringify(profile)));

  return (
    <section className={profileDescriptionStyles.profileDescriptionContainer}>
      <ProfileDescriptionDetails profile={profile} />
    </section>
  );
};

export default ProfileDescription;
