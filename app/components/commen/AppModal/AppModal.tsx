"use client";

import React, { useEffect, useRef, useCallback } from "react";
import styles from "./AppModal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/app/context/ModalContext";

const AppModal: React.FC = () => {
  const { isModalOpen, closeModal, modalContent, disappearAnimation } =
    useModal();
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, handleCloseModal]);

  if (!isModalOpen || !modalContent) {
    return null;
  }

  const { component, width } = modalContent;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className={`${styles.modalOverlay} ${
              disappearAnimation ? styles.toFade : undefined
            }`}
          >
            <div
              ref={nodeRef}
              className={`${styles.modalContent} ${
                isModalOpen ? styles.downToTop : undefined
              } ${disappearAnimation ? styles.topToDown : undefined}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: width || "auto",
                padding: width === undefined ? undefined : "0px",
              }}
            >
              {component}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppModal;
