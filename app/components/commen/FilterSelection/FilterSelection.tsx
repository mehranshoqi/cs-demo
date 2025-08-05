// components/FilterSelection.tsx
import React, { useState } from "react";
import Image from "next/image";
import styles from "./FilterSelection.module.scss";

export interface FilterItem {
  id: string;
  iconSrc?: string;
  title: string;
  description?: string;
}

interface FilterSelectionProps {
  filters: FilterItem[];
  onSelectionChange: (selectedIds: string[]) => void;
  initialSelected?: string[];
  itemPadding?: string;
  allowMultipleSelection?: boolean;
}

const FilterSelection: React.FC<FilterSelectionProps> = ({
  filters,
  onSelectionChange,
  initialSelected = [],
  allowMultipleSelection = true,
  itemPadding,
}) => {
  const [selectedFilters, setSelectedFilters] =
    useState<string[]>(initialSelected);

  const handleCheckboxChange = (id: string) => {
    let newSelected: string[];
    if (allowMultipleSelection) {
      if (selectedFilters.includes(id)) {
        newSelected = selectedFilters.filter((filterId) => filterId !== id);
      } else {
        newSelected = [...selectedFilters, id];
      }
    } else {
      newSelected = selectedFilters.includes(id) ? [] : [id];
    }
    setSelectedFilters(newSelected);
    onSelectionChange(newSelected);
  };

  return (
    <div className={styles.filterContainer}>
      {filters.map((filter) => {
        const isActive = selectedFilters.includes(filter.id);
        const simpleOption = !(filter.description && filter.iconSrc);
        const itemClassName = `${styles.filterItem} ${
          isActive ? styles.active : ""
        }`;

        return (
          <div
            style={{ padding: itemPadding }}
            key={filter.id}
            className={`${itemClassName} ${
              simpleOption ? styles.simpleOption : undefined
            }`}
            onClick={() => handleCheckboxChange(filter.id)}
          >
            <div className={styles.checkboxWrapper}>
              <input
                type={allowMultipleSelection ? "checkbox" : "radio"}
                id={filter.id}
                checked={isActive}
                onChange={() => handleCheckboxChange(filter.id)}
                className={styles.hiddenCheckbox}
              />
              <span className={styles.customCheckbox}>
                {isActive && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L19 8"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>

            <div className={styles.iconAndText}>
              {filter.iconSrc && (
                <Image
                  src={filter.iconSrc}
                  alt={filter.title + " icon"}
                  width={20}
                  height={20}
                  className={styles.filterIcon}
                />
              )}
              <div className={styles.textWrapper}>
                <span className={styles.filterTitle}>{filter.title}</span>
                {filter.description && (
                  <span className={styles.filterDescription}>
                    {filter.description}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterSelection;
