import Image from "next/image";
import styles from "./CartItem.module.scss";
import { CartItem } from "@/app/types";
import ImagePaths from "@/app/constants/ImagePaths";
import WearBar from "../../../items/components/WearSlider/WearSlider";

interface CartItemDetailsProps {
  item: CartItem;
}

const CartItemDetails: React.FC<CartItemDetailsProps> = ({ item }) => {
  return (
    <div className={styles.cartItemDetails}>
      <div>
        <h3 className={styles.detailTitle}>Label on Skin</h3>
        <div className={styles.labels}>
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
          <Image
            src={ImagePaths.icons.angle}
            alt="angle"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div>
        <h3 className={styles.detailTitle}>Float Value</h3>
        <WearBar padding="0px" hovered={true} value={item.wearValue} />{" "}
      </div>
      <div>
        <h3 className={styles.detailTitle}>Seller info</h3>
        <div className={styles.sellerInfoContainer}>
          <SellerInfoItem
            title="Seller:"
            value="Daniel"
            iconSrc={ImagePaths.icons.google}
          />
          <SellerInfoItem
            title="Trade mode:"
            tradeMode={TradeMode.auto}
            iconSrc={ImagePaths.icons.tradeMode}
          />
          <SellerInfoItem
            title="Trade mode:"
            tradeMode={TradeMode.p2p}
            iconSrc={ImagePaths.icons.tradeMode}
          />
          <SellerInfoItem
            title="Delivery Time:"
            value="1 min"
            iconSrc={ImagePaths.icons.deliveryTime}
          />
          <SellerInfoItem
            title="Trade Notification:"
            value="On"
            iconSrc={ImagePaths.icons.tradeNotification}
          />
          <SellerInfoItem
            title="Delivery Rate:"
            value="100%"
            iconSrc={ImagePaths.icons.deliveryRate}
          />
        </div>
      </div>
    </div>
  );
};

interface SellerInfoItemProps {
  title: string;
  iconSrc: string;
  value?: string | undefined;
  tradeMode?: TradeMode;
}

enum TradeMode {
  auto,
  p2p,
}
const SellerInfoItem: React.FC<SellerInfoItemProps> = ({
  title,
  iconSrc,
  value,
  tradeMode,
}) => {
  return (
    <div className={styles.sellerInfoItem}>
      <Image src={iconSrc} alt="icon" width={18} height={18} />
      <p>{title}</p>
      {value != null ? (
        <h4>{value}</h4>
      ) : tradeMode === TradeMode.auto ? (
        <AutoMode />
      ) : (
        <P2p />
      )}
    </div>
  );
};

const P2p = ({}) => (
  <div className={styles.tradeModeContent}>
    <Image src={ImagePaths.icons.p2p} alt="" width={18} height={18} />
    <h4 style={{ color: "var(--Sun500)" }}>Peer to peer</h4>
  </div>
);
const AutoMode = ({}) => (
  <div className={styles.tradeModeContent}>
    <Image src={ImagePaths.icons.autoTrade} alt="" width={18} height={18} />
    <h4 style={{ color: "var(--green-color)" }}>Automatic</h4>
  </div>
);

export default CartItemDetails;
