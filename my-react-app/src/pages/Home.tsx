"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";
import Roles from "../components/roles";

export default function Home() {
    const [show, setShow] = useState<boolean>(false);
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <main className="relative w-screen h-screen">
            {/* title */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-5">
                <div className="flex flex-col justify-center items-center text-white">
                    <h1 className="text-[3rem] tracking-[0.8rem] font-thin">
                        Kento Kawazoe
                    </h1>
                    <h2 className="text-[1rem] tracking-[0.8rem] font-light">
                        Portfolio
                    </h2>
                </div>
            </div>

            {/* texts at right */}
            <div className="absolute flex flex-col items-center justify-center top-0 right-15 w-[18vw] h-full">
                {/* roles */}
                <Roles show={show} setShow={setShow} />

                <div className="h-[50%] flex items-center justify-center">
                {/* monologue 2 */}
                {show && (
                    <div className="ml-3 text-[0.7rem] tracking-[0.1rem] font-light">
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                A Japanese student at
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                            >
                                Adelaide University and an
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            >
                                aspiring developer,
                            </motion.p>
                        </div>
                        <div className="mb-2 overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            >
                                designer, and artist.
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            >
                                While I personally enjoy
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            >
                                frontend development, I
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            >
                                have hands-on experience
                            </motion.p>
                        </div>
                        <div className="mb-2 overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            >
                                across the full-stack.
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                            >
                                Outside of programming, I
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                            >
                                like folding origami art,
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            >
                                playing basketball, tennis,
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                            >
                                chess, and spending time
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 40}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                            >
                                with my dog.
                            </motion.p>
                        </div>
                    </div>
                )}
                </div>
            </div>

            {/* images */}
            {show && (
                <div>
                    {/* basketball */}
                    <motion.div
                        className="absolute top-[10vh] left-[35vw] w-[15vw] h-[20vh] overflow-hidden"
                        animate={{
                            y: [5, 0, 5],
                        }}
                        transition={{
                            y: {
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <motion.img
                            src="/basketball.jpeg"
                            alt="Basketball"
                            className="w-full object-contain"
                            initial={{ opacity: 0, scaleX: 0, filter: "grayscale(80%) sepia(40%)" }}
                            animate={{ opacity: 1, scaleX: 1, filter: "grayscale(80%) sepia(40%)" }}
                            whileHover={{ filter: "grayscale(0%) sepia(0%)" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            onMouseEnter={() => set("Basketball")}
                            onMouseLeave={() => set("default")}
                        />
                    </motion.div>

                    {/* gud boi */}
                    <motion.div
                        className="absolute bottom-[10vh] left-[20vw] w-[20vw] h-[25vh] overflow-hidden"
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            y: {
                                duration: 5.1,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <motion.img
                            src="/gud-boi.jpeg"
                            alt="Gud Boi"
                            className="h-full object-contain"
                            initial={{ opacity: 0, scaleX: 0, filter: "grayscale(80%) sepia(40%)" }}
                            animate={{ opacity: 1, scaleX: 1, filter: "grayscale(80%) sepia(40%)" }}
                            whileHover={{ filter: "grayscale(0%) sepia(0%)" }}
                            transition={{ duration: 1, delay: 0.8 }}
                            onMouseEnter={() => set("Gud Boi")}
                            onMouseLeave={() => set("default")}
                        />
                    </motion.div>

                    {/* origami */}
                    <motion.div
                        className="absolute bottom-[12vh] right-[25vw] w-[15vw] h-[25vh] overflow-hidden"
                        animate={{
                            y: [3, -3, 3],
                        }}
                        transition={{
                            y: {
                                duration: 4.7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <motion.img
                            src="/shape-of-love.jpeg"
                            alt="Origami"
                            className="h-full object-contain"
                            initial={{ opacity: 0, scaleX: 0, filter: "grayscale(80%) sepia(40%)" }}
                            animate={{ opacity: 1, scaleX: 1, filter: "grayscale(80%) sepia(40%)" }}
                            whileHover={{ filter: "grayscale(0%) sepia(0%)" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            onMouseEnter={() => set("Origami")}
                            onMouseLeave={() => set("default")}
                        />
                    </motion.div>
                </div>
            )}
        </main>
    )
}
