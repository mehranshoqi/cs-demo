import Image from "next/image";
import styles from "../../Profile.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

const CryptoDepositDetails = () => {
  return (
    <div className={styles.cryptoDepositDetails}>
      <h5>Made on April 23, 2024 10:15 AM</h5>
      <div className={styles.cryptoDetails}>
        <div className={styles.method}>
          <div>
            <span>Payment Method</span>
            <span>Crypto (BTC)</span>
          </div>
          <div className={styles.viewBtn}>View</div>
        </div>
        <div className={styles.amount}>
          <span>Deposited</span>
          <span>BTC 0.00240500</span>
        </div>
      </div>
      <div className={styles.transPrice}>
        <span>You Received</span>
        <Image src={ImagePaths.icons.coin} width={20} height={20} alt="item" />
        <h5>3.44</h5>
      </div>
      <div style={{ height: "var(--sds-size-space-300)" }}></div>
    </div>
  );
};

export default CryptoDepositDetails;
