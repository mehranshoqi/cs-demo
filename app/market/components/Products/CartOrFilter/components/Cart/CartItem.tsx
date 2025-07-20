import Image from "next/image";
import styles from "./CartItem.module.scss";

export default function CartItem() {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <Image src="/images/gun1.png" alt="" width={100} height={100} />
        <div className={styles.itemDetails}>
          <p className={styles.itemType}>AK-47</p>
          <p className={styles.itemName}>Emerlad</p>
          <div className={styles.price}>
            <Image src="/images/coin.svg" alt="" width={18} height={18} />
            <p className={styles.itemPrice}>3,705,000.00</p>
          </div>
          <div className={styles.discount}>+6%</div>
        </div>
        <Image src="/images/trash.svg" alt="" width={20} height={20} />
      </div>

      <div className={styles.detailsSection}>
        <p className={styles.itemDetailsTitle}>Details</p>
        <Image src="/images/arrow-down.svg" alt="arrow" width={9} height={5} />
      </div>

      <div className={styles.divider}></div>
    </div>
  );
}
