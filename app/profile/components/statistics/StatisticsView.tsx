import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import ProfileRowDetails from "../ProfileRowDetails";
import Image from "next/image";
import StatisticsItem from "./StatisticsItem";
import EmptyListItem from "../EmptyListItem";

const StatisticsView = () => {
    const statisticsData = [
        {
            title: "Opening Cases",
            amount: 3.50
        },
        {
            title: "Battles",
            amount: 3.50
        },
        {
            title: "Roulette",
            amount: 3.50
        },
        {
            title: "Crash",
            amount: 3.50
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


            <EmptyListItem>
                <Image
                    src={ImagePaths.icons.statistics}
                    width={20}
                    height={20}
                    alt="icon"
                />
                <h3>No statistics yet! Start playing to see your performance stats grow. </h3>
            </EmptyListItem>

            <div className="flex flex-col">
                {statisticsData.map((item, index) => (
                    <StatisticsItem
                        key={index}
                        title={item.title}
                        amount={item.amount}
                    />
                ))}
            </div>

        </div>
    );
};

export default StatisticsView; 