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
            <div className="border border-gray-800 rounded-full mb-3 px-4 py-2 flex justify-between">
                <div className="font-bold text-gray-100">You Received</div>
                <div className="text-[#80BD29] flex items-center gap-2 font-bold">
                    <Image
                        src={ImagePaths.icons.coin}
                        width={20}
                        height={20}
                        alt=""
                    />
                    4.50
                </div>
            </div>
        </div>
    );
};

export default CaseDetails; 