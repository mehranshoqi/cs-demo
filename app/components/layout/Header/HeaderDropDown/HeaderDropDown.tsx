import Image from "next/image";
import styles from "./HeaderDropDown.module.scss";
import Badge from "@/app/components/commen/Badge/Badge";
import ImagePaths from "@/app/constants/ImagePaths";
import React from "react";

interface HeaderDropDownProps {
  title: string;
  imageSrc?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function HeaderDropDown({ title, imageSrc, onClick }: HeaderDropDownProps) {
  return (
    <div className={styles.dropdown} onClick={onClick}  >
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
