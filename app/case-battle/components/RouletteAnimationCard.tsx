"use client";

import animationData from "@/public/images/bg1.json";

import BattleAnimation from "./BattleAnimation";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "./Roulette.module.scss";
import { useMemo } from "react";

import { motion, AnimatePresence } from "framer-motion";
import MyLottiePlayer from "./MyLottiePlayer";
import SolidSvg from "@/app/components/commen/svgMask/svgMask";

interface RouletteAnimationCardProps {
  idx: number;
}

const RouletteAnimationCard: React.FC<RouletteAnimationCardProps> = ({
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
    for (let i = 0; i < 40; i++) {
      const randomIndex = Math.floor(Math.random() * gunImages.length);
      result.push(gunImages[randomIndex]);
    }
    return result;
  }, []);

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
          className={`relative z-10 ${styles.rouletteAnimation} item${idx + 1}`}
        >
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={i}
              className={`h-[150px] relative flex items-center justify-center ${
                i === 16 ? styles.itemScale : ""
              }`}
            >
              <div className={styles.itemImgs}>
                <div>
                  {i == 16 && idx == 1 && (
                    <div
                      style={{ position: "absolute", top: "-10%" }}
                      className={`${i === 16 ? styles.itemScale2 : undefined} ${
                        i === 16 ? styles.imgShow : styles.imgHide
                      }}`}
                    >
                      <MyLottiePlayer />
                      
                    </div>
                  )}

                  <Image
                    className={`${styles.blurImg} ${
                      i === 16 ? styles.itemScale2 : undefined
                    } ${i === 16 ? styles.imgShow : styles.imgHide}`}
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

export default RouletteAnimationCard;
