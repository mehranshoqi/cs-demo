"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./AppModal.module.scss";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";
import { CSSTransition } from "react-transition-group";
import ImagePaths from "@/app/constants/ImagePaths";
import { useModal } from "@/app/context/ModalContext";

const AppModal: React.FC = () => {
  const { isModalOpen, closeModal, modalContent } = useModal();

  const nodeRef = useRef(null);

  const handleCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        nodeRef.current &&
        !(nodeRef.current as HTMLElement).contains(event.target as Node)
      ) {
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
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, closeModal, handleCloseModal]);

  return (
    <CSSTransition
      in={isModalOpen}
      timeout={300}
      classNames="auth-modal-fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className={styles.modalOverlay}>
        <div ref={nodeRef} className={styles.modalContent}>
          {modalContent}
        </div>
      </div>
    </CSSTransition>
  );
};

export default AppModal;
