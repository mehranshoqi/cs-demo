import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import SolidSvg from "@/app/components/commen/svgMask/svgMask";
import Image from "next/image";

interface GameHistoryItemProps {
    gameType: string;
    result: "WON" | "LOST";
    betAmount: number;
    winAmount: number;
    date: string;
    onClick?: () => void;
}

const GameHistoryItem: React.FC<GameHistoryItemProps> = ({
    gameType,
    result,
    betAmount,
    winAmount,
    date,
    onClick
}) => {
    const getGameIcon = (gameType: string) => {
        switch (gameType.toLowerCase()) {
            case "cases":
                return ImagePaths.gameHistory.cases;
            case "battles":
                return ImagePaths.gameHistory.battle;
            case "roulette":
                return ImagePaths.gameHistory.roulette;
            case "crash":
                return ImagePaths.gameHistory.crash;
            default:
                return ImagePaths.gameHistory.cases; // fallback
        }
    };

    return (
        <div
            className="grid grid-cols-5 p-2.5 bg-[#121925] rounded-lg items-center gap-4 btn"
            onClick={onClick}
        >
            <div className="flex items-center gap-2">
                <SolidSvg
                    path={getGameIcon(gameType)}
                    width={20}
                    height={20}
                    color="#7F8D9F"
                />
                <div className="truncate">{gameType}</div>
            </div>

            <div className={`px-2 py-1 text-xs rounded w-fit ${result === "WON" ? "bg-green-900 text-green-400" : "bg-red-900 text-red-400"}`}>
                {result}
            </div>

            <div className="flex items-center gap-2">
                <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
                <div>{winAmount.toFixed(2)}</div>
            </div>

            <div className="flex items-center gap-2">
                <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
                <div>{betAmount.toFixed(2)}</div>
            </div>

            <div className="text-xs text-gray-400 truncate">{date}</div>
        </div>
    );
};

export default GameHistoryItem; 