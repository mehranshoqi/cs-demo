"use client";

import React, { useEffect, useRef, useCallback } from "react";
import styles from "./AppModal.module.scss";
import { CSSTransition } from "react-transition-group";
import { useModal } from "@/app/context/ModalContext";

const AppModal: React.FC = () => {
  const { isModalOpen, closeModal, modalContent } = useModal();
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
    <CSSTransition
      in={isModalOpen}
      timeout={300}
      classNames="auth-modal-fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className={styles.modalOverlay}>
        <div
          ref={nodeRef}
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: width || "auto",
            padding: width === undefined ? undefined : "0px",
          }}
        >
          {component}
        </div>
      </div>
    </CSSTransition>
  );
};

export default AppModal;
