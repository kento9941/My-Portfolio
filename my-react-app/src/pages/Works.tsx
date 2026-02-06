"use client";

import { motion } from "motion/react";
import MenuScanner from "../components/works/menu-scanner";
import StrudelMusicSequencer from "../components/works/strudel-music-sequencer";
import Portfolio1 from "../components/works/portfolio-1";

export default function Works() {
    return (
        <main className="relative w-full min-h-screen flex flex-row justify-start items-start pt-[5vh] pl-[20vw]">
            <motion.div
                className="w-[35vw] flex flex-col items-center justify-start pt-[25vh] pb-[12vh] gap-[25vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            >
                <StrudelMusicSequencer />
                <MenuScanner />
                <Portfolio1 />
            </motion.div>

            <div className="fixed text-[6rem] font-thin -z-1 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    WORKS & SKILLS
                </motion.h2>
            </div>
            <div className="fixed top-[40vh] right-[0vw] w-[30vw] text-[0.7rem] tracking-[0.1rem] font-light">
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    >
                        My journey as a developer started in
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                    >
                        2024 with Python and static web design.
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    >
                        In late 2025, I encountered a portfolio
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                    >
                        that completely redefined my perspective
                    </motion.p>
                </div>
                <div className="mb-4 overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
                    >
                        on digital beauty.
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    >
                        Since then, my focus has shifted from
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
                    >
                        building functional tools to crafting
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
                    >
                        immersive digital expressions.
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                    >
                        Leveraging Three.js, WebGL, Motion and
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.9, ease: "easeOut" }}
                    >
                        other tools, I strive to create experiences
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                    >
                        that stimulate the senses and evoke
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.1, ease: "easeOut" }}
                    >
                        genuine emotion in everyone who interacts
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 40}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
                    >
                        with them.
                    </motion.p>
                </div>
            </div>
        </main>
    )
}