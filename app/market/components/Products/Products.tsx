import CartFilterSection from "./CartOrFilter/CartFilterSection";
import Items from "./items/Items";
import styles from "./Products.module.scss";

export default function Products() {
  return (
    <div className={styles.productsMain}>
      <Items />
      <CartFilterSection />
    </div>
  );
}
