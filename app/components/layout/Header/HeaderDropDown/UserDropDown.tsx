"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import styles from "./HeaderDropDown.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

interface UserMenuDropdownProps {
  onClose: () => void;
  onLogout: () => void;
}

const UserMenuDropdown: React.FC<UserMenuDropdownProps> = ({ onClose, onLogout }) => {
  const { userDisplayName } = useAuth();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // const handleLogout = () => {
  //   logout();
  //   onClose();
  // };




  return (
    <div ref={dropdownRef} className={styles.menuContainer}>
      {/* Header Section */}
      <div className={styles.DNameWrapper}>
        <h2 className={styles.userDName}>Hi, {userDisplayName || ""}!</h2>
        <div className={styles.steamConnection}>
          <Image
            src={ImagePaths.icons.steam2}
            alt="icon"
            width={20}
            height={20}
          />
          <p>Steam</p>
          <Image
            src={ImagePaths.icons.linkBroken}
            alt="icon"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className={styles.customBorder}></div>

      <div className={styles.menuItem}>
        <Image src={ImagePaths.icons.bell1} alt="icon" width={20} height={20} />
        <h3>Notification</h3>
      </div>
      <div className={styles.menuItem}>
        <Image
          src={ImagePaths.icons.arrowUD}
          alt="icon"
          width={20}
          height={20}
        />
        <h3>Transactions</h3>
      </div>
      <div
        className={styles.menuItem}
        onClick={() => {
          router.push("/profile");
          onClose();
        }}
        style={{ cursor: "pointer" }}
      >
        <Image src={ImagePaths.icons.user3} alt="icon" width={20} height={20} />
        <h3>Account info</h3>
      </div>
      <div className={styles.customBorder}></div>
      <div className={styles.menuItem} onClick={() => onLogout()} >
        <Image
          src={ImagePaths.icons.logout}
          alt="icon"
          width={20}
          height={20}
        />
        <h3 style={{ color: "var(--Blood500)" }}>Log out</h3>
      </div>
    </div>
  );
};

export default UserMenuDropdown;
