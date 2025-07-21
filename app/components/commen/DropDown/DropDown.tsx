// components/DropdownFramer.tsx
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import styles from "./DropDown.module.scss";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface DropdownFramerProps {
  title: string;
  children: ReactNode;
}

const DropdownFramer: React.FC<DropdownFramerProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={toggleDropdown} className={styles.dropdownToggle}>
        <div className={styles.buttonHeader}>
          <div className={styles.buttonHeaderTitle}>
            <Image
              src={ImagePaths.icons.categoryGray}
              alt="arrow"
              width={20}
              height={20}
              color="red"
            />
            {title}
          </div>
          <Image
            src={ImagePaths.icons.arrowDown}
            alt="arrow"
            width={13}
            height={8}
            className={styles.avatar}
          />
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.arrow}
        ></motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdownMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div variants={itemVariants}>{children}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownFramer;
