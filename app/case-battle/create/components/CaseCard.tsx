import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../Create.module.scss";
import Image from "next/image";
import { ReactNode } from "react";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";

const CaseCard: React.FC = ({}) => {
  return (
    <div className={`${styles.caseCard} gradientBorder`}>
      <Image
        className={styles.caseCardMainImg}
        src={ImagePaths.caseBattle.caseImage1}
        width={120}
        height={120}
        alt=""
      />

      <div className={styles.cardTitle}>
        <h3 className={styles.caseCardTitle}>Titan Katowice 2014</h3>
        Slider
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.casePrice}>
          <Image src={ImagePaths.icons.coin} width={16} height={16} alt="" />
          <span>12,330,000</span>
        </div>

        <div className={styles.countHandler}>
          <FillButton
            iconSrc={ImagePaths.icons.plus}
            circleBtn={true}
            filledColor="#FFFFFF0F"
            height={44}
            width={44}
          />
          <span>1</span>
          <FillButton
            iconSrc={ImagePaths.icons.plus}
            circleBtn={true}
            filledColor="#FFFFFF0F"
            height={44}
            width={44}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
