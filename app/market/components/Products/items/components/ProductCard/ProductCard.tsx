import Image from "next/image";
import styles from "./ProductCard.module.scss";
import WearBar from "../WearSlider/WearSlider";
import { Product } from "@/app/types";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ImagePaths from "@/app/constants/ImagePaths";
import Modal from "@/app/deposit/components/Modal";
import AppModal from "@/app/components/commen/AppModal/AppModal";
import { useModal } from "@/app/context/ModalContext";

interface ProductCardProps {
  isSelected?: boolean;
  product: Product;
  onProductClick?: (isSelected: boolean) => void;
  animationDelay?: number;
}

export default function ProductCard({
  isSelected = false,
  product,
  onProductClick = () => {},
  animationDelay = 0,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { openModal, isModalOpen } = useModal();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "linear",
        delay: animationDelay,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onClick={() => onProductClick(isSelected)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.productCard} ${isSelected ? styles.selected : ""}`}
    >
      <div className={styles.productImage}>
        <Image
          className={styles.productMainImage}
          src={product.image}
          alt="Product"
          width={200}
          height={200}
        />

        <SelectedOrHoveredBadge
          isHovered={isHovered}
          isSelected={isSelected}
          onShowPreview={() => {}}
          // onShowPreview={() => openModal(<>mehran</>)}
        />
        <div className={styles.smallImage}>
          <Image
            src={ImagePaths.icons.angle}
            alt="angle"
            width={24}
            height={24}
          />
          <Image
            src={ImagePaths.icons.angle}
            alt="angle"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={styles.itemDetails}>
        <p className={styles.itemType}>{product.name}</p>
        <p className={styles.itemName}>{product.skinType}</p>
        <WearBar hovered={isHovered} value={product.wearValue} />{" "}
        <div className={styles.price}>
          <Image src={ImagePaths.icons.coin} alt="" width={18} height={18} />
          <p className={styles.itemPrice}>{product.price}</p>
          <div className={styles.discount}>+6%</div>
        </div>
      </div>
    </motion.div>
  );
}

interface SelectedOrHoveredBadgeProps {
  isHovered: boolean;
  isSelected: boolean;
  onShowPreview: () => void;
}

const SelectedOrHoveredBadge: React.FC<SelectedOrHoveredBadgeProps> = ({
  isHovered,
  isSelected,
  onShowPreview,
}) => {
  return (
    <AnimatePresence>
      {(isHovered || isSelected) && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            onMouseEnter={onShowPreview}
            className={`${styles.selectedIcon} ${
              isHovered ? styles.hoveredIcon : undefined
            }`}
          >
            <Image
              src={isHovered ? ImagePaths.icons.camera : ImagePaths.icons.done}
              alt="badge-icon"
              width={20}
              height={20}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
