"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./Profile.module.scss";
import { ProfileMenu } from "../types";
import ProfileMenuView from "./components/ProfileMenu";
import TransactionsView from "./components/transactions/TransactionsView";
import ProfileView from "./components/profileAndSecurity/ProfileView";
import SecurityView from "./components/profileAndSecurity/SecurityView";
import GameHistoryView from "./components/gameHistory/GameHistoryView";
import StatisticsView from "./components/statistics/StatisticsView";
import TradesView from "./components/trades/TradesView";
import ErrorView from "./components/ErrorView";

const ProfilePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeItem, setActiveItem] = useState<ProfileMenu>(
    ProfileMenu.profile
  );

  // Get tab from URL on component mount
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      switch (tab) {
        case 'profile':
          setActiveItem(ProfileMenu.profile);
          break;
        case 'security':
          setActiveItem(ProfileMenu.security);
          break;
        case 'transactions':
          setActiveItem(ProfileMenu.transactions);
          break;
        case 'gameHistory':
          setActiveItem(ProfileMenu.gameHistory);
          break;
        case 'statistics':
          setActiveItem(ProfileMenu.statistics);
          break;
        case 'trades':
          setActiveItem(ProfileMenu.trades);
          break;
        default:
          setActiveItem(ProfileMenu.profile);
      }
    } else {
      // If no tab in URL, set to profile and update URL
      router.replace('/profile?tab=profile');
    }
  }, [searchParams, router]);

  const handleTabChange = (newTab: ProfileMenu) => {
    setActiveItem(newTab);

    // Update URL based on selected tab
    let tabParam = 'profile';
    switch (newTab) {
      case ProfileMenu.profile:
        tabParam = 'profile';
        break;
      case ProfileMenu.security:
        tabParam = 'security';
        break;
      case ProfileMenu.transactions:
        tabParam = 'transactions';
        break;
      case ProfileMenu.gameHistory:
        tabParam = 'gameHistory';
        break;
      case ProfileMenu.statistics:
        tabParam = 'statistics';
        break;
      case ProfileMenu.trades:
        tabParam = 'trades';
        break;
    }

    router.push(`/profile?tab=${tabParam}`);
  };

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
      case ProfileMenu.statistics:
        return <StatisticsView />;
      case ProfileMenu.trades:
        return <TradesView />;

      default:
        return <ErrorView />;
    }
  };
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <ProfileMenuView activeItem={activeItem} onChange={handleTabChange} />
        <div className={styles.viewWrapper}>{renderView()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
