import { useState } from "react";
import styles from "../../Profile.module.scss";
import ProfileRowDetails from "../ProfileRowDetails";
import ImagePaths from "@/app/constants/ImagePaths";
import Image from "next/image";
import EmptyListItem from "../EmptyListItem";
import TradesItem from "./TradesItem";
import DropDown2 from "@/app/components/commen/DropDown2/DropDown2";
import PaginationController from "../PaginationContoller";

const TradesView = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>(["all"]);

    const tradesData = [
        {
            title: "AK-47",
            type: "In Process" as const,
            amount: 45.50,
            date: "April 23, 2024 10:15 AM"
        },
        {
            title: "AK-47",
            type: "Buy" as const,
            amount: 45.50,
            date: "April 23, 2024 10:15 AM"
        },
        {
            title: "AK-47",
            type: "Sell" as const,
            amount: 120.75,
            date: "April 23, 2024 10:15 AM"
        },
        {
            title: "AK-47",
            type: "Buy" as const,
            amount: 2500.00,
            date: "April 23, 2024 10:15 AM"
        },
        {
            title: "AK-47",
            type: "Sell" as const,
            amount: 850.25,
            date: "April 23, 2024 10:15 AM"
        }
    ];

    const handleFilterChange = (filters: string[]) => {
        setSelectedFilters(filters);
        console.log("Selected filters:", filters);
    };

    const filteredTradesData = tradesData.filter(item => {
        if (selectedFilters.includes("all")) {
            return true;
        }
        return selectedFilters.includes(item.type.toLowerCase());
    });

    return (
        <div className={`${styles.viewContainer} flex flex-col gap-4`}>
            <div className="flex items-center justify-between gap-2">
                <ProfileRowDetails
                    title="Trades"
                    titleFontSize="24px"
                    descFontSize="16px"
                    desc="Keep track of every item you've bought or sold in the marketplace"
                />

                <div className={`${styles.transactionsFilter} relative top-3`}>
                    <DropDown2
                        filters={[
                            { id: "all", title: "All Trades" },
                            { id: "buy", title: "Buy" },
                            { id: "sell", title: "Sell" },
                        ]}
                        onFilterChange={handleFilterChange}
                        label="All Trades"
                    />
                </div>
            </div>

            <div
                className={styles.border}
                style={{ margin: "var(--sds-size-space-300) 0 " }}
            ></div>




            <div className="flex flex-col">
                <EmptyListItem>
                    <Image
                        src={ImagePaths.icons.trades}
                        width={20}
                        height={20}
                        alt="icon"
                    />
                    <h3>No trades yet — hit the marketplace to get started </h3>
                </EmptyListItem>
                {filteredTradesData.map((item, index) => (
                    <TradesItem
                        key={index}
                        title={item.title}
                        type={item.type}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
            </div>


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

export default TradesView; 