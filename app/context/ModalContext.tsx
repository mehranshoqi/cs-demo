// src/app/context/ModalContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface ModalContextType {
  isModalOpen: boolean;
  modalContent: ReactNode | null; // اضافه کردن این ویژگی جدید
  openModal: (content: ReactNode) => void; // تغییر در ورودی تابع
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = useCallback((content: ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalContent(null); // پاک کردن محتوا هنگام بستن
  }, []);

  const value = {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
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