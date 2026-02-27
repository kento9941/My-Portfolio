import { motion } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";
import { useThemeStore } from "../store/useThemeStore"

export default function ToggleButton() {
    const { theme, toggleTheme } = useThemeStore();
    const setCursor = useCursorStore((state) => state.setCursorType);
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(1px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <button
                className={`w-[3rem] p-[0.1rem] lg:w-[5rem] lg:p-[0.2rem] aspect-[5/2] rounded-full border-[1px] lg:border-[2px] flex flex-row items-center justify-between transition-colors duration-700 
                    ${theme === "dark" ? "border-[#ffffffcc]" : "border-[#101010cc]"}
                `}
                onMouseEnter={() => setCursor("hover")}
                onMouseLeave={() => setCursor("default")}
                onClick={() => theme === "dark" ? toggleTheme("light") : toggleTheme("dark")}
            >
                {/* light */}
                <div
                    className={`w-[1rem] lg:w-[1.6rem] aspect-square rounded-full transition-colors duration-700 
                        ${theme === "light" ? "bg-[#101010cc]" : "bg-transparent"}
                    `}
                />

                {/* dark */}
                <div
                    className={`w-[1rem] lg:w-[1.6rem] aspect-square rounded-full transition-colors duration-700 
                        ${theme === "dark" ? "bg-[#ffffffcc]" : "bg-transparent"}
                    `}
                />
            </button>
        </motion.div>
    )
}