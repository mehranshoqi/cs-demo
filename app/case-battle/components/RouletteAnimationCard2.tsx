"use client";

import animationData from "@/public/images/bg1.json";

import BattleAnimation from "./BattleAnimation";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "./Roulette2.module.scss";
import { useMemo } from "react";
import MyLottiePlayer from "./MyLottiePlayer";

interface RouletteAnimationCard2Props {
  idx: number;
}

const RouletteAnimationCard2: React.FC<RouletteAnimationCard2Props> = ({
  idx,
}) => {
  const gunImages = [
    ImagePaths.caseBattle.gun1,
    ImagePaths.caseBattle.gun2,
    ImagePaths.caseBattle.gun3,
    ImagePaths.caseBattle.gun4,
    ImagePaths.caseBattle.gun5,
    ImagePaths.caseBattle.gun6,
  ];

  const randomizedImages = useMemo(() => {
    const result = [];
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * gunImages.length);
      result.push(gunImages[randomIndex]);
    }
    return result;
  }, []);

  const randomXAnimation = Math.floor(Math.random() * 4);

  const targetIdx: number = 1;

  return (
    <div
      className={`h-full rounded-lg flex-1 relative  from-gray-950 via-gray-800 to-gray-950 ${styles.rouContainer}`}
    >
      <BattleAnimation className="w-full overflow-hidden h-full flex items-center justify-center">
        <div
          className="h-[100px] w-full  absolute top-0 left-0 right-0 z-20 rounded-t-lg"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        ></div>
        <div
          id="roulette-animation"
          className={`relative z-10 ${styles.rouletteAnimation} ${
            idx === randomXAnimation ? styles.itemX : styles[`item${idx + 1}`]
          }`}
        >
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={i}
              className={`h-[150px] relative flex items-center justify-center ${
                i === targetIdx ? styles[`itemScaleMain${idx + 1}`] : ""
              }`}
            >
              <div className={styles.itemImgs}>
                <div>
                  {/* {i == targetIdx && idx == 1 && (
                    <div
                      style={{ position: "absolute", top: "-10%" }}
                      className={`${i === targetIdx ? styles.itemScale2 : undefined} ${
                        i === targetIdx ? styles.imgShow : styles.imgHide
                      }}`}
                    > */}
                  {/* <MyLottiePlayer /> */}
                  {/* </div> */}
                  {/* )} */}
                  <Image
                    className={`${styles.blurImg} ${
                      i === targetIdx ? styles.itemScale2 : undefined
                    } ${i === targetIdx ? styles.imgShow : styles.imgHide} ${
                      styles[`itemScale2${idx + 1}`]
                    }`}
                    src={"/images/battle-item-bg.svg"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <Image
                  src={randomizedImages[i]}
                  alt=""
                  width={130}
                  height={49}
                  className="mx-auto w-[150px] z-30"
                  priority={i < 6}
                />
              </div>
              <div
                className={`${styles.itemInfo} ${
                  i === targetIdx ? styles.itemScale2 : undefined
                } ${i === targetIdx ? styles.imgShow : styles.imgHide} `}
                style={{ position: "absolute" }}
              >
                <span className={styles.itemTitle}>Emerlad</span>
                <span className={styles.itemDesc}>Titan Katowice 2014</span>
                <div className={styles.itemPrice}>
                  <Image
                    src={ImagePaths.icons.coin}
                    alt=""
                    width={12}
                    height={12}
                  />
                  <span>10.12</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="h-[100px] w-full absolute bottom-0 left-0 right-0 z-20 rounded-b-lg"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%);",
          }}
        ></div>
      </BattleAnimation>
    </div>
  );
};

export default RouletteAnimationCard2;
