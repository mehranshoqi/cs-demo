import Image from "next/image";
import styles from "./FilledButton.module.scss";

interface FillButtonProps {
  title: string;
  onClick?: () => void;
  iconSrc?: string;
  iconSize?: number;
  iconColor?: string;
  height?: string | number;
  width?: string | number;
  fontWeight?: string | number;
  fontSize?: string | number;
}

export default function FillButton({
  title,
  onClick,
  iconSrc,
  iconSize = 20,
  iconColor,
  height,
  width,
  fontWeight,
  fontSize,
}: FillButtonProps) {
  return (
    <button
      className={styles.fillButton}
      onClick={onClick}
      style={{
        height: height,
        width: width,
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
        }}
      >
        {title}
      </span>
    </button>
  );
}
