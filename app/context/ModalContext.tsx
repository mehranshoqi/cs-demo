"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface ModalContent {
  component: ReactNode;
  width?: string;
}

interface ModalContextType {
  isModalOpen: boolean;
  modalContent: ModalContent | null;
  openModal: (component: ReactNode, width?: string) => void;
  closeModal: () => void;
  disappearAnimation: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disappearAnimation, setDisappearAnimation] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = useCallback((component: ReactNode, width?: string) => {
    setModalContent({ component, width });
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setDisappearAnimation(true);

    setTimeout(() => {
      setIsModalOpen(false);
      setModalContent(null);
    }, 500);

    setTimeout(() => {
      setDisappearAnimation(false);
    }, 550);
  }, []);

  const value = {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
    disappearAnimation,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within an ModalProvider");
  }
  return context;
};
