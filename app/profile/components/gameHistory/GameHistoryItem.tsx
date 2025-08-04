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
            className={`${styles.transItem} btn`}
            onClick={onClick}
        >
            <SolidSvg
                path={getGameIcon(gameType)}
                width={20}
                height={20}
                color="#7F8D9F"
            />

            <h3 className={`${styles.transTitle} text-white ml-2`}>{gameType}</h3>

            <div className={styles.badgeWrapper}>
                <div className={`${styles.transStatusBadge} ${result === "WON" ? styles.complete : styles.withdraw}`}>
                    {result}
                </div>
            </div>

            <div className={styles.coin}>
                <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
                <h3>{winAmount.toFixed(2)}</h3>
            </div>

            <div className={styles.coin}>
                <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
                <h3>{betAmount.toFixed(2)}</h3>
            </div>

            <h4 className={styles.date}>{date}</h4>
        </div>
    );
};

export default GameHistoryItem; 