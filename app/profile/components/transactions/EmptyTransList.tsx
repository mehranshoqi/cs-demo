import Image from "next/image";
import styles from "../../Profile.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

const EmptyTransList: React.FC = () => {
  return (
    <div className={styles.emptyTransContainer}>
      <Image
        src={ImagePaths.transactions.dailyCasesIcon}
        width={20}
        height={20}
        alt="icon"
      />
      <h3>You haven&apos;t made any transactions yet</h3>
    </div>
  );
};

export default EmptyTransList;

