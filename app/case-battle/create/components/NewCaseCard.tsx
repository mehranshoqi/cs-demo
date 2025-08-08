"use client";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../Create.module.scss";
import Image from "next/image";
import { useState } from "react";


const NewCaseCard: React.FC = ({}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`${styles.newCaseCard} gradientBorder btn`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          margin: "11px",
          borderRadius: "14px",
          border: `2px solid ${
            !isHovered
              ? "var(--Border-Color-BorderGray950, #060B15)"
              : "var(--Primary500)"
          }`,
          display: "flex",
          gap: "45px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          height: "100%",
          position: "relative",
          transition: "all .6s",
        }}
      >
        <Image
          src={ImagePaths.caseBattle.candooG}
          width={160}
          height={160}
          alt="Add Case"
          style={{ zIndex: "300" }}
          className={`${styles.baseImage} ${isHovered ? styles.hidden : ""}`}
        />
        <Image
          src={ImagePaths.caseBattle.candooP}
          width={160}
          height={160}
          alt="Add Case"
          style={{ zIndex: "300" }}
          className={`${styles.baseImage} ${!isHovered ? styles.hidden : ""}`}
        />
        <Image
          src={ImagePaths.caseBattle.candooMain}
          width={isHovered ? 110 : 102}
          height={isHovered ? 110 : 102}
          alt="Add Case"
          style={{ zIndex: "301", transition: "all .2s" }}
          className={`${styles.baseImage}`}
        />
        <Image
          src={ImagePaths.caseBattle.candoo1}
          width={82}
          height={82}
          alt="Add Case"
          style={{ zIndex: "303" }}
          className={`${styles.baseImage} ${isHovered ? styles.hidden : ""}`}
        />
        <Image
          src={ImagePaths.caseBattle.candoo2}
          width={82}
          height={82}
          alt="Add Case"
          style={{ zIndex: "303" }}
          className={`${styles.baseImage} ${!isHovered ? styles.hidden : ""}`}
        />
        {/* <Image
          src={ImagePaths.caseBattle.Add2}
          width={160}
          height={160}
          alt="Add Case Hover"
          className={`${styles.baseImage} ${!isHovered ? styles.hidden : ""}`}
        /> */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "var(--Text-Color-TextBodyGray300)",
            position: "absolute",
            zIndex: 1,
            top: "65%",
          }}
        >
          Add Case
        </h2>
      </div>
    </div>
  );
};

export default NewCaseCard;
