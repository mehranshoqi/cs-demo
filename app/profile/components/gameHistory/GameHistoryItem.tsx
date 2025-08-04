import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
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
    return (
        <div
            className={`${styles.transItem} btn`}
            onClick={onClick}
        >
            <Image
                src={ImagePaths.gameHistory.cases}
                width={20}
                height={20}
                alt=""
            />

            <h3 className={styles.transTitle}>{gameType}</h3>

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