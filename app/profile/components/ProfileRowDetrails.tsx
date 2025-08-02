import { ReactNode } from "react";
import styles from "../Profile.module.scss";
import Image from "next/image";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import SolidSvg from "@/app/components/commen/svgMask/svgMask";

interface ProfileRowDetailsProps {
  left?: ReactNode;
  titleRightBadge?: ReactNode;
  title: string;
  titleIcon?: string;
  disabled?: boolean;
  desc: string;
  buttonLabel?: string;
  primaryBtn?: boolean;
  titleFontSize?: string;
  buttonWidth?: string | undefined;
  onButtonClick?: () => void;
}

const ProfileRowDetails: React.FC<ProfileRowDetailsProps> = ({
  left,
  title,
  titleFontSize,
  desc,
  buttonLabel,
  primaryBtn,
  titleIcon,
  buttonWidth,
  onButtonClick,
  disabled = false,
  titleRightBadge,
}) => {
  return (
    <div className={styles.rowDetailsContainer}>
      {left}
      <div className={styles.titleDesc}>
        <div className={styles.titleWrapper}>
          {titleIcon && (
            <SolidSvg path={titleIcon} width={20} height={20} color="white" />
          )}
          <h3 style={{ fontSize: titleFontSize }}>{title}</h3>
          {titleRightBadge}
        </div>
        <p>{desc}</p>
      </div>
      {buttonLabel && (
        <FillButton
          onClick={ onButtonClick}
          width={buttonWidth ?? 180}
          height={40}
          disabled={disabled}
          filledColor={
            primaryBtn ? "var(--Primary500)" : "rgba(255,255,255,.06)"
          }
          title={buttonLabel}
        />
      )}
    </div>
  );
};

export default ProfileRowDetails;
