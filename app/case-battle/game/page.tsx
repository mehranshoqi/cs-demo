import ImagePaths from "@/app/constants/ImagePaths";
import CaseBattleHeader from "./components/CaseBattleHeader";
import CaseBattleComponent from "./components/CaseBattle";
import CaseBattleRoulette from "./components/CaseBattleRoulette";
import CaseBattlePlayers from "./components/CaseBattlePlayers";
import CaseBattleRoulette2 from "./components/CaseBattleRoulette2";

import Image from "next/image";
import BattleLoading from "./components/BattleLoading";
import BattleWinner from "./components/BattleWinner";

export default function BattlePage() {
  const itemCount: number = 6;
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
      className="text-white flex flex-col items-center gap-4 mb-10 pt-10 min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-6 lg:px-8"
    >
      <Image
        style={{ position: "absolute", top: "-60px" }}
        src={ImagePaths.caseBattle.background}
        alt="icon"
        width={2000}
        height={2000}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1340px",
        }}
      >
        {/* Top items */}
        <CaseBattleHeader />
        {/* Case Battle */}
        <CaseBattleComponent />

        <div style={{ height: "40px" }}></div>

        {/* Case Battle Roulette */}
        {/* <CaseBattleRoulette /> */}
        <CaseBattleRoulette2 itemCount={itemCount} />

        <div style={{ height: "28px" }}></div>
        {/* Case Battle Players */}
        <CaseBattlePlayers itemCount={itemCount} />
        <BattleLoading />
        <BattleWinner />
      </div>
    </div>
  );
}
