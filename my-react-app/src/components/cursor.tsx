"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";

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
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed w-[1.5rem] h-[1.5rem] rounded-full bg-transparent border-solid border-[1px] border-white pointer-events-none z-[100]"
            style={{x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%"}}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? (cursorType === "default" ? 1 : 0.5) : 0,
                backgroundColor: cursorType === "default" ? "transparent" : "white",
            }}
            transition={{ duration: 0.3 }}
        />
    )
}
