import ImagePaths from "@/app/constants/ImagePaths";
import Image from "next/image";

interface TradesItemProps {
    title: string;
    type: "Buy" | "Sell";
    amount: number;
    date: string;
}

const TradesItem: React.FC<TradesItemProps> = ({ title, type, amount, date }) => {
    return (
        <div className="grid grid-cols-4 p-2.5 bg-[#121925] rounded-lg items-center gap-4">
            <div className="truncate">{title}</div>
            <div className={`px-2 py-1 text-xs rounded w-fit ${type === "Buy" ? "bg-green-900 text-green-400" : "bg-red-900 text-red-400"}`}>
                {type}
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src={ImagePaths.icons.coin}
                    alt="coin"
                    width={20}
                    height={20}
                />
                <div>{amount.toFixed(2)}</div>
            </div>
            <div className="text-xs text-gray-400">{date}</div>
        </div>
    );
};

export default TradesItem; 