// Interfaces
import { FC } from "react";
import { ProfileDescriptionInfoProps } from "@/core/interfaces";
// SCSS
import profileDescriptionInfoStyles from "@/scss/components/page/profile/description/ProfileDescriptionInfo.module.scss";

const ProfileDescriptionInfo: FC<ProfileDescriptionInfoProps> = ({
  profile,
}) => {
  return (
    <div
      className={profileDescriptionInfoStyles.profileDescriptionInfoContainer}
    >
      <h5>{profile.username}</h5>
      <div className={profileDescriptionInfoStyles.profileDescriptionInfoEmail}>
        <p>{profile.email}</p>
      </div>
    </div>
  );
};

export default ProfileDescriptionInfo;
