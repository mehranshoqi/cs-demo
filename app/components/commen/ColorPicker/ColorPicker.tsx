// components/ColorPicker.tsx
import React, { useState } from "react";
import styles from "./ColorPicker.module.scss";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface ColorPickerProps {
  onSelectionChange: (selectedColors: string[]) => void;
  initialSelectedColors?: string[];
  allowMultipleSelection?: boolean;
  showNoneOption?: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  onSelectionChange,
  initialSelectedColors = [],
  allowMultipleSelection = true,
  showNoneOption = true,
}) => {
  const [selectedColors, setSelectedColors] = useState<string[]>(
    initialSelectedColors
  );
  const availableColors = [
    "#ed4438",
    "#f8a605",
    "#f9e637",
    "#ffffff",
    "#9fe53b",
    "#5aaf0b",
    "#00cc8f",
    "#00becc",
    "#4ac4fc",
    "#4a81fc",
    "#1c59e2",
    "#7d2efa",
    "#e22efa",
    "#FFFFFF",
    "#343A40",
  ];

  const handleColorClick = (color: string | "none") => {
    let newSelected: string[];

    if (color === "none") {
      newSelected = [];
    } else {
      if (allowMultipleSelection) {
        if (selectedColors.includes(color)) {
          newSelected = selectedColors.filter((c) => c !== color);
        } else {
          newSelected = [...selectedColors, color];
        }
      } else {
        newSelected = selectedColors.includes(color) ? [] : [color];
      }
    }
    setSelectedColors(newSelected);
    onSelectionChange(newSelected);
  };

  const isNoneSelected = selectedColors.length === 0;

  return (
    <div className={styles.colorPickerContainer}>
      {availableColors.map((color) => {
        const isActive = selectedColors.includes(color);
        return (
          <div
            key={color}
            className={`${styles.colorBox} ${isActive ? styles.active : ""}`}
            onClick={() => handleColorClick(color)}
          >
            <div className={styles.inner} style={{ backgroundColor: color }}>
              {isActive && (
                <Image
                  src={ImagePaths.icons.xMark2}
                  alt=""
                  width={14}
                  height={14}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorPicker;
