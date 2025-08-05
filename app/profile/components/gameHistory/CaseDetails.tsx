import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";

const CaseDetails: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 text-center">
            <div className={styles.gameHistoryDate}>Made on April 23, 2024 10:15 AM</div>
            <div className={styles.gameHistoryCaseDetails}>
                <div className={styles.title}>Arya Case</div>
                <Image
                    src={ImagePaths.gameHistory.aryaCase}
                    width={200}
                    height={150}
                    alt=""
                />
                <div className={styles.sticker}>Sticker</div>
                <div className={styles.supercharger}>Supercharger</div>
            </div>
        </div>
    );
};

export default CaseDetails; 