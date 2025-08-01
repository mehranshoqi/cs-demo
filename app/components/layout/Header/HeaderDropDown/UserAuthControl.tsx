"use client";

import React, { useState } from "react";

import ImagePaths from "@/app/constants/ImagePaths";
import { useAuth } from "@/app/context/AuthContext";
import HeaderDropDown from "./HeaderDropDown";
import UserMenuDropdown from "./UserDropDown";
import FillButton from "../../../commen/FilledButton/FilledButton";
import styles from "./HeaderDropDown.module.scss";
import AuthService from "@/app/services/authService";

const UserAuthControls: React.FC = () => {
  const { openAuthModal, isLoggedIn, userDisplayName, logout } = useAuth();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await AuthService.logout(token ?? "");
      if (response.data.status === 1) {
        logout();
      }
    } catch {
    } finally {
    }
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  const closeUserDropdown = () => {
    setIsUserDropdownOpen(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <div className={styles.dropDownWrapper}>
          <HeaderDropDown
            title={userDisplayName || "user"}
            onClick={toggleUserDropdown}
          />
          {isUserDropdownOpen && (
            <UserMenuDropdown
              onClose={closeUserDropdown}
              onLogout={handleLogout}
            />
          )}
        </div>
      ) : (
        <FillButton
          title="Login"
          iconSrc={ImagePaths.icons.user}
          onClick={openAuthModal}
          filledColor="#FFFFFF0F"
          iconColor="white"
        />
      )}
    </>
  );
};

export default UserAuthControls;
