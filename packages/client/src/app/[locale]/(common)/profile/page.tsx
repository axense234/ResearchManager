"use client";
// Interfaces
import { FC } from "react";
// Hooks
import { useAuthorization } from "@/hooks";
// Components
import ProfilePage from "@/components/page/profile/ProfilePage";

const Profile: FC = () => {
  useAuthorization();

  return <ProfilePage />;
};

export default Profile;
