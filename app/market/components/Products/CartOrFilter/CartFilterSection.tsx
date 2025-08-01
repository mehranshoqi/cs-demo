"use client";

import { useState } from "react";
import styles from "./CartFilterSection.module.scss";
import CartFilterSwitcher from "./components/switcher/CartFilterSwitcher";
import Cart from "./components/Cart/Cart";
import { CartItem, FilterModel } from "@/app/types";
import Filters from "./components/Fiilters/Filters";

interface CartFilterSectionProps {
  removeFromCart: (productId: string) => void;
  removeAllFromCart: () => void;
  cartItems: CartItem[];
  onFiltersChange: (filters: FilterModel) => void;
  initialFilters?: FilterModel;
}

const CartFilterSection: React.FC<CartFilterSectionProps> = ({
  removeFromCart,
  removeAllFromCart,
  cartItems,
  onFiltersChange,
  initialFilters,
}) => {
  const [active, setActive] = useState<"cart" | "filter">("cart");

  return (
    <div className={styles.cartOrFilter}>
      <CartFilterSwitcher
        active={active}
        onSwitch={setActive}
        cartItemCount={cartItems.length}
      />
      {active === "cart" ? (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          removeAllFromCart={removeAllFromCart}
        />
      ) : (
        <Filters
          onFiltersChange={onFiltersChange}
          initialFilters={initialFilters}
        />
      )}
    </div>
  );
};

export default CartFilterSection;
