import ImagePaths from "@/app/constants/ImagePaths";
import Image from "next/image";

interface StatisticsItemProps {
    title: string;
    amount: number;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({ title, amount }) => {
    return (
        <div className="grid grid-cols-2 p-2.5 bg-[#121925] rounded-lg items-center gap-4">
            <div className="truncate">{title}</div>
            <div className="flex items-center gap-2 justify-end">
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