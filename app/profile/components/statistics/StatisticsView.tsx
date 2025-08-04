import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import ProfileRowDetails from "../ProfileRowDetails";
import Image from "next/image";
import SolidSvg from "@/app/components/commen/svgMask/svgMask";
import StatisticsItem from "./StatisticsItem";

const StatisticsView = () => {
    const statisticsData = [
        {
            title: "Opening Cases",
            amount: 3.50
        },
        {
            title: "Battles",
            amount: 12.75
        },
        {
            title: "Roulette",
            amount: 8.25
        },
        {
            title: "Crash",
            amount: 5.00
        }
    ];

    return (
        <div className={`${styles.viewContainer} flex flex-col`}>
            <ProfileRowDetails
                title="Statistics"
                titleFontSize="24px"
                descFontSize="16px"
                desc="Detailed breakdown of your in-game performance"
            />

            <div className="flex mt-6 items-center gap-4">
                <div className="text-gray-400 font-semibold text-sm">Total Bets</div>
                <div className="flex items-center gap-2">
                    <Image
                        src={ImagePaths.icons.coin}
                        alt="coin"
                        width={20}
                        height={20}
                    />
                    <div>29.50</div>
                </div>
            </div>

            <div
                className={styles.border}
                style={{ margin: "var(--sds-size-space-300) 0 " }}
            ></div>

            {statisticsData.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {statisticsData.map((item, index) => (
                        <StatisticsItem
                            key={index}
                            title={item.title}
                            amount={item.amount}
                        />
                    ))}
                </div>
            ) : (
                <div className="p-2.5 flex bg-[#121925] rounded-lg items-center justify-center gap-2">
                    <SolidSvg
                        path={ImagePaths.gameHistory.battle}
                        width={20}
                        height={20}
                        color="#ffffff"
                    />
                    <div>No statistics yet! Start playing to see your performance stats grow.</div>
                </div>
            )}
        </div>
    );
};

export default StatisticsView; 