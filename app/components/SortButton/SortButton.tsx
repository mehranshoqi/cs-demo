import Image from "next/image";
import styles from "./SortButton.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

const SortButton = () => {
  return (
    <div className={styles.sortWrapper}  >
      <span className={styles.chipStyle}>
        <Image
          src={ImagePaths.icons.sort}
          alt="Sort"
          className={styles.sortIcon}
          width={20}
          height={20}
        />
      </span>
    </div>
  );
};

export default SortButton;
