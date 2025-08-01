"use client";

import Image from "next/image";
import styles2 from "../../../../../../components/commen/FilterSelection/FilterSelection.module.scss";
import styles from "./CartItem.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import { useState } from "react";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import TradeTimeline, { TradeStepStatus } from "./TradeTimeline";

const SellActionSteps = () => {
  const [isActive, setIsActive] = useState(false);

  const exampleTimeline2 = [
    {
      id: 1,
      title: "Skin Sold",
      description: "Your item has been purchased",
      status: TradeStepStatus.Completed,
    },
    {
      id: 2,
      title: "You Sent the Item",
      description: "You've sent the skin",
      status: TradeStepStatus.Completed,
    },
    {
      id: 3,
      title: "Buyer Confirmed",
      description: "The buyer has confirmed the trade",
      status: TradeStepStatus.Active,
      number: 2,
    },
    {
      id: 4,
      title: "Trade Completed",
      description: "The transaction is complete",
      status: TradeStepStatus.Default,
    },
    {
      id: 5,
      title: "Trade Disputed",
      description: "Contact support",
      status: TradeStepStatus.Failed,
    },
  ];

  return (
    <div className={styles.sellActionStepsContainer}>
      <div className={styles.infoBox}>
        <div className={styles.head}>
          <Image
            src={ImagePaths.icons.checkCircle}
            alt="icon"
            width={20}
            height={20}
          />
          <h3>You’ve received the skin on Steam</h3>
        </div>
        <div className={styles.info}>
          <p>Seller is waiting for your confirmation</p>
          <button>
            <Image
              src={ImagePaths.icons.plus}
              alt="icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      <div className={styles.receiveConfirmation}>
        <div className={styles.confirmationCheck}>
          <div className={styles2.checkboxWrapper}>
            <input
              type={"checkbox"}
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
              className={styles2.hiddenCheckbox}
            />
            <span className={styles2.customCheckbox}>
              {isActive && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L10 17L19 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <p>I’ve received the exact skin on Steam.</p>
        </div>

        <div className={styles.confirmationActions}>
          <OutlinedButton
            title="Decline Trade"
            height={40}
            onClick={() => {}}
            borderColor="var(--Gray800)"
            titleColor="var(--Text-Color-TextBodyGray300)"
          />
          <FillButton height={40} title="Confirm Trade Received" padding="0" />
        </div>
      </div>
      <div className={styles.divider}></div>

      <div className={styles.tradeStatus}>
        <h3>Trade Status</h3>
        <TradeTimeline steps={exampleTimeline2} />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default SellActionSteps;
