import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";

interface StatisticsItemProps {
    title: string;
    amount: number;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({ title, amount }) => {
    return (
        <div className={`${styles.transItem} btn`}>
            <div className="font-bold text-gray-300 text-sm">{title}</div>
            <div className="flex items-center gap-2 justify-end">
                <Image
                    src={ImagePaths.icons.coin}
                    alt="coin"
                    width={20}
                    height={20}
                />
                <div>{amount.toFixed(2)}</div>
            </div>
        </div >
    );
};

export default StatisticsItem; 