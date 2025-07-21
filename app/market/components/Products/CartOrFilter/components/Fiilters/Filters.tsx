import React, { useState } from "react";
import DropdownFramer from "@/app/components/commen/DropDown/DropDown";
import ExpandableFramer from "@/app/components/commen/Expandable/Expandable";
import PriceRangeInput from "@/app/components/commen/PriceRange/PriceRangeInput";
import styles from "./Filters.module.scss";
import FilterSelection from "@/app/components/commen/FilterSelection/FilterSelection";
import filterOptions from "@/app/constants/filter-data";
import floatOptions from "@/app/constants/float-data";
import deliveryOptions from "@/app/constants/delivery-data";
import ColorPicker from "@/app/components/commen/ColorPicker/ColorPicker";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";
import { FilterModel } from "../../../../../../types";
import ImagePaths from "@/app/constants/ImagePaths";

interface FiltersProps {
  onFiltersChange: (filters: FilterModel) => void;
  initialFilters?: FilterModel;
}

const Filters: React.FC<FiltersProps> = ({
  onFiltersChange,
  initialFilters = {
    priceRange: { min: null, max: null },
    relativeToMarketPrice: [],
    floatValue: [],
    delivery: [],
    colors: [],
  },
}) => {
  const [currentFilters, setCurrentFilters] =
    useState<FilterModel>(initialFilters);

  const updateFilters = (newPartialFilters: Partial<FilterModel>) => {
    const updatedModel = { ...currentFilters, ...newPartialFilters };
    setCurrentFilters(updatedModel);
    onFiltersChange(updatedModel);
  };

  const handleWeaponChange = (selectedWeapon: string) => {
    updateFilters({ weapon: selectedWeapon });
  };

  const handlePriceRangeConfirm = (min: number | null, max: number | null) => {
    updateFilters({ priceRange: { min, max } });
  };

  const handleRelativeToMarketPriceChange = (selectedItems: string[]) => {
    updateFilters({ relativeToMarketPrice: selectedItems });
  };

  const handleFloatValueChange = (selectedItems: string[]) => {
    updateFilters({ floatValue: selectedItems });
  };

  const handleDeliveryChange = (selectedItems: string[]) => {
    updateFilters({ delivery: selectedItems });
  };

  const handleColorChange = (selectedColors: string[]) => {
    updateFilters({ colors: selectedColors });
  };

  const handleResetFilters = () => {
    const resetModel: FilterModel = {
      priceRange: { min: null, max: null },
      relativeToMarketPrice: [],
      floatValue: [],
      delivery: [],
      colors: [],
      weapon: undefined,
    };
    setCurrentFilters(resetModel);
    onFiltersChange(resetModel);
  };

  return (
    <div className={styles.filtersContainer}>
      <ExpandableFramer title="Weapon">
        <DropdownFramer title={currentFilters.weapon || "Select Weapon"}>
          <a onClick={() => handleWeaponChange("AK-47")}>AK-47</a>
          <a onClick={() => handleWeaponChange("M4A4")}>M4A4</a>
          <a onClick={() => handleWeaponChange("AWP")}>AWP</a>
        </DropdownFramer>
      </ExpandableFramer>
      <ExpandableFramer title="Price Range">
        <PriceRangeInput
          onConfirm={handlePriceRangeConfirm}
          initialMin={
            currentFilters.priceRange.min !== null
              ? currentFilters.priceRange.min
              : undefined
          }
          initialMax={
            currentFilters.priceRange.max !== null
              ? currentFilters.priceRange.max
              : undefined
          }
        />
      </ExpandableFramer>
      <ExpandableFramer title="Relative to Market Price">
        <FilterSelection
          filters={filterOptions}
          onSelectionChange={handleRelativeToMarketPriceChange}
          initialSelected={currentFilters.relativeToMarketPrice}
          allowMultipleSelection={true}
        />
      </ExpandableFramer>
      <ExpandableFramer title="Float Value">
        <FilterSelection
          filters={floatOptions}
          onSelectionChange={handleFloatValueChange}
          initialSelected={currentFilters.floatValue}
          allowMultipleSelection={true}
        />
      </ExpandableFramer>
      <ExpandableFramer title="Delivery">
        <FilterSelection
          filters={deliveryOptions}
          onSelectionChange={handleDeliveryChange}
          initialSelected={currentFilters.delivery}
          allowMultipleSelection={true}
        />
      </ExpandableFramer>
      <ExpandableFramer title="Color">
        <ColorPicker
          onSelectionChange={handleColorChange}
          initialSelectedColors={currentFilters.colors}
          allowMultipleSelection={true}
          showNoneOption={true}
        />
      </ExpandableFramer>
      <ExpandableFramer title="Reset">
        <OutlinedButton
          width="100%"
          onClick={handleResetFilters}
          title="Clear"
          iconColor="red"
          fontSize={16}
          fontWeight={600}
          titleColor="var(--text-color)"
          borderColor="var(--Gray800)"
          iconSrc={ImagePaths.icons.refresh}
        />
      </ExpandableFramer>
    </div>
  );
};
export default Filters;
