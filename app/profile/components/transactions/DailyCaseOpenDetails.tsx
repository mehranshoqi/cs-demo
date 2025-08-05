import Image from "next/image";
import styles from "../../Profile.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

const DailyCasesOpenDetails = () => {
  return (
    <div className={styles.dailyCaseOpenDetails}>
      <h5>Made on April 23, 2024 10:15 AM</h5>
      <div className={styles.itemImg}>
        <div>
          <span>[MW] MP9</span>
          <span>[MW] MP9</span>
        </div>
        <Image
          src={ImagePaths.productSamples.gun1}
          width={150}
          height={150}
          alt="item"
        />
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

export default DailyCasesOpenDetails;
