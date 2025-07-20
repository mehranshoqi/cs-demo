import Image from "next/image";
import LinkButton from "../../commen/LinkButton/LinkButton";
import styles from "./Header.module.scss";
import FillButton from "../../commen/FilledButton/FilledButton";
import HeaderDropDown from "./HeaderDropDown/HeaderDropDown";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftNavigation}>
        <Image src="/images/Logo.svg" alt="Logo" width={149} height={44} />
        <LinkButton
          src="/images/merchant.svg"
          href="/marketplace"
          title="Marketplace"
        />
        <LinkButton
          src="/images/cup.svg"
          href="/tournaments"
          title="Tournaments"
        />
      </div>
      <div className={styles.rightNavigation}>
        <HeaderDropDown imageSrc="/images/coin.svg" title="0.00"/>
        <HeaderDropDown title="Amir"/>
        <FillButton title="Deposit" iconSrc="/images/plus-circle.svg"/>
      </div>
    </header>
  );
}