import Image from "next/image";
import styles from "./CartFilterSwitcher.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import Badge from "@/app/components/commen/Badge/Badge";

interface Props {
  active: "cart" | "filter";
  onSwitch: (value: "cart" | "filter") => void;
  cartItemCount: number;
}

export default function CartFilterSwitcher({
  active,
  onSwitch,
  cartItemCount,
}: Props) {
  return (
    <div className={styles.cartFilterSwitcher}>
      <div
        className={`${styles.switchButton} ${styles.left} ${
          active === "cart" ? styles.active : ""
        }`}
        onClick={() => onSwitch("cart")}
      >
        <Image
          src={ImagePaths.icons.trade}
          alt=""
          width={16}
          height={16}
          className={`${styles.icon} ${active === "cart" ? styles.active : ""}`}
        />
        Trades
        {cartItemCount != 0 && (
          <Badge text={cartItemCount?.toString() || "0"} size="small" />
        )}
      </div>
      <div
        className={`${styles.switchButton} ${styles.right} ${
          active === "filter" ? styles.active : ""
        }`}
        onClick={() => onSwitch("filter")}
      >
        <Image
          src={ImagePaths.icons.sliders}
          alt=""
          width={18}
          height={18}
          className={`${styles.icon} ${
            active === "filter" ? styles.active : ""
          }`}
        />
        Filters
      </div>
    </div>
  );
}
