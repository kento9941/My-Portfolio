"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Roles from "../components/roles";

export default function Home() {
    const [show, setShow] = useState<boolean>(false);
    return (
        <main className="relative w-screen h-screen">
            {/* title */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="flex flex-col justify-center items-center text-white select-none">
                    <h1 className="text-[3rem] tracking-[0.8rem] font-thin">
                        Kento Kawazoe
                    </h1>
                    <h2 className="text-[1rem] tracking-[0.8rem] font-light">
                        Portfolio
                    </h2>
                </div>
            </div>

            <motion.div className="absolute flex flex-col items-center justify-center top-0 right-15 w-[18vw] h-full">
                {/* roles */}
                <Roles show={show} setShow={setShow} />

                <div className="h-[50%] flex items-center justify-center">
                {/* monologue 2 */}
                {show && (
                    <div className="ml-3 text-[0.7rem] tracking-[0.1rem] font-light pointer-events-none select-none">
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                A Japanese student at
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                            >
                                Adelaide University and an
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            >
                                aspiring developer,
                            </motion.p>
                        </div>
                        <div className="mb-2 overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            >
                                designer, and artist.
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            >
                                While I personally enjoy
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            >
                                frontend development, I
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            >
                                have hands-on experience
                            </motion.p>
                        </div>
                        <div className="mb-3 overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            >
                                across the full-stack.
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                            >
                                Currently, I am deep-
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                            >
                                diving into WebGL,
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            >
                                Three.js, and 3D modeling
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                            >
                                to bring digital expression
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                            >
                                to the next level.
                            </motion.p>
                        </div>
                    </div>
                )}
                </div>
            </motion.div>
        </main>
    )
}
