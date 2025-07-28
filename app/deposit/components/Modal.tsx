"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "./Modal.module.scss";
import CryptoCurrencyModalLayout from "./layouts/CryptoCurrencyModalLayout";
import PaymentMethodModalLayout from "./layouts/PaymentMethodModalLayout";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedItem: { name: string; image: string } | null;
    title?: string;
    layout?: "default" | "crypto" | "payment";
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    selectedItem,
    title = "Selected Item",
    layout = "default"
}) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                nodeRef.current &&
                !(nodeRef.current as HTMLElement).contains(event.target as Node)
            ) {
                onClose();
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
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
    }, [isOpen, onClose]);

    if (!selectedItem) return null;

    const renderContent = () => {
        switch (layout) {
            case "crypto":
                return <CryptoCurrencyModalLayout selectedItem={selectedItem} onClose={onClose} />;

            case "payment":
                return <PaymentMethodModalLayout selectedItem={selectedItem} onClose={onClose} />;

            default:
                return (
                    <div className={styles.modalCenter}>
                        <Image
                            src={selectedItem.image}
                            alt={selectedItem.name}
                            width={80}
                            height={80}
                            className={styles.itemIcon}
                        />
                        <h2 className={styles.itemName}>{selectedItem.name}</h2>
                    </div>
                );
        }
    };

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="modal-fade"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div className={styles.modalOverlay}>
                <div ref={nodeRef} className={styles.modalContent}>
                    <div className={styles.backgroundContainer}>
                        <Image
                            src={ImagePaths.general.authPattern}
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            className={styles.backgroundImage}
                        />
                    </div>

                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>{title}</h3>
                        <button
                            className={styles.closeButton}
                            onClick={onClose}
                        >
                            <Image
                                src={ImagePaths.icons.xMark}
                                alt="Close"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>

                    {renderContent()}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Modal; 