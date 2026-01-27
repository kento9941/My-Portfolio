import { create } from "zustand";

interface CursorStore {
    cursorType: "default" | "hover";
    setCursorType: (type: "default" | "hover") => void;    
}

export const useCursorStore = create<CursorStore>((set) => ({
    cursorType: "default",
    setCursorType: (type) => set({ cursorType: type }),
}))
