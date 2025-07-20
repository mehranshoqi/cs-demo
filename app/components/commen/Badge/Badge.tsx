import styles from "./Badge.module.scss";

interface BadgeProps {
  text: string;
  size?: number | string;
}

export default function Badge({ text, size = 20 }: BadgeProps) {
  return (
    <span
      className={styles.badge}
      style={{
        width: size,
        height: size,
        fontSize: typeof size === "number" ? size * 0.6 : undefined,
      }}
    >
      {text}
    </span>
  );
}