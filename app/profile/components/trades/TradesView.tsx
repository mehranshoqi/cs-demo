import styles from "../../Profile.module.scss";
import ProfileRowDetails from "../ProfileRowDetails";
import ImagePaths from "@/app/constants/ImagePaths";
import Image from "next/image";
import SolidSvg from "@/app/components/commen/svgMask/svgMask";
import TradesItem from "./TradesItem";

const TradesView = () => {
    const tradesData = [
        {
            title: "AK-47",
            type: "Buy" as const,
            amount: 45.50,
            date: "April 23, 2024"
        },
        {
            title: "AK-47",
            type: "Sell" as const,
            amount: 120.75,
            date: "April 22, 2024"
        },
        {
            title: "AK-47",
            type: "Buy" as const,
            amount: 2500.00,
            date: "April 21, 2024"
        },
        {
            title: "AK-47",
            type: "Sell" as const,
            amount: 850.25,
            date: "April 20, 2024"
        }
    ];

    return (
        <div className={`${styles.viewContainer} flex flex-col gap-4`}>
            <ProfileRowDetails
                title="Trades"
                titleFontSize="24px"
                descFontSize="16px"
                desc="Keep track of every item you've bought or sold in the marketplace"
            />

            <div
                className={styles.border}
                style={{ margin: "var(--sds-size-space-300) 0 " }}
            ></div>

            <div className="flex flex-col gap-2">
                <div className="p-2.5 flex bg-[#121925] rounded-lg items-center justify-center gap-2">
                    <SolidSvg
                        path={ImagePaths.gameHistory.battle}
                        width={20}
                        height={20}
                        color="#ffffff"
                    />
                    <div>Your trades will appear here once you start trading</div>
                </div>
                {tradesData.map((item, index) => (
                    <TradesItem
                        key={index}
                        title={item.title}
                        type={item.type}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
            </div>

        </div>
    );
};

export default TradesView; 