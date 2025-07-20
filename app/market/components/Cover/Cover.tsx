import Image from "next/image";
import styles from "./Cover.module.scss";

export default function Cover() {
  return (
    <div className={styles.cover}>
      <Image
        src="/images/cover.jpg"
        alt="cover"
        fill
        objectFit="cover"
        objectPosition="top center"
      />
      <div className={styles.titleCover}>
        <div className={styles.bigTitle}>
          <span className={styles.green}>BUY</span> or{" "}
          <span className={styles.red}>SELL</span> Your CS:GO Skins
        </div>
        <div className={styles.bigTitle}>Safe, Simple, Secure</div>
        <div className="gap-10"></div>
        <div className={styles.desc}>
          Trade smart, Sell with trust, Buy with confidence
        </div>
      </div>
    </div>
  );
}
