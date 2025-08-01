"use client";
import React, { useState, useEffect, useCallback } from "react";
import CartFilterSection from "./CartOrFilter/CartFilterSection";
import Items from "./items/Items";
import styles from "./Products.module.scss";
import { Product, CartItem, FilterModel } from "@/app/types";

import {
  MarketItem,
  GetMarketItemsParams,
} from "../../../services/market/marketService";

import MarketService from "@/app/services/market/marketService";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const [currentFiltersModel, setCurrentFiltersModel] = useState<FilterModel>({
    priceRange: { min: null, max: null },
    relativeToMarketPrice: [],
    floatValue: [],
    delivery: [],
    colors: [],
    weapon: undefined,
  });

  const [itemsParams, setItemsParams] = useState<GetMarketItemsParams>({
    offset: 0,
    limit: 5,
  });
  const [activeProductTypeFilter, setActiveProductTypeFilter] =
    useState<string>("All Skins");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loadedProductCount, setLoadedProductCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllItems = useCallback(
    async (append = false) => {
      setLoading(true);
      try {
        const response = await MarketService.getItems(itemsParams);

        const count = response.data.data.length;
        const newItems: Product[] = Array.from(
          { length: count },
          (_, index) => ({
            id: `${itemsParams.offset + index}`,
            name: "AK-47",
            wear: "Minimal Wear",
            wearValue: 0.05,
            price: 100.0,
            priceChange: "+6%",
            priceChangeValue: 6,
            image: "/images/gloves-sample2.png",
            type: "Gloves",
            skinType: "Emerlad",
            discountPercentage: -10,
            color: "Green500",
            deliveryTime: "0-10 min",
          })
        );

        setProducts((prev) => (append ? [...prev, ...newItems] : newItems));
        setLoadedProductCount((prev) => prev + newItems.length);
      } catch (err: any) {
      } finally {
        setLoading(false);
      }
    },
    [itemsParams]
  );

  useEffect(() => {
    getAllItems(itemsParams.offset > 0);
  }, [itemsParams, getAllItems]);

  const applyAllFilters = useCallback(() => {
    let tempFilteredProducts = [...products];

    if (activeProductTypeFilter !== "All Skins") {
      tempFilteredProducts = tempFilteredProducts.filter(
        (product) => product.type === activeProductTypeFilter
      );
    }

    if (
      currentFiltersModel.weapon &&
      currentFiltersModel.weapon !== "Select Weapon"
    ) {
      tempFilteredProducts = tempFilteredProducts.filter((product) =>
        product.name.includes(currentFiltersModel.weapon as string)
      );
    }

    if (currentFiltersModel.priceRange.min !== null) {
      tempFilteredProducts = tempFilteredProducts.filter(
        (product) =>
          product.price >= (currentFiltersModel.priceRange.min as number)
      );
    }
    if (currentFiltersModel.priceRange.max !== null) {
      tempFilteredProducts = tempFilteredProducts.filter(
        (product) =>
          product.price <= (currentFiltersModel.priceRange.max as number)
      );
    }

    if (currentFiltersModel.relativeToMarketPrice.length > 0) {
      tempFilteredProducts = tempFilteredProducts.filter((product) => {
        const discount = product.discountPercentage || 0;
        if (
          currentFiltersModel.relativeToMarketPrice.includes("on-sale") &&
          discount < 0
        ) {
          return true;
        }
        if (
          currentFiltersModel.relativeToMarketPrice.includes("reasonable") &&
          discount >= 0 &&
          discount <= 6
        ) {
          return true;
        }
        if (
          currentFiltersModel.relativeToMarketPrice.includes("markup") &&
          discount > 6
        ) {
          return true;
        }
        return false;
      });
    }

    if (currentFiltersModel.floatValue.length > 0) {
      tempFilteredProducts = tempFilteredProducts.filter((product) => {
        if (currentFiltersModel.floatValue.includes("All")) return true;

        const wear = product.wearValue;
        if (
          currentFiltersModel.floatValue.includes("New Factory") &&
          wear >= 0.0 &&
          wear <= 0.07
        )
          return true;
        if (
          currentFiltersModel.floatValue.includes("Minimal Wear") &&
          wear > 0.07 &&
          wear <= 0.15
        )
          return true;
        if (
          currentFiltersModel.floatValue.includes("Field-Tested") &&
          wear > 0.15 &&
          wear <= 0.38
        )
          return true;
        if (
          currentFiltersModel.floatValue.includes("Well-Worn") &&
          wear > 0.38 &&
          wear <= 0.45
        )
          return true;
        if (
          currentFiltersModel.floatValue.includes("Battle-Scarred") &&
          wear > 0.45 &&
          wear <= 1.0
        )
          return true;
        return false;
      });
    }

    if (currentFiltersModel.colors && currentFiltersModel.colors.length > 0) {
      tempFilteredProducts = tempFilteredProducts.filter(
        (product) =>
          product.color && currentFiltersModel.colors.includes(product.color)
      );
    }
  }, [products, activeProductTypeFilter, currentFiltersModel]);

  useEffect(() => {
    applyAllFilters();
  }, [products, currentFiltersModel, activeProductTypeFilter, applyAllFilters]);

  const handleProductTypeFilterChange = (filter: string) => {
    if (filter === activeProductTypeFilter) return;
    setActiveProductTypeFilter(filter);
  };

  const clearList = () => setProducts([]);

  const handleAllFiltersChange = (newFilters: FilterModel) => {
    clearList();
    setItemsParams({
      offset: 0,
      limit: itemsParams.limit,
      min_price: newFilters.priceRange.min,
      max_price: newFilters.priceRange.max,
    });
    setCurrentFiltersModel(newFilters);
  };

  const addToCart = (productToAdd: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === productToAdd.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const removeAllFromCart = () => setCartItems([]);

  const handleLoadMoreProducts = useCallback(() => {
    setItemsParams((prev) => ({
      ...prev,
      offset: prev.offset + prev.limit,
    }));
  }, []);

  const handleSearch = useCallback((query: string) => {
    clearList();
    setItemsParams((prev) => ({
      ...prev,
      name: query,
    }));
  }, []);

  return (
    <div className={styles.productsMain}>
      <Items
        products={products}
        handleFilterChange={handleProductTypeFilterChange}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        activeFilter={activeProductTypeFilter}
        cartItems={cartItems}
        onLoadMore={handleLoadMoreProducts}
        onSearch={handleSearch}
        loadingList={loading}
      />
      <CartFilterSection
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        removeAllFromCart={removeAllFromCart}
        onFiltersChange={handleAllFiltersChange}
        initialFilters={currentFiltersModel}
      />
    </div>
  );
}
