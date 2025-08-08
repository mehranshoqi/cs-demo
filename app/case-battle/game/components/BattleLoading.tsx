import Image from "next/image";
import styles from "./Roulette2.module.scss";
import bg from "@/public/images/battle-bg.png";
import ImagePaths from "@/app/constants/ImagePaths";

const BattleLoading = () => {
  return (
    <div
      style={{
        height: "370px",
        width: "100%",
        borderRadius: "12px",
        padding: "8px",
        border: "1px solid #7F8D9F",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          borderRadius: "12px",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          background:
            "radial-gradient(60.85% 68% at 50% 32%, var(--Background-Color-BgGray900, #121925) 0%, var(--Background-Color-BgGray950, #060B15) 100%)",
        }}
      >
        <Image
          src={ImagePaths.caseBattle.battleLoading}
          width={314}
          height={50}
          alt=""
        />
      </div>
    </div>
  );
};

export default BattleLoading;
