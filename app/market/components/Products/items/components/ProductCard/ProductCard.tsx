import Image from "next/image";
import styles from "./ProductCard.module.scss";
import WearBar from "../WearSlider/WearSlider";

interface ProductCardProps {
  isSelected?: boolean;
}

export default function ProductCard({ isSelected = false }: ProductCardProps) {
  return (
    <div
      className={`${styles.productCard} ${isSelected ? styles.selected : ""}`}
    >
      <div className={styles.productImage}>
        <Image src="/images/gun1.png" alt="Product" width={200} height={200} />
        {isSelected && (
          <div className={styles.selectedIcon}>
            <Image src="/images/done.svg" alt="" width={20} height={20} />
          </div>
        )}
        <div className={styles.smallImage}>
          <Image src="/images/angle.png" alt="angle" width={24} height={24} />
          <Image src="/images/angle.png" alt="angle" width={24} height={24} />
        </div>
      </div>
      <div className={styles.itemDetails}>
        <p className={styles.itemType}>AK-47</p>
        <p className={styles.itemName}>Emerlad</p>
        <WearBar value={0.84} />
        <div className={styles.price}>
          <Image src="/images/coin.svg" alt="" width={18} height={18} />
          <p className={styles.itemPrice}>3,705,000.00</p>
          <div className={styles.discount}>+6%</div>
        </div>
      </div>
    </div>
  );
}
