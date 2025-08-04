"use client";

import { useState } from "react";

import styles from "./Profile.module.scss";
import { ProfileMenu } from "../types";
import ProfileMenuView from "./components/ProfileMenu";
import TransactionsView from "./components/transactions/TransactionsView";
import ProfileView from "./components/profileAndSecurity/ProfileView";
import SecurityView from "./components/profileAndSecurity/SecurityView";
import GameHistoryView from "./components/gameHistory/GameHistoryView";

const ProfilePage = () => {
  const [activeItem, setActiveItem] = useState<ProfileMenu>(
    ProfileMenu.transactions
  );
  const renderView = () => {
    switch (activeItem) {
      case ProfileMenu.profile:
        return <ProfileView />;
      case ProfileMenu.security:
        return <SecurityView />;
      case ProfileMenu.transactions:
        return <TransactionsView />;
      case ProfileMenu.gameHistory:
        return <GameHistoryView />;

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
