import { motion } from "framer-motion";

export default function() {
    return (
        <motion.main
            className="w-screen h-screen px-[10vw] lg:pl-[15vw] lg:pr-[10vw] flex items-center justify-center"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(1px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="w-full flex flex-col">
                <div className="w-full flex items-end justify-center text-[clamp(1rem,1.5vw,2rem)] lg:portrait:text-[clamp(1.5rem,3vw,8rem)] lg:landscape:text-[clamp(1rem,1.5vw,2rem)] font-light">
                    <h1 className="flex gap-[clamp(1rem,2vw,5rem)]">
                        <span>404</span>
                        <span>PAGE NOT FOUND</span>
                    </h1>
                </div>
                <div className="w-full h-[1px] bg-[#888888aa]" />
            </div>
        </motion.main>
    )
}