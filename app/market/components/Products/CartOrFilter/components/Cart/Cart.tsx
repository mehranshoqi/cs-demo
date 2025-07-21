import Image from "next/image";
import styles from "./Cart.module.scss";
import CartItemCard from "./CartItem";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import { CartItem } from "@/app/types";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import ImagePaths from "@/app/constants/ImagePaths";
interface CartProps {
  removeFromCart: (productId: string) => void;
  removeAllFromCart: () => void;
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({
  removeFromCart,
  cartItems,
  removeAllFromCart,
}) => {
  const calculateCartTotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const currentTotal = calculateCartTotal();

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartHeaderTitle}>
          {cartItems.length === 0
            ? "Trades list"
            : `${cartItems.length} Item in Cart`}
        </h2>

        {cartItems.length > 0 && (
          <button
            onClick={removeAllFromCart}
            className={styles.cartHeaderRemove}
          >
            Remove all
          </button>
        )}
        <Image src={ImagePaths.icons.xMark} alt="" width={20} height={20} />
      </div>
      <div className={styles.divider}></div>

      {cartItems.length === 0 ? (
        <EmptyCartView />
      ) : (
        <>
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <CartItemCard item={item} removeFromCart={removeFromCart} />
              </motion.div>
            ))}
          </AnimatePresence>
          <div className={styles.gap130}></div>{" "}
          <div className={styles.cartTotal}>
            <div className={styles.totalPrice}>
              <p className={styles.title}>Total Price</p>
              <p className={styles.itemPrice}>
                <CountUp
                  start={currentTotal / 1.2}
                  end={currentTotal}
                  duration={0.7}
                  decimals={2}
                  prefix="$"
                  separator=","
                />
              </p>
              <Image
                src={ImagePaths.icons.coin}
                alt=""
                width={18}
                height={18}
              />
            </div>
            <FillButton
              fontSize={14}
              title={`Buy ${cartItems.length} Skin${
                cartItems.length > 1 ? "s" : ""
              }`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

const EmptyCartView = () => {
  return (
    <div className={styles.emptyBox}>
      <Image
        src={ImagePaths.icons.pack}
        width={141}
        height={111}
        alt=""
        className={styles.packImage}
      />
      <h1 className={styles.emptyTitle}>You don’t have any trades yet</h1>
      <p className={styles.emptyDesc}>
        Select the skins you want to buy, or sell from deposit section
      </p>
      <OutlinedButton title="Deposit to sell" width="100%" />
    </div>
  );
};
