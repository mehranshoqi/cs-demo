// components/PriceRangeInput.tsx
import React, { useState } from "react";
import Image from "next/image";
import styles from "./PriceRangeInput.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

interface PriceRangeInputProps {
  onConfirm: (min: number | null, max: number | null) => void;
  initialMin?: number;
  initialMax?: number;
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = ({
  onConfirm,
  initialMin = null,
  initialMax = null,
}) => {
  const [minValue, setMinValue] = useState<string>(
    initialMin !== null ? initialMin.toString() : ""
  );
  const [maxValue, setMaxValue] = useState<string>(
    initialMax !== null ? initialMax.toString() : ""
  );

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      /^\d*\.?\d*$/.test(value) ||
      value === "" ||
      value.toLowerCase() === "any"
    ) {
      setMaxValue(value);
    }
  };

  const handleConfirm = () => {
    const min = minValue === "" ? null : parseFloat(minValue);
    const max =
      maxValue === "" || maxValue.toLowerCase() === "any"
        ? null
        : parseFloat(maxValue);

    if (min !== null && isNaN(min)) {
      console.error("Invalid min value");
      return;
    }
    if (max !== null && isNaN(max)) {
      console.error("Invalid max value");
      return;
    }
    if (min !== null && max !== null && min > max) {
      console.error("Min value cannot be greater than max value");
      return;
    }

    onConfirm(min, max);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <Image
          src={ImagePaths.icons.coin}
          alt="Coin icon"
          width={20}
          height={20}
          className={styles.coinIcon}
        />
        <input
          type="text"
          value={minValue}
          onChange={handleMinChange}
          placeholder="0.00"
          className={styles.inputField}
          inputMode="numeric"
          pattern="[0-9]*\.?[0-9]*"
        />
      </div>

      <span className={styles.separator}>to</span>

      <div className={styles.inputWrapper}>
        <Image
          src={ImagePaths.icons.coin}
          alt="Coin icon"
          width={20}
          height={20}
          className={styles.coinIcon}
        />
        <input
          type="text"
          value={maxValue}
          onChange={handleMaxChange}
          placeholder="Any"
          className={styles.inputField}
          inputMode="text"
        />
      </div>

      <button onClick={handleConfirm} className={styles.confirmButton}>
        <Image
          src={ImagePaths.icons.mark}
          alt="Confirm icon"
          width={20}
          height={20}
          className={styles.coinIcon} 
        />
      </button>
    </div>
  );
};

export default PriceRangeInput;