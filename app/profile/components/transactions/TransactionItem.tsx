import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";

const TransactionItem = () => {
  return (
    <div className={styles.transItem}>
      <Image
        src={ImagePaths.transactions.fiatIcon}
        width={20}
        height={20}
        alt=""
      />

      <h3>Daily Case Open</h3>

      <div className={styles.badgeWrapper}>
        {/* TODO: complete - pending - withdraw */}
        <div className={`${styles.transStatusBadge} ${styles.withdraw}`}>
          Complete
        </div>
      </div>

      <div className={styles.coin}>
        <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
        <h3>2.55</h3>
      </div>
      <h4 className={styles.date}>April 23, 2024 10:15 AM</h4>
    </div>
  );
};

export default TransactionItem;
