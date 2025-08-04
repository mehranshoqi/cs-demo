import GameHistoryItem from "./GameHistoryItem";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";
import ProfileRowDetails from "../ProfileRowDetails";

const GameHistoryView = () => {
    const gameHistoryData = [
        {
            gameType: "Cases",
            result: "LOST" as const,
            betAmount: 4.50,
            winAmount: 0.00,
            date: "April 23, 2024 10:15 AM"
        },
        {
            gameType: "Cases",
            result: "WON" as const,
            betAmount: 2.25,
            winAmount: 8.75,
            date: "April 22, 2024 09:30 AM"
        },
        {
            gameType: "Cases",
            result: "LOST" as const,
            betAmount: 4.50,
            winAmount: 0.00,
            date: "April 21, 2024 14:20 PM"
        },
        {
            gameType: "Cases",
            result: "WON" as const,
            betAmount: 1.50,
            winAmount: 12.00,
            date: "April 20, 2024 16:45 PM"
        }
    ];

    return (
        <div className={`${styles.viewContainer} flex flex-col gap-4`}>
            <ProfileRowDetails
                title="Game History"
                titleFontSize="24px"
                descFontSize="16px"
                desc="Track your gaming journey — view all your past games, wins, and losses here"
            />

            <div
                className={styles.border}
                style={{ margin: "var(--sds-size-space-300) 0 " }}
            ></div>

            {gameHistoryData.length > 0 ? (
                <div>
                    {gameHistoryData.map((item, index) => (
                        <GameHistoryItem
                            key={index}
                            gameType={item.gameType}
                            result={item.result}
                            betAmount={item.betAmount}
                            winAmount={item.winAmount}
                            date={item.date}
                            onClick={() => {
                                // TODO: Add modal or navigation for game details
                                console.log("Game history item clicked:", item);
                            }}
                        />
                    ))}
                </div>
            ) : (
                <div className="p-2.5 flex bg-[#121925] rounded-lg items-center justify-center gap-2">
                    <Image
                        src={ImagePaths.gameHistory.battle}
                        alt="battle"
                        width={20}
                        height={20}
                    />
                    <div>Your game history will appear here once you start playing</div>
                </div>
            )}
        </div>
    );
};

export default GameHistoryView;