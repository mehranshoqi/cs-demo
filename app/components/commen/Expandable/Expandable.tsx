// components/ExpandableFramer.tsx
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import styles from "./Expandable.module.scss";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface ExpandableFramerProps {
  title: string;
  children: ReactNode;
}

const ExpandableFramer: React.FC<ExpandableFramerProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
    <div className={styles.expandableContainer}>
      <button onClick={toggleExpand} className={styles.expandableHeader}>
        <h3 className={styles.expandableTitle}>{title}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.arrow}
        >
          <Image
            src={ImagePaths.icons.arrowDown}
            alt="arrow"
            width={14}
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
