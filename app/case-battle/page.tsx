import Image from "next/image";
import styles from "./CaseBattle.module.scss";
import ImagePaths from "../constants/ImagePaths";
import SortButton from "../components/SortButton/SortButton";
import FillButton from "../components/commen/FilledButton/FilledButton";
import BattleListItem from "./components/BattleListItem";

const CaseBattlePage = () => {
  return (
    <div className={styles.caseBattlePage}>
      {/* Header  */}
      <div className={styles.pageHeader}>
        <Image
          src={ImagePaths.caseBattle.arrowLeft}
          alt="arrow-left"
          width={20}
          height={20}
        />

        <span>Home</span>
      </div>

      {/* List */}
      <div className={styles.pageContent}>
        <div className={styles.listHeader}>
          <div className={styles.title}>
            <h1>Case Battle</h1>
            <h5>Create a case battle or join into battles below</h5>
          </div>
          <div className={styles.actions}>
            <SortButton />
            <FillButton
              title="Create Battle"
              iconSrc={ImagePaths.icons.plusCircle}
              height={44}
              width={200}
            />
          </div>
        </div>
        <BattleListItem />
        <BattleListItem />
        <BattleListItem />
        <BattleListItem />
        {/* In Progress */}
        <h1
          style={{ fontSize: "24px", fontWeight: 600, margin: "24px 0 12px 0" }}
        >
          Battles in Progress
        </h1>
        <BattleListItem inProgress={true} />
        <BattleListItem inProgress={true} />
        <BattleListItem inProgress={true} />
      </div>
    </div>
  );
};

export default CaseBattlePage;
