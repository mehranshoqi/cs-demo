"use client";

import React from "react";
import styles from "./WearSlider.module.scss";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface WearBarProps {
  label?: string;
  value: number;
  hovered: boolean;
  padding?: string | undefined;
}

const WearBar: React.FC<WearBarProps> = ({
  label = "Minimal Wear",
  value,
  hovered,
  padding,
}) => {
  const segments = [
    { to: 0.07, color: styles.cyan },
    { to: 0.15, color: styles.green },
    { to: 0.38, color: styles.yellow },
    { to: 0.45, color: styles.orange },
    { to: 1, color: styles.red },
  ];

  return (
    <div className={styles.wearBar} style={{padding: padding}}>
      <div className={styles.barContainer}>
        {segments.map((seg, index) => {
          const isCurrentSegment =
            value <= seg.to && (index === 0 || value > segments[index - 1].to);
          const width =
            index === 0
              ? seg.to * 100
              : (seg.to - segments[index - 1].to) * 100;
          return (
            <div
              key={index}
              className={
                isCurrentSegment
                  ? seg.color
                  : hovered
                  ? seg.color
                  : styles.deactiveSlider
              }
              style={{
                width: `${width}%`,
                transition: `all ${0.1 + index * 0.05}s`,
              }}
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
        style={{
          marginLeft: `${value * 100}%`,
          opacity: hovered ? "1" : ".4",
          transition: "all .5s",
        }}
        src={ImagePaths.icons.arrowUp}
        alt="d"
        width={10}
        height={10}
      />

      <div className={`${styles.label} ${hovered ?  styles.labelHovered : undefined}` }>
        {label} {value.toFixed(2)}
      </div>
    </div>
  );
};

export default WearBar;
