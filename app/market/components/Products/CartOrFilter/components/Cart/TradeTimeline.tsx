"use client";

import React from "react";
import Image from "next/image";
import styles from "./CartItem.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

interface TradeStep {
  id: string | number;
  title: string;
  description: string;
  status: TradeStepStatus;
  stepNumber?: number;
}

interface TradeTimelineProps {
  steps: TradeStep[];
}

const TradeTimeline: React.FC<TradeTimelineProps> = ({ steps }) => {
  return (
    <div className={styles.timelineContainer}>
      {steps.map((step, index) => {
        const isLastItem = index === steps.length - 1;
        const isPrevStepCompleted =
          index > 0 && steps[index - 1].status === TradeStepStatus.Completed;
        const isCurrentOrPrevStepActiveOrCompleted =
          step.status === TradeStepStatus.Completed ||
          step.status === TradeStepStatus.Active ||
          isPrevStepCompleted;

        return (
          <div key={step.id} className={styles.itemWrappper}>
            <div className={styles.timelineItem}>
              <div className={styles.iconColumn}>
                <div
                  className={`${styles.statusCircle} ${styles[step.status]}`}
                  style={{ color: "black" }}
                >
                  {step.status == TradeStepStatus.Completed ? (
                    <Image
                      src={ImagePaths.icons.mark}
                      alt=""
                      width={9}
                      height={9}
                    />
                  ) : step.status == TradeStepStatus.Failed ? (
                    <Image
                      src={ImagePaths.icons.xMark2}
                      alt=""
                      width={9}
                      height={9}
                    />
                  ) : (
                    index + 1
                  )}
                </div>

                {/* {!isLastItem && (
                <div
                  className={`${styles.verticalLine} ${styles[step.status]} ${
                    isCurrentOrPrevStepActiveOrCompleted
                      ? styles.lineActive
                      : ""
                  }`}
                ></div>
              )} */}
              </div>
              <div className={styles.contentColumn}>
                <p
                  className={`${styles.stepTitle} ${styles[step.status]}`}
                  style={{ backgroundColor: "transparent" }}
                >
                  {step.title}
                </p>

                {step.status != TradeStepStatus.Failed && (
                  <p className={styles.stepDescription}>{step.description}</p>
                )}
              </div>
            </div>
            {!isLastItem && (
              <div
                className={`${styles.verticalLine} ${styles[step.status]} ${isCurrentOrPrevStepActiveOrCompleted ? styles.lineActive : ""
                  }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TradeTimeline;



export enum TradeStepStatus {
  Completed = "completed",
  Active = "active",
  Failed = "failed",
  Default = "default",
}
