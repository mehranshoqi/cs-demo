import ImagePaths from "@/app/constants/ImagePaths";
import CaseBattleHeader from "./components/CaseBattleHeader";
import CaseBattleComponent from "./components/CaseBattle";
import CaseBattleRoulette from "./components/CaseBattleRoulette";
import CaseBattlePlayers from "./components/CaseBattlePlayers";

export default function CaseBattle() {
    return (
        <div
            className="text-white flex flex-col items-center gap-4 mb-10 pt-10 min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-6 lg:px-8"
            style={{ backgroundImage: `url(${ImagePaths.caseBattle.background})` }}
        >
            {/* Top items */}
            {/* <CaseBattleHeader /> */}

            {/* Case Battle */}
            {/* <CaseBattleComponent /> */}

            {/* Case Battle Roulette */}
            <CaseBattleRoulette />

            {/* Case Battle Players */}
            {/* <CaseBattlePlayers /> */}
        </div>
    );
} 