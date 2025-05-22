// React
import { FC } from "react";
// Interfaces
import { ProfileDescriptionDetailsProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// Components
import ProfileDescriptionInfo from "./ProfileDescriptionInfo";
// SCSS
import profileDescriptionDetailsStyles from "@/scss/components/page/profile/description/ProfileDescriptionDetails.module.scss";

const ProfileDescriptionDetails: FC<ProfileDescriptionDetailsProps> = ({
  profile,
}) => {
  return (
    <div
      className={
        profileDescriptionDetailsStyles.profileDescriptionDetailsContainer
      }
    >
      <Image
        alt={`${profile.username} Profile Picture`}
        title={`${profile.username} Profile Picture`}
        aria-label={`${profile.username} Profile Picture`}
        src={profile.profileImageSrc}
        width={100}
        height={100}
      />
      <ProfileDescriptionInfo profile={profile} />
    </div>
  );
};

export default ProfileDescriptionDetails;
