"use client";

import React from "react";
import styles from "./WearSlider.module.scss";
import Image from "next/image";

interface WearBarProps {
  label?: string;
  value: number;
}

const WearBar: React.FC<WearBarProps> = ({ label = "Minimal Wear", value }) => {
  const segments = [
    { to: 0.07, color: styles.cyan },
    { to: 0.15, color: styles.green },
    { to: 0.38, color: styles.yellow },
    { to: 0.45, color: styles.orange },
    { to: 1, color: styles.red },
  ];

  return (
    <div className={styles.wearBar}>
      <div className={styles.barContainer}>
        {segments.map((seg, index) => {
          const width =
            index === 0
              ? seg.to * 100
              : (seg.to - segments[index - 1].to) * 100;
          return (
            <div
              key={index}
              className={seg.color}
              style={{ width: `${width}%` }}
            />
          );
        })}

        <div
          className={styles.pointer}
          style={{
            left: `${value * 100}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className={styles.triangle} />
        </div>
      </div>

      <Image
        style={{ marginLeft: `${value * 100}%` }}
        src="/images/arrow-up.svg"
        alt="d"
        width={10}
        height={10}
      />

      <div className={styles.label}>
        {label} {value.toFixed(2)}
      </div>
    </div>
  );
};

export default WearBar;
