import Image from "next/image";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartHeaderTitle}>2 Item in Cart</h2>
        <button className={styles.cartHeaderRemove}>Remove all</button>
        <Image src="/images/x-mark.svg" alt="" width={20} height={20} />
      </div>
      <div className={styles.divider}></div>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className={styles.gap130}></div>
      <div className={styles.cartTotal}>
        <div className={styles.totalPrice}>
          <p className={styles.title}>Total Price</p>
          <p className={styles.itemPrice}>99.00</p>
          <Image src="/images/coin.svg" alt="" width={18} height={18} />
        </div>
        <FillButton title="Buy 2 Skin" />
      </div>
    </div>
  );
}
