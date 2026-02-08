"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";
import type { CursorType } from "../store/useCursorStore";

const cursorVariants: Record<CursorType | "hidden", any> = {
    "default": {
        scale: 1,
        backgroundColor: "transparent"
    },
    "hover": {
        scale: 0.5,
        backgroundColor: "white"
    },
    "hold": {
        scale: 2.5,
        backgroundColor: "white",
        opacity: 0.3,
    },
    "View": {
        scale: 3,
        backgroundColor: "white",
        mixBlendMode: "difference",
    },
    "Origami": {
        scale: 3,
        backgroundColor: "white",
        mixBlendMode: "soft-light",
    },
    "Basketball": {
        scale: 3,
        backgroundColor: "white",
        mixBlendMode: "soft-light",
    },
    "Tennis": {
        scale: 3,
        backgroundColor: "white",
    },
    "My Dog": {
        scale: 3,
        backgroundColor: "white",
        mixBlendMode: "soft-light",
    },
    "hidden": {
        scale: 0,
        opacity: 0,
    }
}

const textCursorTypes: CursorType[] = ["View", "Origami", "Basketball", "Tennis", "My Dog"];

export default function Cursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isVisible, setIsVisible] = useState(false);

    const cursorType = useCursorStore((state) => state.cursorType);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className="fixed w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full bg-transparent border-solid border-[1px] border-white pointer-events-none select-none z-[100]"
            style={{x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%"}}
            variants={cursorVariants}
            animate={isVisible ? cursorType : "hidden"}
            transition={{ duration: 0.3 }}
        >
            {textCursorTypes.includes(cursorType) && (
                <span className="text-[4px] font-medium text-black whitespace-nowrap">
                    { cursorType }
                </span>
            )}
        </motion.div>
    )
}
