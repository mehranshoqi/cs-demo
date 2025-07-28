"use client";

import Image from "next/image";
import styles from "./CartItem.module.scss";
import { CartItem } from "@/app/types";
import ImagePaths from "@/app/constants/ImagePaths";
import ExpandableFramer from "@/app/components/commen/Expandable/Expandable";
import { motion, AnimatePresence } from "framer-motion";
import CartItemDetails from "./CartItemDetails";
import { TradeListType } from "./TradesList";
import { useState } from "react";
import CancelWaitingActions from "./CancelWaiting";
import SellActionSteps from "./SellActionSteps";

interface CartItemProps {
  item: CartItem;
  removeFromCart: (productId: string) => void;
  type?: TradeListType;
}

const CartItemCard: React.FC<CartItemProps> = ({
  item,
  removeFromCart,
  type,
}) => {
  const [showCancel, setShowCancel] = useState(false);
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <Image src={item.image} alt="" width={100} height={100} />
        <div className={styles.itemDetails}>
          <p className={styles.itemType}>{item.name}</p>
          <p className={styles.itemName}>{item.skinType}</p>
          <div className={styles.price}>
            <Image src={ImagePaths.icons.coin} alt="" width={18} height={18} />
            <p className={styles.itemPrice}>{item.price}</p>
          </div>
          <div className={styles.discount}>+6%</div>
        </div>

        {!type ? (
          <Image
            onClick={() => removeFromCart(item.id)}
            src={ImagePaths.icons.trash}
            alt=""
            width={20}
            height={20}
          />
        ) : type == TradeListType.waiting && !showCancel ? (
          <button
            onClick={() => setShowCancel(true)}
            className={styles.cancelButton}
          >
            <p>Cancel</p>
            <Image src={ImagePaths.icons.xRed} alt="" width={14} height={14} />
          </button>
        ) : (
          <></>
        )}
      </div>

      <AnimatePresence>
        {showCancel && (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <CancelWaitingActions onContinue={() => setShowCancel(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!showCancel && (
        <ExpandableFramer
          title="Details"
          headerStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            gap: "8px",
          }}
          titleStyle={{
            fontSize: "12px",
            fontWeight: "400",
            color: "var( --Text-Color-TextBodyGray300)",
            textAlign: "end",
          }}
          iconWidth={9}
        >
          {type ? <SellActionSteps /> : <CartItemDetails item={item} />}
        </ExpandableFramer>
      )}

      <div className={styles.divider}></div>
    </div>
  );
};

export default CartItemCard;
