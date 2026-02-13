import { create } from "zustand";

export type CursorType = 
    | "default"
    | "hover"
    | "View"
    | "Mother and Child"
    | "Girl and Dog"
    | "Snail"
    | "Prayer"
    | "Shape of Love";

interface CursorStore {
    cursorType: CursorType;
    setCursorType: (type: CursorType) => void;    
}

export const useCursorStore = create<CursorStore>((set) => ({
    cursorType: "default",
    setCursorType: (type) => set({ cursorType: type }),
}))
