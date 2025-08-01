"use client";
import Chips from "@/app/components/commen/Chips/Chips";
import styles from "./Items.module.scss";
import Image from "next/image";
import ProductCard from "./components/ProductCard/ProductCard";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import { CartItem, Chip, Product } from "@/app/types";
import ImagePaths from "@/app/constants/ImagePaths";
import { motion, AnimatePresence } from "framer-motion";
import EmptyListView from "./components/EmptyView/EmptyView";
import { useState } from "react";
import ProductSearchBar from "./components/ProductSearchBar/ProductSearchBar";

const chipData: Chip[] = [
  { label: "All Skins", iconSrc: "/images/knife.svg" },
  { label: "Pistols", iconSrc: "/images/pistol.svg" },
  { label: "Mid-Tier", iconSrc: "/images/mid-tier.svg" },
  { label: "Rifles", iconSrc: "/images/rifles.svg" },
  { label: "Knives", iconSrc: "/images/knife.svg" },
  { label: "Gloves", iconSrc: "/images/gloves.svg" },
  { label: "Cases", iconSrc: "/images/cases.svg" },
];

interface ItemsProps {
  products: Product[];
  handleFilterChange: (filter: string) => void;
  addToCart: (productToAdd: Product) => void;
  removeFromCart: (productId: string) => void;
  onLoadMore: () => void;
  onSearch: (query: string) => void;
  cartItems: CartItem[];
  activeFilter: string;
  loadingList: boolean;
}

const Items: React.FC<ItemsProps> = ({
  products,
  handleFilterChange,
  addToCart,
  onSearch,
  onLoadMore,
  removeFromCart,
  cartItems,
  activeFilter,
  loadingList,
}) => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className={styles.items}>
      <div className={styles.itemsHeader}>
        <div className={styles.chipsWrapper}>
          <Chips
            chips={chipData}
            activeChip={activeFilter}
            onChipClick={handleFilterChange}
          />

          <div className={styles.searchSort}>
            <span className={styles.chipStyle}>
              <Image
                src={
                  showSearch ? ImagePaths.icons.xMark : ImagePaths.icons.search
                }
                alt="Search"
                className={styles.searchIcon}
                onClick={() => setShowSearch(!showSearch)}
                width={20}
                height={20}
              />
            </span>
            <span className={styles.chipStyle}>
              <Image
                src={ImagePaths.icons.sort}
                alt="Sort"
                className={styles.sortIcon}
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
        <div className={styles.searchWrapper}>
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <ProductSearchBar
                  className={styles.searchBar}
                  onSubmit={onSearch}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.itemsList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            isSelected={cartItems.some((item) => item.id === product.id)}
            product={product}
            onProductClick={(isSelected) => {
              isSelected ? removeFromCart(product.id) : addToCart(product);
            }}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
      >
        {loadingList ? (
          <p>Loading ..</p>
        ) : products.length !== 0 ? (
          <FillButton
            onClick={onLoadMore}
            title="View more"
            height={48}
            width={130}
            fontSize={16}
            iconSrc={ImagePaths.icons.arrowDown}
            iconSize={11}
            iconColor="white"
          />
        ) : (
          <EmptyListView />
        )}
      </div>
    </div>
  );
};

export default Items;
