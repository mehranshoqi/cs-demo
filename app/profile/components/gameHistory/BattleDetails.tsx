import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";

const BattleDetails: React.FC = () => {
    return (
        <div className={styles.cryptoDepositDetails}>
            <h5>Made on April 23, 2024 10:15 AM</h5>
            <div className={styles.cryptoDetails}>
                <div className={styles.method}>
                    <div>1v1</div>
                    <div className={styles.viewBtn}>View</div>
                </div>
            </div>
            <div className={styles.transPrice}>
                <span>You Lost</span>
                <Image src={ImagePaths.icons.coin} width={20} height={20} alt="item" />
                <h5 className="!text-[#ED4438]">3.24</h5>
            </div>
            <div style={{ height: "var(--sds-size-space-300)" }}></div>
        </div>
    );
};

export default BattleDetails; 