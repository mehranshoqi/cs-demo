"use client";
import { useState } from "react";
import Chips from "@/app/components/commen/Chips/Chips";
import styles from "./Items.module.scss";
import Image from "next/image";
import ProductCard from "./components/ProductCard/ProductCard";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";

const chipData = [
  { label: "All Skins", iconSrc: "/images/knife.svg" },
  { label: "Pistols", iconSrc: "/images/knife.svg" },
  { label: "Mid-Tier", iconSrc: "/images/knife.svg" },
  { label: "Rifles", iconSrc: "/images/knife.svg" },
  { label: "Knives", iconSrc: "/images/knife.svg" },
  { label: "Gloves", iconSrc: "/images/knife.svg" },
  { label: "Cases", iconSrc: "/images/knife.svg" },
];

export default function Items() {
  const [activeChip, setActiveChip] = useState("New");

  return (
    <div className={styles.items}>
      <div className={styles.itemsHeader}>
        <Chips
          chips={chipData}
          activeChip={activeChip}
          onChipClick={setActiveChip}
        />

        <div className={styles.searchSort}>
          <span className={styles.chipStyle}>
            <Image
              src="/images/search.svg"
              alt="Search"
              className={styles.searchIcon}
              width={20}
              height={20}
            />
          </span>
          <span className={styles.chipStyle}>
            <Image
              src="/images/sort.svg"
              alt="Sort"
              className={styles.sortIcon}
              width={20}
              height={20}
            />
          </span>
        </div>
      </div>
      <div className={styles.itemsList}>
        <ProductCard />
        <ProductCard isSelected={true} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
      >
        <FillButton
          title="View more"
          height={48}
          width={130}
          fontSize={16}
          iconSrc="/images/arrow-down.svg"
          iconSize={11}
          iconColor="white"
        />
      </div>
    </div>
  );
}
