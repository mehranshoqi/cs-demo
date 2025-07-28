"use client";

import React, { useState, useEffect } from "react";

import styles from "./Cart.module.scss";
import { TradeListType } from "./TradesList";

interface TradeStatusIndicatorProps {
  type: TradeListType;

  initialRemainingSeconds?: number;
}

const TradeStatusIndicator: React.FC<TradeStatusIndicatorProps> = ({
  type,
  initialRemainingSeconds = 1400,
}) => {
  const [remainingSeconds, setRemainingSeconds] = useState(
    initialRemainingSeconds
  );

  useEffect(() => {
    if (type === TradeListType.actionNeeded || type === TradeListType.waiting) {
      if (remainingSeconds <= 0) return;

      const timer = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [type, remainingSeconds]);

  const formatTime = (totalSeconds: number): string => {
    if (totalSeconds < 0) return "00:00:00";
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const getStatusText = (): string => {
    switch (type) {
      case TradeListType.actionNeeded:
        return "Action needed";
      case TradeListType.waiting:
        return "Waiting for the seller";
      case TradeListType.complete:
        return "Completed";
      default:
        return "";
    }
  };

  const getContainerClassName = (): string => {
    switch (type) {
      case TradeListType.actionNeeded:
        return styles.actionNeeded;
      case TradeListType.waiting:
        return styles.waiting;
      case TradeListType.complete:
        return styles.completed;
      default:
        return "";
    }
  };

  const displayTimer =
    (type === TradeListType.actionNeeded || type === TradeListType.waiting) &&
    remainingSeconds > 0;

  return (
    <div className={`${styles.statusContainer} ${getContainerClassName()}`}>
      {displayTimer && (
        <span className={styles.timer}>{formatTime(remainingSeconds)}</span>
      )}
      <span className={styles.statusText}>{getStatusText()}</span>
    </div>
  );
};

export default TradeStatusIndicator;
