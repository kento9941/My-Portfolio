"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Works() {
    return (
        <main className="relative w-full h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <Carousel />
            </div>
            
        </main>
    )
}

const works = [
    { id: 1, src: "/sms.gif" },
    { id: 2, src: "/sms.gif" },
    { id: 3, src: "/sms.gif" },
    { id: 4, src: "/sms.gif" },
]

function Carousel() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    return (
        <div className="relative h-screen w-[60vw] overflow-hidden">
            <motion.div
                style={{ y }}
                className="flex flex-col gap-6"
            >
            {[...works, ...works].map((w, i) => (
                <div
                    key={i}
                    className="w-[40%]"
                >
                    <img src={w.src} alt={`${w.id}`} className="w-full h-auto object-contain" />
                </div>
            ))}
            </motion.div>
        </div>
    )
}
