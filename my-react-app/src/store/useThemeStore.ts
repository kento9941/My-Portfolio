import { create } from "zustand";

export type Theme = 
    | "light"
    | "dark";

interface ThemeStore {
    theme: Theme;
    toggleTheme: (type: Theme) => void;    
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "dark",
    toggleTheme: (type) => set({ theme: type }),
}))
