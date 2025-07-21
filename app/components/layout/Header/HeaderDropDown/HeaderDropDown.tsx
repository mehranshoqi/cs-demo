import Image from "next/image";
import styles from "./HeaderDropDown.module.scss";
import Badge from "@/app/components/commen/Badge/Badge";
import ImagePaths from "@/app/constants/ImagePaths";

interface HeaderDropDownProps {
  title: string;
  imageSrc?: string;
}

export default function HeaderDropDown({ title, imageSrc }: HeaderDropDownProps) {
  return (
    <div className={styles.dropdown}>
      {imageSrc ? (
        <Image src={imageSrc} alt="User" width={20} height={20} />
      ) : (
        <Badge text="0" />
      )}
      <span className={styles.title}>{title}</span>
      <Image
        src={ImagePaths.icons.arrowDown}
        alt="arrow"
        width={14}
        height={8}
        className={styles.avatar}
      />
    </div>
  );
}