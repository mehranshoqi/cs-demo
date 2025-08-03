"use client";

import React, { useState, useEffect } from "react";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "./DropDown2.module.scss";
import { useRef } from "react";
import Image from "next/image";
import { TransactionsFilters } from "@/app/types";
import FilterSelection from "../FilterSelection/FilterSelection";
import { useAuth } from "@/app/context/AuthContext";

interface DropDown2Props {
  items?: TransactionsFilters[];
}

const DropDown2: React.FC<DropDown2Props> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(["all"]);
  const [activeLabel, setActiveLabel] = useState<string>("All Transactions");

  const openDropDown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleDropDown = (active: boolean) => setIsDropdownOpen(active);

  const calculateFilterLabel = (filters: string[]) => {
    if (filters.includes("all")) {
      return "All Transactions";
    } else if (filters.length > 0) {
      return `Transactions (${filters.length})`;
    } else {
      return "Transactions";
    }
  };

  useEffect(() => {
    const newLabel = calculateFilterLabel(activeFilters);
    setActiveLabel(newLabel);
  }, [activeFilters]);

  return (
    <div className={styles.dropDownWrapper}>
      <HeaderDropDown
        title={activeLabel}
        onClick={openDropDown}
        onToggle={toggleDropDown}
      />
      {isDropdownOpen && (
        <UserMenuDropdown
          onClose={closeDropdown}
          setNew={(newItems) => {
            console.log(`Set New`, newItems);
            setActiveFilters(newItems);
          }}
          activeFilters={activeFilters}
        />
      )}
    </div>
  );
};

export default DropDown2;

interface HeaderDropDownProps {
  title: string;
  imageSrc?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onToggle: (active: boolean) => void;
}

const HeaderDropDown = ({
  title,
  imageSrc,
  onClick,
  onToggle,
}: HeaderDropDownProps) => {
  return (
    <div
      className={styles.dropdown}
      onClick={onClick}
      onMouseEnter={() => onToggle(true)}
    >
      <span className={styles.title}>{title}</span>
      <Image
        src={ImagePaths.icons.arrowDown}
        alt="arrow"
        width={12}
        height={8}
        className={styles.avatar}
      />
    </div>
  );
};

interface UserMenuDropdownProps {
  onClose: () => void;
  setNew: (newItems: string[]) => void;
  activeFilters: string[];
}

const UserMenuDropdown: React.FC<UserMenuDropdownProps> = ({
  onClose,
  setNew,
  activeFilters,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { userDisplayName } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={dropdownRef} className={styles.menuContainer}>
      <FilterSelection
        filters={[
          { id: "all", title: "All Transactions" },
          { id: "crypto", title: "Crypto" },
          { id: "daily", title: "Daily Cases" },
          { id: "fiat", title: "Fiat" },
        ]}
        itemPadding="6px"
        initialSelected={activeFilters}
        onSelectionChange={setNew}
        allowMultipleSelection={true}
      />
    </div>
  );
};
