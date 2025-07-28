"use client";

import Image from "next/image";
import LinkButton from "../../commen/LinkButton/LinkButton";
import styles from "./Header.module.scss";
import FillButton from "../../commen/FilledButton/FilledButton";
import ImagePaths from "@/app/constants/ImagePaths";
import HeaderDropDown from "./HeaderDropDown/HeaderDropDown";
import { useAuth } from "@/app/context/AuthContext";

const Header: React.FC = () => {
  const { openAuthModal } = useAuth();
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
        <HeaderDropDown title="Amir" />
        <FillButton
          title="Deposit"
          iconSrc={ImagePaths.icons.plusCircle}
          onClick={() => {
            openAuthModal();
          }}
        />
      </div>
    </header>
  );
};

export default Header;
