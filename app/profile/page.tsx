"use client";

import { useState } from "react";

import styles from "./Profile.module.scss";
import { ProfileMenu } from "../types";
import ProfileMenuView from "./components/ProfileMenu";
import ProfileView from "./components/ProfileView";
import SecurityView from "./components/SecurityView";

const ProfilePage = () => {
  const [activeItem, setActiveItem] = useState<ProfileMenu>(
    ProfileMenu.profile
  );
  const renderView = () => {
    switch (activeItem) {
      case ProfileMenu.profile:
        return <ProfileView />;
      case ProfileMenu.security:
        return <SecurityView />;

      default:
        return <>Test</>;
    }
  };
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <ProfileMenuView activeItem={activeItem} onChange={setActiveItem} />
        <div className={styles.viewWrapper}>{renderView()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
