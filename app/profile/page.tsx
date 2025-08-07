"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
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
import { useAuth } from "../context/AuthContext";

const TAB_CONFIG = {
  profile: ProfileMenu.profile,
  security: ProfileMenu.security,
  transactions: ProfileMenu.transactions,
  gameHistory: ProfileMenu.gameHistory,
  statistics: ProfileMenu.statistics,
  trades: ProfileMenu.trades,
  verifyIdentity: ProfileMenu.verifyIdentity,
} as const;

const VIEW_COMPONENTS = {
  [ProfileMenu.profile]: ProfileView,
  [ProfileMenu.security]: SecurityView,
  [ProfileMenu.transactions]: TransactionsView,
  [ProfileMenu.gameHistory]: GameHistoryView,
  [ProfileMenu.statistics]: StatisticsView,
  [ProfileMenu.trades]: TradesView,
  [ProfileMenu.verifyIdentity]: ErrorView,
} as const;

const ProfilePageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeItem, setActiveItem] = useState<ProfileMenu>(ProfileMenu.profile);

  const getTabFromUrl = useCallback((tab: string | null): ProfileMenu => {
    if (!tab) return ProfileMenu.profile;

    const menuItem = TAB_CONFIG[tab as keyof typeof TAB_CONFIG];
    return menuItem || ProfileMenu.profile;
  }, []);

  const getUrlFromTab = useCallback((tab: ProfileMenu): string => {
    const urlParam = Object.entries(TAB_CONFIG).find(([_, value]) => value === tab);
    return urlParam?.[0] || 'profile';
  }, []);

  useEffect(() => {
    const tab = searchParams.get('tab');
    const menuItem = getTabFromUrl(tab);

    setActiveItem(menuItem);

    if (!tab) {
      router.replace('/profile?tab=profile');
    }
  }, [searchParams, router, getTabFromUrl]);

  const handleTabChange = useCallback((newTab: ProfileMenu) => {
    setActiveItem(newTab);
    const urlParam = getUrlFromTab(newTab);
    router.push(`/profile?tab=${urlParam}`);
  }, [router, getUrlFromTab]);

  // Render appropriate view component
  const renderView = useCallback(() => {
    const ViewComponent = VIEW_COMPONENTS[activeItem as keyof typeof VIEW_COMPONENTS];
    return ViewComponent ? <ViewComponent /> : <ErrorView />;
  }, [activeItem]);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <ProfileMenuView activeItem={activeItem} onChange={handleTabChange} />
        <div className={styles.viewWrapper}>{renderView()}</div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Suspense fallback={<div className={styles.profilePage}>Loading...</div>}>
      <ProfilePageContent />
    </Suspense>
  );
};

export default ProfilePage;
