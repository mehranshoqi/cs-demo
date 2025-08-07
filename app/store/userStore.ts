import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserState {
    user_id: number | null;
    steam_id: string | null;
    token: string | null;
    displayName: string | null;
    balance: string | null;
    setToken: (token: string) => void;
    setDisplayName: (displayName: string) => void;
    setUserId: (user_id: number) => void;
    setSteamId: (steam_id: string) => void;
    setBalance: (balance: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            user_id: null,
            steam_id: null,
            token: null,
            displayName: null,
            balance: null,

            setToken: (token: string) => set({ token }),
            setDisplayName: (displayName: string) => set({ displayName }),
            setUserId: (user_id: number) => set({ user_id }),
            setSteamId: (steam_id: string) => set({ steam_id }),
            setBalance: (balance: string) => set({ balance }),

            logout: () => {
                set({ token: null, displayName: null, user_id: null, steam_id: null, balance: null });
            },

            isAuthenticated: () => !!get().token,
        }),
        {
            name: 'store-auth',
        }
    )
);
