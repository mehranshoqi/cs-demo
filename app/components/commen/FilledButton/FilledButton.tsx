import Image from "next/image";
import styles from "./FilledButton.module.scss";

interface FillButtonProps {
  title: string;
  onClick?: () => void;
  iconSrc?: string;
  iconSize?: number;
  padding?: string;
  iconColor?: string;
  filledColor?: string;
  height?: string | number;
  width?: string | number;
  fontWeight?: string | number;
  disabled?: boolean;
  loading?: boolean;
  fontSize?: string | number;
}

export default function FillButton({
  title,
  onClick,
  iconSrc,
  iconSize = 20,
  iconColor,
  padding,
  height,
  width,
  fontWeight,
  filledColor,
  fontSize,
  disabled,
  loading,
}: FillButtonProps) {
  return (
    <button
      className={`${styles.fillButton} ${loading ? styles.loading : undefined}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        height: height,
        width: width,
        backgroundColor: filledColor,
        background: filledColor,
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
      {
        <span
          className={`${styles.title}`}
          style={{
            fontWeight: fontWeight,
            fontSize: fontSize,
            color: disabled ? 'var(--Gray600)' : undefined,
          }}
        >
          {title} {loading ? "..." : ""}
        </span>
      }
    </button>
  );
}
