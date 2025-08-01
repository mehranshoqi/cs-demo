"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./ProductSearchBar.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

interface ProductSearchBarProps {
  placeholder?: string;
  onSubmit: (query: string) => void;
  className?: string;
}

const ProductSearchBar: React.FC<ProductSearchBarProps> = ({
  onSubmit,
  className,
}) => {
  const [query, setQuery] = useState("");

  return (
    <form className={`${styles.subscriptionForm} ${className || ""}`}>
      <Image src={ImagePaths.icons.search} alt="Logo" width={20} height={20} />
      <input
        type="text"
        placeholder="Search for the weapon or skin name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSubmit(query);
        }}
        className={styles.subscriptionInput}
        required
      />
      <button
        type="submit"
        className={styles.subscriptionButton}
        aria-label="search"
      >
        <Image
          src={ImagePaths.icons.arrowRight}
          alt="icon"
          width={20}
          height={20}
        />
      </button>
    </form>
  );
};

export default ProductSearchBar;
