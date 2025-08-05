import { useState } from "react";
import GameHistoryItem from "./GameHistoryItem";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";
import ProfileRowDetails from "../ProfileRowDetails";
import DropDown2 from "@/app/components/commen/DropDown2/DropDown2";
import PaginationController from "../PaginationContoller";
import EmptyListItem from "../EmptyListItem";

const GameHistoryView = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>(["all"]);

    const gameHistoryData = [
        {
            gameType: "Cases",
            state: "LOST" as const,
            betAmount: 4.50,
            winAmount: 0.00,
            date: "April 23, 2024 10:15 AM"
        },
        {
            gameType: "Battles",
            state: "WON" as const,
            betAmount: 2.25,
            winAmount: 8.75,
            date: "April 23, 2024 10:15 AM"
        },
        {
            gameType: "Roulette",
            state: "LOST" as const,
            betAmount: 4.50,
            winAmount: 0.00,
            date: "April 23, 2024 10:15 AM"
        },
        {
            gameType: "Crash",
            state: "WON" as const,
            betAmount: 1.50,
            winAmount: 12.00,
            date: "April 23, 2024 10:15 AM"
        },
        {
            gameType: "Cases",
            state: "WON" as const,
            betAmount: 3.00,
            winAmount: 15.50,
            date: "April 23, 2024 10:15 AM"
        },
        {
            gameType: "Battles",
            state: "LOST" as const,
            betAmount: 5.75,
            winAmount: 0.00,
            date: "April 23, 2024 10:15 AM"
        }
    ];

    const handleFilterChange = (filters: string[]) => {
        setSelectedFilters(filters);
        console.log("Selected game history filters:", filters);
    };

    return (
        <div className={styles.viewContainer}>
            <ProfileRowDetails
                title="Game History"
                titleFontSize="24px"
                descFontSize="16px"
                desc="Track your gaming journey — view all your past games, wins, and losses here"
            />

            <div className={styles.transactionsFilter}>
                <DropDown2
                    filters={[
                        { id: "all", title: "All Games" },
                        { id: "cases", title: "Cases" },
                        { id: "battles", title: "Battles" },
                        { id: "roulette", title: "Roulette" },
                        { id: "crash", title: "Crash" },
                    ]}
                    onFilterChange={handleFilterChange}
                    label="All Games"
                />
            </div>

            <div
                className={styles.border}
                style={{ margin: "var(--sds-size-space-300) 0 " }}
            ></div>

            <EmptyListItem>
                <Image
                    src={ImagePaths.gameHistory.battle}
                    width={20}
                    height={20}
                    alt="icon"
                />
                <h3>Your game history will appear here once you start playing</h3>
            </EmptyListItem>
            <>
                {gameHistoryData.map((item, index) => (
                    <GameHistoryItem
                        key={index}
                        gameType={item.gameType}
                        state={item.state}
                        betAmount={item.betAmount}
                        winAmount={item.winAmount}
                        date={item.date}
                    />
                ))}
            </>


            <div style={{ height: "var(--sds-size-space-1200)" }}></div>
            <div>
                <PaginationController
                    onPageChange={(i) => { }}
                    itemsPerPage={5}
                    totalItems={60}
                />
            </div>
        </div>
    );
};

export default GameHistoryView;