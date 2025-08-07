"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUserStore } from "../store/userStore";

interface AuthContextType {
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  isLoggedIn: boolean;
  userDisplayName: string | null;
  login: (token: string, displayName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { token, displayName, setToken, setDisplayName, logout: storeLogout, isAuthenticated } = useUserStore();

  const openAuthModal = () => {
    console.log("set modal true");
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const login = (token: string, displayName: string) => {
    setToken(token);
    setDisplayName(displayName);
    closeAuthModal();
  };

  const logout = () => {
    storeLogout();
  };

  const value = {
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,
    isLoggedIn: isAuthenticated(),
    userDisplayName: displayName,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
