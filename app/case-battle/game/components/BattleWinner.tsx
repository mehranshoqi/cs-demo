import Image from "next/image";
import styles from "./Roulette2.module.scss";
import bg from "@/public/images/battle-bg.png";
import ImagePaths from "@/app/constants/ImagePaths";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";

const BattleWinner = () => {
  return (
    <div
      style={{
        height: "370px",
        width: "100%",
        // borderRadius: "12px",
        // padding: "2px 1px 1px 1px",
        // border: "solid 1px var(--Gray500)",
        //  background: "#1e0035",
        borderRadius: "20px",
        padding: "8px",
        position: "relative",
        //     boxShadow: `
        //   0 0 0 1px rgba(255, 255, 255, 0.05),
        //   0 0 10px rgba(100, 200, 255, 0.1),
        //   0 0 20px rgba(100, 200, 255, 0.08)
        // `,

        border: "1px solid rgba(255, 255, 255, 0.05)",

        overflow: "hidden",

        // borderImage: "linear-gradient(45deg, red, red, red, red, white) 1",
        borderImageRepeat: "no-repeat",
        // color: "#fff",
      }}
    >
      <div
        style={{
          borderRadius: "12px",
          width: "100%",
          height: "100%",
          // border: "solid 8px var(--Gray950)",
          display: "flex",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, var(--Fill-Color-FillPrimary700, rgba(76, 28, 150, 0.50)) 0%, var(--Fill-Color-FillPrimary900, rgba(26, 9, 51, 0.50)) 100%), rgba(0, 0, 0, 0.50)",
        }}
      >
        <div className={styles.winnerWrapper}>
          <h4 className={styles.winnerName}>Mehran Won!</h4>
          <div className={styles.winnerPrice}>
            <Image
              src={ImagePaths.icons.coin}
              alt="coin"
              width={24}
              height={24}
            />
            <div>0.10</div>
          </div>
          <FillButton
            title="Recreate Battle 12.44"
            iconSrc={ImagePaths.icons.refresh}
            iconColor="white"
            fontSize={16}
            fontWeight={600}
            iconRightSrc={ImagePaths.icons.coin}
          />
        </div>
{/* <OutlinedButton title="Replay" />
 */}
{/* <OutlinedButton title="Battle" /> */}
        <div className={styles.winnerActions}>

        </div>
      </div>
    </div>
  );
};

export default BattleWinner;
