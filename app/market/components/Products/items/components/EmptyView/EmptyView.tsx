import Image from "next/image";
import styles from "./EmptyView.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";

const EmptyListView = () => {
  return (
    <div className={styles.emptyBox}>
      <Image
        src={ImagePaths.icons.pack}
        width={141}
        height={111}
        alt=""
        className={styles.packImage}
      />
      <h1 className={styles.emptyTitle}>Not found</h1>
      <p className={styles.emptyDesc}>Please see other weapon or skin</p>
    </div>
  );
};

export default EmptyListView;
