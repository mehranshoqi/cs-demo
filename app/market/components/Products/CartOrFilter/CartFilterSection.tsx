"use client";

import { useState } from "react";
import styles from "./CartFilterSection.module.scss";
import CartFilterSwitcher from "./components/switcher/CartFilterSwitcher";
import Cart from "./components/Cart/Cart";

export default function CartFilterSection() {
  const [active, setActive] = useState<"cart" | "filter">("cart");

  return (
    <div className={styles.cartOrFilter}>
      <CartFilterSwitcher active={active} onSwitch={setActive} />
      {active === "cart" ? (
        <Cart />
      ) : (
        <div>TODO: Filters component</div>
      )}
    </div>
  );
}