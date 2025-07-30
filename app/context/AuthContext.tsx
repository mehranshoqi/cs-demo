"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const displayName = localStorage.getItem("userDisplayName");

    if (token && displayName) {
      setIsLoggedIn(true);
      setUserDisplayName(displayName);
    } else {
      setIsLoggedIn(false);
      setUserDisplayName(null);
    }

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("authToken");
      const updatedDisplayName = localStorage.getItem("userDisplayName");
      if (updatedToken && updatedDisplayName) {
        setIsLoggedIn(true);
        setUserDisplayName(updatedDisplayName);
      } else {
        setIsLoggedIn(false);
        setUserDisplayName(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const openAuthModal = () => {
    console.log("set modal true");
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const login = (token: string, displayName: string) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userDisplayName", displayName);
    setIsLoggedIn(true);
    setUserDisplayName(displayName);
    closeAuthModal();
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userDisplayName");
    setIsLoggedIn(false);
    setUserDisplayName(null);
  };

  const value = {
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,
    isLoggedIn,
    userDisplayName,
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
