import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";
import ProfileEditModal from "../profileAndSecurity/ProfileEditModal";
import CaseDetails from "./CaseDetails";
import BattleDetails from "./BattleDetails";
import RouletteDetails from "./RouletteDetails";
import CrashDetails from "./CrashDetails";

interface GameHistoryItemProps {
    gameType: string;
    state: "WON" | "LOST";
    betAmount: number;
    winAmount: number;
    date: string;
}

const GameHistoryItem: React.FC<GameHistoryItemProps> = ({
    gameType,
    state,
    betAmount,
    winAmount,
    date
}) => {
    const { openModal, closeModal } = useModal();

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

    const getGameDetailsComponent = (gameType: string) => {
        switch (gameType.toLowerCase()) {
            case "cases":
                return <CaseDetails />;
            case "battles":
                return <BattleDetails />;
            case "roulette":
                return <RouletteDetails />;
            case "crash":
                return <CrashDetails />;
            default:
                return <CaseDetails />; // fallback
        }
    };

    return (
        <div
            className={`${styles.transItem} btn`}
            onClick={() => {
                openModal(
                    <ProfileEditModal
                        title={`${gameType}`}
                        onClose={closeModal}
                        buttonTitle="Verify"
                        primaryBtn={false}
                        content={getGameDetailsComponent(gameType)}
                    />,
                    "400px"
                );
            }}
        >
            <Image
                src={getGameIcon(gameType)}
                width={20}
                height={20}
                alt=""
            />

            <h3 className={styles.transTitle}>{gameType}</h3>

            <div className={styles.badgeWrapper}>
                <div className={`${styles.transStatusBadge} ${state === "WON" ? styles.complete : styles.withdraw}`}>
                    {state}
                </div>
            </div>

            <div className={styles.coin}>
                <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
                <h3>{winAmount.toFixed(2)}</h3>
            </div>
            <h4 className={styles.date}>{date}</h4>
        </div>
    );
};

export default GameHistoryItem; 