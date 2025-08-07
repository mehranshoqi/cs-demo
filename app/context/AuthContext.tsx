"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUserStore } from "../store/userStore";
import AuthService from "../services/auth/authService";

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
  const [isHydrated, setIsHydrated] = useState(false);
  const { token, displayName, setToken, setDisplayName, logout: storeLogout, isAuthenticated, setUserId, setSteamId, setBalance, setEmail } = useUserStore();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Fetch user profile when site loads and user is authenticated
  useEffect(() => {
    if (isHydrated && token && isAuthenticated()) {
      const fetchProfile = async () => {
        try {
          const response = await AuthService.getProfile(token);
          if (response.data.status === 1) {
            const { id, steam_id, balance, email } = response.data.data;
            setUserId(id);
            setSteamId(steam_id ?? "");
            setBalance(balance);
            setEmail(email ?? "");
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfile();
    }
  }, [isHydrated, token, isAuthenticated]);

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
    isLoggedIn: isHydrated ? isAuthenticated() : false,
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
