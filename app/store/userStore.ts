import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
    token: string | null;
    displayName: string | null;
    isAuthenticated: boolean;

    // Actions
    setUser: (token: string, displayName: string) => void;
    clearUser: () => void;
    setToken: (token: string) => void;
    setDisplayName: (displayName: string) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            token: null,
            displayName: null,
            isAuthenticated: false,

            setUser: (token: string, displayName: string) => {
                set({
                    token,
                    displayName,
                    isAuthenticated: true,
                });

                // Also update localStorage for compatibility
                localStorage.setItem('authToken', token);
                localStorage.setItem('userDisplayName', displayName);
            },

            clearUser: () => {
                set({
                    token: null,
                    displayName: null,
                    isAuthenticated: false,
                });

                // Also clear localStorage for compatibility
                localStorage.removeItem('authToken');
                localStorage.removeItem('userDisplayName');
            },

            setToken: (token: string) => {
                set((state) => ({
                    token,
                    isAuthenticated: !!token,
                }));

                // Also update localStorage for compatibility
                if (token) {
                    localStorage.setItem('authToken', token);
                } else {
                    localStorage.removeItem('authToken');
                }
            },

            setDisplayName: (displayName: string) => {
                set({ displayName });

                // Also update localStorage for compatibility
                if (displayName) {
                    localStorage.setItem('userDisplayName', displayName);
                } else {
                    localStorage.removeItem('userDisplayName');
                }
            },
        }),
        {
            name: 'user-storage', // unique name for localStorage key
            partialize: (state) => ({
                token: state.token,
                displayName: state.displayName,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);

// Initialize store from localStorage on mount
if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    const displayName = localStorage.getItem('userDisplayName');

    if (token && displayName) {
        useUserStore.getState().setUser(token, displayName);
    }
}
