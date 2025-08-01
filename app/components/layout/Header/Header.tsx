"use client";

import Image from "next/image";
import LinkButton from "../../commen/LinkButton/LinkButton";
import styles from "./Header.module.scss";

import ImagePaths from "@/app/constants/ImagePaths";
import HeaderDropDown from "./HeaderDropDown/HeaderDropDown";

import React from "react";
import UserAuthControls from "./HeaderDropDown/UserAuthControl";
import FillButton from "../../commen/FilledButton/FilledButton";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftNavigation}>
        <Image src={ImagePaths.logos.logo} alt="Logo" width={149} height={44} />
        <LinkButton
          src={ImagePaths.icons.merchant}
          href="/marketplace"
          title="Marketplace"
        />
        <LinkButton
          src={ImagePaths.icons.cup}
          href="/tournaments"
          title="Tournaments"
        />
      </div>
      <div className={styles.rightNavigation}>
        <HeaderDropDown imageSrc={ImagePaths.icons.coin} title="0.00" />

        <UserAuthControls />

        <FillButton
          title="Deposit"
          iconSrc={ImagePaths.icons.plusCircle}
          onClick={() => {}}
        />
      </div>
    </header>
  );
};

export default Header;
