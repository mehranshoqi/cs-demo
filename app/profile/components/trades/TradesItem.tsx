import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";

interface TradesItemProps {
    title: string;
    type: "Buy" | "Sell";
    amount: number;
    date: string;
}

const TradesItem: React.FC<TradesItemProps> = ({ title, type, amount, date }) => {
    return (
        <div className={`${styles.transItem} btn`}>
            <h3 className={styles.transTitle}>{title}</h3>

            <div className={styles.badgeWrapper}>
                <div className={`${styles.transStatusBadge} ${type === "Buy" ? styles.complete : styles.withdraw}`}>
                    {type}
                </div>
            </div>

            <div className={`${styles.coin} w-[140px]`}>
                <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
                <h3>{amount.toFixed(2)}</h3>
            </div>
            <h4 className={styles.date}>{date}</h4>
        </div>
    );
};

export default TradesItem; 