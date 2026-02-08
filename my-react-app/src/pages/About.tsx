"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.main
            exit={{ opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.8 }}
        >

        </motion.main>
    )
}