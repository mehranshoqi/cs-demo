import ImagePaths from "@/app/constants/ImagePaths";
import Image from "next/image";

interface StatisticsItemProps {
    title: string;
    amount: number;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({ title, amount }) => {
    return (
        <div className="flex p-2.5 bg-[#121925] rounded-lg items-center justify-between">
            <div>{title}</div>
            <div className="flex items-center gap-2">
                <Image
                    src={ImagePaths.icons.coin}
                    alt="coin"
                    width={20}
                    height={20}
                />
                <div>{amount.toFixed(2)}</div>
            </div>
        </div>
    );
};

export default StatisticsItem; 