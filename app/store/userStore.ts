import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserState {
    token: string | null;
    displayName: string | null;
    setToken: (token: string) => void;
    setDisplayName: (displayName: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            token: null,
            displayName: null,

            setToken: (token: string) => set({ token }),
            setDisplayName: (displayName: string) => set({ displayName }),

            logout: () => {
                set({ token: null, displayName: null });
            },

            isAuthenticated: () => !!get().token,
        }),
        {
            name: 'store-auth',
        }
    )
);
