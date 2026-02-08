import { create } from "zustand";

export type CursorType = 
    | "default"
    | "hover"
    | "hold"
    | "View"
    | "Origami"
    | "Basketball"
    | "Tennis"
    | "My Dog";

interface CursorStore {
    cursorType: CursorType;
    setCursorType: (type: CursorType) => void;    
}

export const useCursorStore = create<CursorStore>((set) => ({
    cursorType: "default",
    setCursorType: (type) => set({ cursorType: type }),
}))
