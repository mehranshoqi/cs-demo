import Image from "next/image";
import styles from "./Chips.module.scss";
import { Chip } from "@/app/types";

interface ChipsProps {
  chips: Chip[];
  activeChip?: string;
  onChipClick?: (filter: string) => void;
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
            <Image
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
