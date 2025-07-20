import styles from "./Chips.module.scss";

interface ChipItem {
  label: string;
  iconSrc?: string;
}

interface ChipsProps {
  chips: ChipItem[];
  activeChip?: string;
  onChipClick?: (chip: string) => void;
}

export default function Chips({ chips, activeChip, onChipClick }: ChipsProps) {
  return (
    <div className={styles.chips}>
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`${styles.chip} ${
            activeChip === chip.label ? styles.active : ""
          }`}
          onClick={() => onChipClick?.(chip.label)}
        >
          {chip.iconSrc && (
            <img
              src={chip.iconSrc}
              alt={chip.label}
              className={styles.chipIcon}
              width={20}
              height={20}
            />
          )}
          {chip.label}
        </span>
      ))}
    </div>
  );
}
