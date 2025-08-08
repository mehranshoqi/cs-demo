import Image from "next/image";
import styles from "./Create.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import Chips from "@/app/components/commen/Chips/Chips";
import NewCaseCard from "./components/NewCaseCard";
import CaseCard from "./components/CaseCard";

const CreateBattlePage: React.FC = ({}) => {
  // const battleMode: Chip[] = [
  //   { label: "All Skins", iconSrc: "/images/knife.svg" },
  //   { label: "Pistols", iconSrc: "/images/pistol.svg" },
  //   { label: "Mid-Tier", iconSrc: "/images/mid-tier.svg" },
  //   { label: "Rifles", iconSrc: "/images/rifles.svg" },
  //   { label: "Knives", iconSrc: "/images/knife.svg" },
  //   { label: "Gloves", iconSrc: "/images/gloves.svg" },
  //   { label: "Cases", iconSrc: "/images/cases.svg" },
  // ];

  return (
    <div
      style={{
        width: "100vw",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        // backgroundColor: "orange",
      }}
    >
      <div className={styles.wrapper}>
        {/* Header  */}
        <div className={styles.pageHeader}>
          <Image
            src={ImagePaths.caseBattle.arrowLeft}
            alt="arrow-left"
            width={20}
            height={20}
          />

          <span>Back</span>
        </div>

        {/* List */}
        <div className={styles.pageContent}>
          <div className={styles.listHeader}>
            <div className={styles.title}>
              <h1>Case Battle</h1>
              <h5>To create a battle you have to add cases first</h5>
            </div>
            <div className={styles.headerActions}>
              <div className={styles.actionsInfo}>
                <span className={styles.actionsInfoTitle}>Rounds:</span>
                <span className={styles.actionsInfoValue}>5</span>
                <span className={styles.actionsInfoTitle}>Total Cost:</span>
                <span className={styles.actionsInfoValue}>6,343,350.00</span>
              </div>
              <FillButton
                title="Start Battle"
                iconSrc={ImagePaths.caseBattle.battleIcon}
                fontSize={16}
                fontWeight={600}
                height={44}
                width={300}
              />
            </div>
          </div>
        </div>
        {/* Filters */}
        {/* <div className={styles.filters}>
        <div className={styles.chips}> */}
        {/* <Chips
            chips={chipData}
            activeChip={activeFilter}
            onChipClick={handleFilterChange}
          />
          <Chips
            chips={chipData}
            activeChip={activeFilter}
            onChipClick={handleFilterChange}
          /> */}
        {/* </div>
      </div> */}

        {/* cases */}
        <div className={styles.cases}>
          <NewCaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
        </div>
      </div>
    </div>
  );
};

export default CreateBattlePage;
