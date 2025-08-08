import Image from "next/image";
import styles from "./BattleListItem.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import { Key } from "react";

interface BattleListItemProps {
  inProgress?: boolean;
}

const BattleListItem: React.FC<BattleListItemProps> = ({
  inProgress = false,
}) => {
  const game1Teams = [
    ImagePaths.caseBattle.avatar1,
    ImagePaths.caseBattle.avatar2,
  ];
  const game2Teams = [
    ImagePaths.caseBattle.avatar1,
    ImagePaths.caseBattle.avatar2,
  ];
  const game3Teams = [
    ImagePaths.caseBattle.avatar2,
    ImagePaths.caseBattle.avatar4,
  ];

  const stages = [
    ImagePaths.caseBattle.stage1,
    ImagePaths.caseBattle.stage1,
    ImagePaths.caseBattle.stage1,
    ImagePaths.caseBattle.stage1,
  ];

  const meTeam = [ImagePaths.caseBattle.avatarx];

  const teams = [game1Teams, game2Teams, game3Teams, meTeam];

  return (
    <div className={styles.wrapper}>
      <div className={styles.peoples}>
        <div className={styles.labels}>
          <Image
            className={styles.labelIcon}
            src={ImagePaths.caseBattle.flash}
            width={16}
            height={16}
            alt="icon"
          />
          <h5 className={styles.labelTitle}>Fast Spin</h5>
          <Image
            className={styles.labelIcon}
            src={ImagePaths.caseBattle.equal}
            width={16}
            height={16}
            alt="icon"
          />
          <h5 className={styles.labelTitle}>Equality</h5>
          <Image
            className={styles.labelIcon}
            src={ImagePaths.caseBattle.crown}
            width={16}
            height={16}
            alt="icon"
          />
          <h5 className={styles.labelTitle}>Jackpot</h5>
          <Image
            className={styles.labelIcon}
            src={ImagePaths.caseBattle.grinTongueWink}
            width={16}
            height={16}
            alt="icon"
          />
          <h5 className={styles.labelTitle}>Madness</h5>
        </div>

        <div className={styles.teams}>
          {teams.map((i, idx) => {
            return (
              <div key={idx} style={{ display: "flex", flexDirection: "row" }}>
                {idx != 0 ? (
                  <Image
                    className={styles.vs}
                    src={ImagePaths.caseBattle.playWith}
                    width={12}
                    height={8}
                    alt="icon"
                  />
                ) : (
                  <></>
                )}
                <TeamComponent members={i} />
              </div>
            );
          })}
        </div>
      </div>
      {/* SECOND */}
      <div className={styles.stages}>
        <div
          className={styles.stagesBg}
          style={{
            background: inProgress
              ? 'url("/images/case-battle/battleItemBg3.png") lightgray 50% / cover no-repeat;'
              : 'url("/images/case-battle/battleItemBg1.png") lightgray 50% / cover no-repeat;',
            mixBlendMode: inProgress ? "normal" : "overlay",
          }}
        ></div>
        <div className={styles.stagesItem}>
          {stages.map((i) => {
            return <StageComp key={i} img={i} inProgress={inProgress} />;
          })}
        </div>
      </div>

      {/* THIRD */}
      <div className={styles.info}>
        <div className={styles.subInfo}>
          <span>4</span>
          <Image
            src={ImagePaths.caseBattle.chest1}
            width={18}
            height={18}
            alt="avatar"
          />
        </div>
        <div className={styles.subInfo}>
          <span>4.55</span>
          <Image
            src={ImagePaths.icons.coin}
            width={18}
            height={18}
            alt="avatar"
          />
        </div>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <span> {inProgress ? "In battle... " : "Waiting for 1 player"}</span>

        <FillButton
          iconSrc={inProgress ? ImagePaths.icons.watch : undefined}
          disabled={false}
          iconColor="white"
          title={inProgress ? "View Battle" : "Join Battle"}
          height={44}
          width={150}
          filledColor={
            inProgress ? "rgba(255, 255, 255, 0.06)" : "var(--Primary500)"
          }
        />
      </div>
    </div>
  );
};

export default BattleListItem;

interface TeamComponentProps {
  members: string[];
}

const TeamComponent: React.FC<TeamComponentProps> = ({ members }) => {
  return (
    <div className={styles.members}>
      {members.map((i) => {
        return (
          <Image
            key={i}
            className={styles.labelIcon}
            src={i}
            width={32}
            height={32}
            alt="avatar"
          />
        );
      })}
    </div>
  );
};

interface StageCompProps {
  img: string;
  inProgress?: boolean;
  key: Key;
}

const StageComp: React.FC<StageCompProps> = ({ img, inProgress, key }) => {
  return (
    <div className={styles.stageImgWrapper} key={key}>
      <Image
        className={styles.stageBattleBGImg}
        src={ImagePaths.caseBattle.battleBG}
        width={63}
        height={63}
        alt="stage"
        style={{ opacity: inProgress ? 1 : 0 }}
      />

      <Image
        className={styles.stageImg}
        src={img}
        width={50}
        height={50}
        alt="stage"
      />
      <span className={styles.StageImgBadge}>1</span>
    </div>
  );
};
