// components/ExpandableFramer.tsx
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import styles from "./Expandable.module.scss";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface ExpandableFramerProps {
  title: string;
  headerPadding?: string;
  children: ReactNode;
  headerStyle?: React.CSSProperties | undefined;
  titleStyle?: React.CSSProperties | undefined;
  iconWidth?: number | undefined;
  extraBadge?: ReactNode;
}

const ExpandableFramer: React.FC<ExpandableFramerProps> = ({
  title,
  children,
  headerStyle,
  titleStyle,
  iconWidth,
  headerPadding,
  extraBadge,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleExpand = (): void => {
    setIsOpen(!isOpen);
  };

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.expandableContainer} style={{padding: headerPadding}}>
      <button 
       onClick={toggleExpand} className={styles.expandableHeader}
       style={headerStyle}
       >
        <h3 className={styles.expandableTitle} style={titleStyle}>{title}</h3>
        {extraBadge}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.arrow}
        >
          <Image
            src={ImagePaths.icons.arrowDown}
            alt="arrow"
            width={iconWidth ?? 10}
            height={8}
            className={styles.avatar}
          />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.expandableContent}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div variants={itemVariants} className={styles.contentInner}>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableFramer;
