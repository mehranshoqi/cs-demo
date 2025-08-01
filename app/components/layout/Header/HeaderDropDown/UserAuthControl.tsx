"use client";

import React, { useState } from "react";

import ImagePaths from "@/app/constants/ImagePaths";
import { useAuth } from "@/app/context/AuthContext";
import HeaderDropDown from "./HeaderDropDown";
import toast from "react-hot-toast";
import UserMenuDropdown from "./UserDropDown";
import FillButton from "../../../commen/FilledButton/FilledButton";
import styles from "./HeaderDropDown.module.scss";
import AuthService from "@/app/services/auth/authService";

const UserAuthControls: React.FC = () => {
  const { openAuthModal, isLoggedIn, userDisplayName, logout } = useAuth();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("authToken");
      const response = await AuthService.logout(token ?? "");

      if (response.data.status === 1) {
        logout();
      } else {
        setError(response.data.type);
        // toast.error(error);
      }
    } catch (err: any) {
      toast.error("This didn't work.");
    } finally {
      setLoading(false);
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
