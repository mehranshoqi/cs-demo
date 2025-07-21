import Image from "next/image";
import styles from "./CartItem.module.scss";

import { CartItem } from "@/app/types";
import ImagePaths from "@/app/constants/ImagePaths";

interface CartItemProps {
  item: CartItem;
  removeFromCart: (productId: string) => void;
}

const CartItemCard: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
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
        <Image
          onClick={() => removeFromCart(item.id)}
          src={ImagePaths.icons.trash}
          alt=""
          width={20}
          height={20}
        />
      </div>

      <div className={styles.detailsSection}>
        <p className={styles.itemDetailsTitle}>Details</p>
        <Image
          src={ImagePaths.icons.arrowDown}
          alt="arrow"
          width={9}
          height={5}
        />
      </div>

      <div className={styles.divider}></div>
    </div>
  );
};

export default CartItemCard;
