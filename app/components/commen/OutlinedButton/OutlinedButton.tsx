import Image from "next/image";
import styles from "./OutlinedButton.module.scss";

interface OutlinedButtonProps {
  title: string;
  onClick?: () => void;
  iconSrc?: string;
  iconSize?: number;
  iconColor?: string;
  borderColor?: string;
  padding?: string;
  titleColor?: string;
  bgColor?: string;
  height?: string | number;
  width?: string | number;
  fontWeight?: string | number;
  fontSize?: string | number;
}

export default function OutlinedButton({
  title,
  onClick,
  iconSrc,
  iconSize = 20,
  iconColor,
  height,
  borderColor,
  padding,
  bgColor,
  titleColor,
  width,
  fontWeight,
  fontSize,
}: OutlinedButtonProps) {
  return (
    <button
      className={styles.outlinedButton}
      onClick={onClick}
      style={{
        height: height,
        width: width,
        borderColor: borderColor,
        backgroundColor: bgColor,
        padding: padding,
      }}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt=""
          width={iconSize}
          height={iconSize}
          className={styles.icon}
          style={{
            width: iconSize,
            height: iconSize,
            filter: iconColor
              ? `brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)`
              : undefined,
            color: iconColor,
          }}
        />
      )}
      <span
        className={styles.title}
        style={{
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: titleColor,
        }}
      >
        {title}
      </span>
    </button>
  );
}
