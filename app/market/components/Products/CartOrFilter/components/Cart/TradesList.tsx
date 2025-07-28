import ExpandableFramer from "@/app/components/commen/Expandable/Expandable";
import TradeListHeaderBadge from "./TradeListHeaderBadge";

import CartItemCard from "./CartItem";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem } from "@/app/types";

interface TradesListProps {
  cartItems: CartItem[];
  type: TradeListType;
}

const TradesList: React.FC<TradesListProps> = ({ cartItems, type }) => {
  return (
    <div>
      <ExpandableFramer
        title="Buying"
        titleStyle={{ fontSize: "14px" }}
        extraBadge={<TradeListHeaderBadge type={type} />}
      >
        <AnimatePresence>
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <CartItemCard item={item} removeFromCart={() => {}} type={type} />
            </motion.div>
          ))}
        </AnimatePresence>
      </ExpandableFramer>
    </div>
  );
};

export default TradesList;

export enum TradeListType {
  actionNeeded = "actionNeeded",
  waiting = "waiting",
  complete = "complete",
}
