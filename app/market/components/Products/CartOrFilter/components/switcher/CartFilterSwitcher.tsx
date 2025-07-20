import Image from "next/image";
import styles from "./CartFilterSwitcher.module.scss";
import Badge from "@/app/components/commen/Badge/Badge";

interface Props {
  active: "cart" | "filter";
  onSwitch: (value: "cart" | "filter") => void;
}

export default function CartFilterSwitcher({ active, onSwitch }: Props) {
  return (
    <div className={styles.cartFilterSwitcher}>
      <div
        className={`${styles.switchButton} ${styles.left} ${
          active === "cart" ? styles.active : ""
        }`}
        onClick={() => onSwitch("cart")}
      >
        <Image
          src="/images/trade.svg"
          alt=""
          width={16}
          height={16}
          className={`${styles.icon} ${active === "cart" ? styles.active : ""}`}
        />
        Trades
        <Badge size={16} text="1" />
      </div>
      <div
        className={`${styles.switchButton} ${styles.right} ${
          active === "filter" ? styles.active : ""
        }`}
        onClick={() => onSwitch("filter")}
      >
        <Image
          src="/images/sliders.svg"
          alt=""
          width={18}
          height={18}
          className={`${styles.icon} ${active === "filter" ? styles.active : ""}`}
        />
        Filters
      </div>
    </div>
  );
}