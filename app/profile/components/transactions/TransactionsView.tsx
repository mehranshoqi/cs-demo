import { useState } from "react";
import styles from "../../Profile.module.scss";

import { useModal } from "@/app/context/ModalContext";
import ProfileRowDetails from "../ProfileRowDetails";
import DropDown2 from "@/app/components/commen/DropDown2/DropDown2";
import TransactionItem from "./TransactionItem";
import EmptyTransList from "./EmptyTransList";
import PaginationController from "../PaginationContoller";

const TransactionsView = () => {
  const { openModal, closeModal } = useModal();
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["all"]);

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
    console.log("Selected transaction filters:", filters);
  };

  return (
    <div className={styles.viewContainer}>
      <ProfileRowDetails
        title="Transactions"
        titleFontSize="24px"
        descFontSize="16px"
        desc="Stay on top of your loot — view all your transactions and trades here"
      />

      <div className={styles.transactionsFilter}>
        <DropDown2
          filters={[
            { id: "all", title: "All Transactions" },
            { id: "crypto", title: "Crypto" },
            { id: "daily", title: "Daily Cases" },
            { id: "fiat", title: "Fiat" },
          ]}
          onFilterChange={handleFilterChange}
          label="All Transactions"
        />
      </div>

      <div
        className={styles.border}
        style={{ margin: "var(--sds-size-space-300) 0 " }}
      ></div>

      <EmptyTransList />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />

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

export default TransactionsView;
